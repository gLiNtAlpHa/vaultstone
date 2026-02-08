import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeatureCard } from "./FeatureCard";
import { Blocks, FileCode2, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    icon: Blocks,
    title: "Hyperledger Blockchain",
    description:
      "Enterprise-grade distributed ledger ensures every transaction is immutable, auditable, and fully transparent to all stakeholders.",
  },
  {
    icon: FileCode2,
    title: "Smart Contracts",
    description:
      "Automated investment contracts execute instantly — no intermediaries, no delays. Returns are distributed automatically when milestones are met.",
  },
  {
    icon: ShieldCheck,
    title: "Bank-Grade Security",
    description:
      "Multi-signature wallets, 2FA authentication, and cold storage for assets. Your investments are protected by institutional-level security.",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Why CryptoInvest?"
          subtitle="Built on proven technology trusted by enterprises worldwide"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
