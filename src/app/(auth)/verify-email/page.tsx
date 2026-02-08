import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Email",
  description: "Verify your email address to activate your account.",
};

export default function VerifyEmailPage() {
  return (
    <div className="w-full max-w-md text-center">
      <h1 className="mb-2 text-3xl font-bold">Check your email</h1>
      <p className="mb-8 text-foreground-muted">
        We&apos;ve sent a verification link to your email address. Click the link to activate your
        account.
      </p>
    </div>
  );
}
