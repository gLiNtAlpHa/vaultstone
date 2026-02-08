import { NextRequest } from "next/server";
import { hash } from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { registerSchema } from "@/lib/validations/auth";
import { createVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/email";
import { rateLimit, rateLimitResponse } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  // Rate limit
  const rl = rateLimit(request, "register");
  if (!rl.success) return rateLimitResponse(rl.retryAfterMs);

  try {
    const body = await request.json();
    const validated = registerSchema.parse(body);

    // Check if email already exists — use generic error to prevent enumeration
    const existing = await prisma.user.findUnique({
      where: { email: validated.email },
      select: { id: true },
    });

    if (existing) {
      return Response.json(
        {
          success: false,
          error:
            "Unable to create account. If you already have an account, try signing in.",
        },
        { status: 409 },
      );
    }

    // Hash password with bcrypt cost factor 12
    const passwordHash = await hash(validated.password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        email: validated.email,
        passwordHash,
        status: "pending_verification",
      },
    });

    // Generate verification token and send email
    const token = await createVerificationToken(user.id);
    await sendVerificationEmail(user.email, token);

    return Response.json(
      {
        success: true,
        message:
          "Account created. Please check your email to verify your account.",
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { success: false, error: "Invalid input", details: error.errors },
        { status: 400 },
      );
    }

    console.error("Registration error:", error);
    return Response.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
