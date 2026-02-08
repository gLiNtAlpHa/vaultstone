import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your VaultStone account password.",
};

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-md">
      <h1 className="mb-2 text-3xl font-bold">Forgot your password?</h1>
      <p className="mb-8 text-foreground-muted">
        Enter your email and we&apos;ll send you a reset link
      </p>
      {/* ForgotPasswordForm */}
    </div>
  );
}
