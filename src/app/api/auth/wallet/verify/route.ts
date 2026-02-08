import { NextRequest } from "next/server";
import { verifyMessage } from "ethers";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { rateLimit, rateLimitResponse } from "@/lib/rate-limit";
import { encode } from "next-auth/jwt";

const walletVerifySchema = z.object({
  address: z.string().regex(/^0x[a-fA-F0-9]{40}$/, "Invalid wallet address"),
  signature: z.string().min(1, "Signature is required"),
});

export async function POST(request: NextRequest) {
  const rl = rateLimit(request, "walletAuth");
  if (!rl.success) return rateLimitResponse(rl.retryAfterMs);

  try {
    const body = await request.json();
    const validated = walletVerifySchema.parse(body);
    const address = validated.address.toLowerCase();

    // Find the nonce for this address
    const walletNonce = await prisma.walletNonce.findFirst({
      where: {
        walletAddress: address,
        expiresAt: { gt: new Date() },
      },
      orderBy: { createdAt: "desc" },
    });

    if (!walletNonce) {
      return Response.json(
        { success: false, error: "No valid nonce found. Please try again." },
        { status: 400 },
      );
    }

    // Verify the signature
    const message = `Sign this message to authenticate with CryptoInvest.\n\nNonce: ${walletNonce.nonce}`;
    let recoveredAddress: string;

    try {
      recoveredAddress = verifyMessage(message, validated.signature);
    } catch {
      return Response.json(
        { success: false, error: "Invalid signature" },
        { status: 401 },
      );
    }

    if (recoveredAddress.toLowerCase() !== address) {
      return Response.json(
        { success: false, error: "Signature does not match address" },
        { status: 401 },
      );
    }

    // Delete the used nonce
    await prisma.walletNonce.delete({ where: { id: walletNonce.id } });

    // Find or create user with this wallet address
    let user = await prisma.user.findFirst({
      where: { walletAddress: address },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: `${address}@wallet.cryptoinvest`,
          walletAddress: address,
          emailVerified: new Date(),
          status: "active",
        },
      });
    }

    // Generate a JWT token for the session
    const token = await encode({
      token: {
        id: user.id,
        email: user.email,
        walletAddress: user.walletAddress,
      },
      secret: process.env.NEXTAUTH_SECRET!,
    });

    return Response.json(
      { success: true, data: { token, userId: user.id } },
      {
        headers: {
          "Set-Cookie": `next-auth.session-token=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${30 * 24 * 60 * 60}${process.env.NODE_ENV === "production" ? "; Secure" : ""}`,
        },
      },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { success: false, error: "Invalid input", details: error.errors },
        { status: 400 },
      );
    }

    console.error("Wallet verify error:", error);
    return Response.json(
      { success: false, error: "Authentication failed" },
      { status: 500 },
    );
  }
}
