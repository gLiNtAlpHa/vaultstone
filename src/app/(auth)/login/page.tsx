import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your CryptoInvest account.",
};

export default function LoginPage() {
  return (
    <div className="w-full max-w-md">
      <h1 className="mb-2 text-3xl font-bold">Welcome back</h1>
      <p className="mb-8 text-foreground-muted">Sign in to your account to continue</p>
      {/* LoginForm */}
      {/* OAuthButtons */}
    </div>
  );
}
