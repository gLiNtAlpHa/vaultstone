import { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { consumeVerificationToken } from "@/lib/tokens";
import { sendWelcomeEmail } from "@/lib/email";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return Response.redirect(
      new URL("/login?error=missing_token", request.url),
    );
  }

  try {
    const verificationToken = await consumeVerificationToken(token);

    if (!verificationToken) {
      return Response.redirect(
        new URL("/login?error=invalid_or_expired_token", request.url),
      );
    }

    // Activate user
    const user = await prisma.user.update({
      where: { id: verificationToken.userId },
      data: {
        emailVerified: new Date(),
        status: "active",
      },
    });

    // Send welcome email
    await sendWelcomeEmail(user.email);

    return Response.redirect(
      new URL("/login?verified=true", request.url),
    );
  } catch (error) {
    console.error("Email verification error:", error);
    return Response.redirect(
      new URL("/login?error=verification_failed", request.url),
    );
  }
}
