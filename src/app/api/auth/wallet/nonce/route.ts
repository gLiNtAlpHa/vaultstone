import { NextRequest } from "next/server";
import { randomUUID } from "crypto";
import { prisma } from "@/lib/db";
import { rateLimit, rateLimitResponse } from "@/lib/rate-limit";

export async function GET(request: NextRequest) {
  const rl = rateLimit(request, "walletAuth");
  if (!rl.success) return rateLimitResponse(rl.retryAfterMs);

  const address = request.nextUrl.searchParams.get("address");

  if (!address || !/^0x[a-fA-F0-9]{40}$/.test(address)) {
    return Response.json(
      { success: false, error: "Invalid wallet address" },
      { status: 400 },
    );
  }

  try {
    const nonce = randomUUID();

    // Delete any existing nonces for this address
    await prisma.walletNonce.deleteMany({
      where: { walletAddress: address.toLowerCase() },
    });

    // Create new nonce (expires in 5 minutes)
    await prisma.walletNonce.create({
      data: {
        walletAddress: address.toLowerCase(),
        nonce,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000),
      },
    });

    const message = `Sign this message to authenticate with CryptoInvest.\n\nNonce: ${nonce}`;

    return Response.json({
      success: true,
      data: { message, nonce },
    });
  } catch (error) {
    console.error("Wallet nonce error:", error);
    return Response.json(
      { success: false, error: "Failed to generate nonce" },
      { status: 500 },
    );
  }
}
