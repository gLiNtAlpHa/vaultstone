import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Set a new password for your VaultStone account.",
};

export default function ResetPasswordPage() {
  return (
    <div className="w-full max-w-md">
      <h1 className="mb-2 text-3xl font-bold">Set a new password</h1>
      <p className="mb-8 text-foreground-muted">
        Choose a strong password for your account
      </p>
      {/* ResetPasswordForm */}
    </div>
  );
}
