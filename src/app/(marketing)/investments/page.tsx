import type { Metadata } from "next";
import { InvestmentGrid } from "@/components/landing/InvestmentGrid";

export const metadata: Metadata = {
  title: "Investment Opportunities",
  description:
    "Browse available real estate investment opportunities. Start investing from 0.1 ETH.",
  openGraph: {
    title: "Investment Opportunities | VaultStone",
    description: "Browse available real estate investment opportunities. Start investing from 0.1 ETH.",
    images: ["/og/investments.png"],
  },
};

export default function InvestmentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Investment Opportunities
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
              Browse curated real estate projects with proven returns. Filter by location, ROI, and
              minimum investment to find your ideal opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Grid */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <InvestmentGrid />
        </div>
      </section>
    </>
  );
}
