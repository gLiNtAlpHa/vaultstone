import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "CryptoInvest privacy policy and data protection practices.",
};

export default function PrivacyPage() {
  return (
    <article className="prose mx-auto max-w-3xl px-6 py-16">
      <h1>Privacy Policy</h1>
      <p className="text-foreground-muted">Last updated: February 2026</p>
      {/* Privacy content */}
    </article>
  );
}
