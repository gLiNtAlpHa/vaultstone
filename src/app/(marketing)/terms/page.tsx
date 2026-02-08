import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "VaultStone terms of service and user agreement.",
};

export default function TermsPage() {
  return (
    <article className="prose mx-auto max-w-3xl px-6 py-16">
      <h1>Terms of Service</h1>
      <p className="text-foreground-muted">Last updated: February 2026</p>
      {/* Terms content */}
    </article>
  );
}
