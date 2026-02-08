import { NextRequest } from "next/server";
import { hash } from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { resetPasswordSchema } from "@/lib/validations/auth";
import { consumePasswordResetToken } from "@/lib/tokens";
import { sendPasswordChangedEmail } from "@/lib/email";
import { rateLimit, rateLimitResponse } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const rl = rateLimit(request, "resetPassword");
  if (!rl.success) return rateLimitResponse(rl.retryAfterMs);

  try {
    const body = await request.json();
    const validated = resetPasswordSchema.parse(body);

    // Consume the token (validates + marks as used)
    const resetToken = await consumePasswordResetToken(validated.token);

    if (!resetToken) {
      return Response.json(
        {
          success: false,
          error:
            "Invalid or expired reset link. Please request a new password reset.",
        },
        { status: 400 },
      );
    }

    // Hash new password
    const passwordHash = await hash(validated.password, 12);

    // Update user password
    const user = await prisma.user.update({
      where: { id: resetToken.userId },
      data: {
        passwordHash,
        // Ensure email is verified if they can reset password
        emailVerified: new Date(),
        status: "active",
      },
    });

    // Send security notification
    await sendPasswordChangedEmail(user.email);

    return Response.json({
      success: true,
      message: "Password reset successfully. You can now sign in.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { success: false, error: "Invalid input", details: error.errors },
        { status: 400 },
      );
    }

    console.error("Reset password error:", error);
    return Response.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
