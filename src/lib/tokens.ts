import { randomUUID, createHash } from "crypto";
import { prisma } from "./db";

/**
 * Hash a token with SHA-256 before storing it in the database.
 * The raw token is sent to the user; only the hash is persisted.
 */
export function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

// ── Verification tokens ────────────────────────────────────────

export async function createVerificationToken(userId: string) {
  const raw = randomUUID();
  const hashed = hashToken(raw);

  await prisma.verificationToken.create({
    data: {
      userId,
      token: hashed,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
    },
  });

  return raw; // send this to the user via email
}

export async function consumeVerificationToken(rawToken: string) {
  const hashed = hashToken(rawToken);

  const token = await prisma.verificationToken.findUnique({
    where: { token: hashed },
  });

  if (!token) return null;
  if (token.usedAt) return null;
  if (token.expiresAt < new Date()) return null;

  // Mark as used
  await prisma.verificationToken.update({
    where: { id: token.id },
    data: { usedAt: new Date() },
  });

  return token;
}

// ── Password reset tokens ──────────────────────────────────────

export async function createPasswordResetToken(userId: string) {
  const raw = randomUUID();
  const hashed = hashToken(raw);

  // Invalidate any existing unused tokens for this user
  await prisma.passwordResetToken.updateMany({
    where: { userId, usedAt: null },
    data: { usedAt: new Date() },
  });

  await prisma.passwordResetToken.create({
    data: {
      userId,
      token: hashed,
      expiresAt: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
    },
  });

  return raw;
}

export async function consumePasswordResetToken(rawToken: string) {
  const hashed = hashToken(rawToken);

  const token = await prisma.passwordResetToken.findUnique({
    where: { token: hashed },
  });

  if (!token) return null;
  if (token.usedAt) return null;
  if (token.expiresAt < new Date()) return null;

  await prisma.passwordResetToken.update({
    where: { id: token.id },
    data: { usedAt: new Date() },
  });

  return token;
}
