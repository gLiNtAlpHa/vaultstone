import { NextRequest } from "next/server";

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const store = new Map<string, RateLimitEntry>();

// Clean up expired entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store) {
    if (now > entry.resetAt) {
      store.delete(key);
    }
  }
}, 60_000);

type RateLimitConfig = {
  limit: number;
  windowMs: number;
};

export const RATE_LIMITS = {
  register: { limit: 5, windowMs: 15 * 60 * 1000 },
  login: { limit: 5, windowMs: 15 * 60 * 1000 },
  forgotPassword: { limit: 3, windowMs: 15 * 60 * 1000 },
  resetPassword: { limit: 5, windowMs: 15 * 60 * 1000 },
  walletAuth: { limit: 10, windowMs: 15 * 60 * 1000 },
  contact: { limit: 3, windowMs: 15 * 60 * 1000 },
} as const satisfies Record<string, RateLimitConfig>;

export type RateLimitKey = keyof typeof RATE_LIMITS;

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "anonymous"
  );
}

export function rateLimit(
  request: NextRequest,
  key: RateLimitKey,
): { success: true } | { success: false; retryAfterMs: number } {
  const config = RATE_LIMITS[key];
  const ip = getClientIp(request);
  const storeKey = `${key}:${ip}`;
  const now = Date.now();

  const entry = store.get(storeKey);

  if (!entry || now > entry.resetAt) {
    store.set(storeKey, { count: 1, resetAt: now + config.windowMs });
    return { success: true };
  }

  if (entry.count >= config.limit) {
    return { success: false, retryAfterMs: entry.resetAt - now };
  }

  entry.count += 1;
  return { success: true };
}

export function rateLimitResponse(retryAfterMs: number) {
  const retryAfterSec = Math.ceil(retryAfterMs / 1000);
  return Response.json(
    { success: false, error: "Too many requests. Please try again later." },
    {
      status: 429,
      headers: { "Retry-After": String(retryAfterSec) },
    },
  );
}
