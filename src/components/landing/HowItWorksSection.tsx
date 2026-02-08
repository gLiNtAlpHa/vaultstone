import { SectionHeading } from "@/components/shared/SectionHeading";
import { StepCard } from "./StepCard";
import { UserPlus, Wallet, Search, BarChart3 } from "lucide-react";

const STEPS = [
  {
    icon: UserPlus,
    title: "Create & Verify Account",
    description:
      "Sign up in minutes. Complete KYC verification to unlock full investment access with institutional-grade security.",
  },
  {
    icon: Wallet,
    title: "Connect Wallet or Deposit",
    description:
      "Link your MetaMask wallet or deposit crypto directly. We support BTC, ETH, and USDT with instant confirmation.",
  },
  {
    icon: Search,
    title: "Browse Opportunities",
    description:
      "Explore curated real estate projects with detailed analytics, projected ROI, and full blockchain audit trails.",
  },
  {
    icon: BarChart3,
    title: "Invest & Track Returns",
    description:
      "Invest from as little as 0.1 ETH. Track your portfolio performance in real time and withdraw returns anytime.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="How It Works"
          subtitle="Start investing in real estate with crypto in 4 simple steps"
        />

        {/* Connecting line (desktop only) */}
        <div className="relative">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-primary-100 lg:block" aria-hidden="true" />
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <StepCard key={step.title} step={i + 1} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
