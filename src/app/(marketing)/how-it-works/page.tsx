import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { UserPlus, Wallet, Search, BarChart3, ArrowDownToLine } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn how to invest cryptocurrency into real estate in 5 simple steps.",
  openGraph: {
    title: "How It Works | VaultStone",
    description: "Learn how to invest cryptocurrency into real estate in 5 simple steps.",
    images: ["/og/how-it-works.png"],
  },
};

const STEPS = [
  {
    icon: UserPlus,
    title: "Create Account & Verify Identity",
    description:
      "Sign up with your email or Google account. Complete KYC verification to unlock full investment access. The process takes under 5 minutes.",
  },
  {
    icon: Wallet,
    title: "Connect Wallet or Deposit Crypto",
    description:
      "Link your MetaMask wallet for seamless transactions, or deposit BTC, ETH, or USDT directly to your platform wallet. Funds are secured by multi-signature technology.",
  },
  {
    icon: Search,
    title: "Browse Investment Opportunities",
    description:
      "Explore curated real estate projects with detailed analytics, projected ROI, blockchain audit trails, and property documentation. Filter by location, ROI, or minimum investment.",
  },
  {
    icon: BarChart3,
    title: "Invest & Track Performance",
    description:
      "Invest from as little as 0.1 ETH. Smart contracts execute automatically. Track your portfolio in real time with detailed performance dashboards and alerts.",
  },
  {
    icon: ArrowDownToLine,
    title: "Withdraw Returns",
    description:
      "Returns are distributed automatically to your wallet when project milestones are met. Withdraw to your external wallet anytime with no lock-up periods.",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is the minimum investment amount?",
    answer:
      "The minimum investment varies by property but starts as low as 0.1 ETH (approximately $300 at current rates). This makes real estate investment accessible to a much wider audience than traditional methods.",
  },
  {
    question: "How are returns distributed?",
    answer:
      "Returns are distributed automatically via smart contracts when project milestones are met. For rental properties, returns are distributed monthly. For development projects, returns are distributed upon completion and sale. All distributions are sent directly to your connected wallet.",
  },
  {
    question: "Is my investment secure?",
    answer:
      "Yes. All investments are secured by smart contracts on Hyperledger blockchain. Assets are stored in multi-signature wallets with institutional-grade security. The platform undergoes regular third-party security audits, and we maintain comprehensive insurance coverage.",
  },
  {
    question: "What cryptocurrencies do you accept?",
    answer:
      "We currently accept Bitcoin (BTC), Ethereum (ETH), and Tether (USDT). We plan to add support for additional currencies in Q3 2026.",
  },
  {
    question: "How do I verify my identity (KYC)?",
    answer:
      "After creating your account, you'll be guided through a simple KYC process. You'll need to provide a government-issued ID and a selfie for verification. The process is automated and typically completed within minutes.",
  },
  {
    question: "Can I sell my investment before the project completes?",
    answer:
      "A secondary market for trading investment tokens is on our roadmap for Q4 2026. Until then, investments are held until the project reaches its distribution milestones.",
  },
  {
    question: "What happens if a project underperforms?",
    answer:
      "All projects undergo rigorous due diligence before listing. However, real estate investments carry inherent risk. Each project listing includes detailed risk assessments, and our smart contracts include protective clauses for investors. We maintain a reserve fund for exceptional circumstances.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              How It Works
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
              Investing in real estate with cryptocurrency has never been simpler. Follow these 5 steps
              to start building your portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl space-y-16">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="flex flex-col items-center gap-6 sm:flex-row sm:items-start"
              >
                <div className="relative shrink-0">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white"
                    style={{ boxShadow: "var(--shadow-neumorphic)" }}
                  >
                    <step.icon className="h-10 w-10 text-primary-500" />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-foreground-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about investing with VaultStone"
          />
          <div className="mx-auto max-w-3xl">
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>
    </>
  );
}
