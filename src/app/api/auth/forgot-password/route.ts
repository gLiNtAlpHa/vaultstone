import { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { forgotPasswordSchema } from "@/lib/validations/auth";
import { createPasswordResetToken } from "@/lib/tokens";
import { sendPasswordResetEmail } from "@/lib/email";
import { rateLimit, rateLimitResponse } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const rl = rateLimit(request, "forgotPassword");
  if (!rl.success) return rateLimitResponse(rl.retryAfterMs);

  try {
    const body = await request.json();
    const validated = forgotPasswordSchema.parse(body);

    // Always return success to prevent email enumeration
    const successResponse = Response.json({
      success: true,
      message:
        "If an account exists with this email, we've sent a password reset link.",
    });

    const user = await prisma.user.findUnique({
      where: { email: validated.email },
      select: { id: true, email: true, passwordHash: true },
    });

    // If user doesn't exist or is OAuth-only (no password), still return success
    if (!user || !user.passwordHash) {
      return successResponse;
    }

    const token = await createPasswordResetToken(user.id);
    await sendPasswordResetEmail(user.email, token);

    return successResponse;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { success: false, error: "Invalid input", details: error.errors },
        { status: 400 },
      );
    }

    console.error("Forgot password error:", error);
    return Response.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
