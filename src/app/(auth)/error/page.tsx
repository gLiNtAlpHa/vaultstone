import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authentication Error",
};

export default function AuthErrorPage() {
  return (
    <div className="w-full max-w-md text-center">
      <h1 className="mb-2 text-3xl font-bold">Something went wrong</h1>
      <p className="mb-8 text-foreground-muted">
        There was an error with your authentication request. Please try again.
      </p>
      <Link
        href="/login"
        className="inline-block rounded-xl bg-primary-500 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-600"
      >
        Back to Sign In
      </Link>
    </div>
  );
}
