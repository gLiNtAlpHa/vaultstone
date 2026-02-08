import type { Metadata } from "next";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { InvestmentShowcase } from "@/components/landing/InvestmentShowcase";
import { StatsSection } from "@/components/landing/StatsSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { FeaturedProperty } from "@/components/landing/FeaturedProperty";
import { RoadmapSection } from "@/components/landing/RoadmapSection";
import { CtaBanner } from "@/components/landing/CtaBanner";

export const metadata: Metadata = {
  title: "VaultStone — Invest Cryptocurrency into Real Estate",
  description:
    "Invest cryptocurrency into real estate development with blockchain transparency, smart contracts, and secure wallets. Start from 0.1 ETH.",
  openGraph: {
    title: "VaultStone — Invest Cryptocurrency into Real Estate",
    description:
      "Access institutional-grade real estate investments starting from 0.1 ETH. Powered by Hyperledger, secured by smart contracts.",
    images: ["/og/home.png"],
  },
};

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <InvestmentShowcase />
      <StatsSection />
      <HowItWorksSection />
      <FeaturedProperty />
      <RoadmapSection />
      <CtaBanner />
    </>
  );
}
