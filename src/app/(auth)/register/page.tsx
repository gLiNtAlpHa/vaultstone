import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create your CryptoInvest account and start investing in real estate.",
};

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md">
      <h1 className="mb-2 text-3xl font-bold">Create your account</h1>
      <p className="mb-8 text-foreground-muted">Start your investment journey today</p>
      {/* RegisterForm */}
      {/* OAuthButtons */}
    </div>
  );
}
