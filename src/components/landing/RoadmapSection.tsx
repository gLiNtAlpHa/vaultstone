import { SectionHeading } from "@/components/shared/SectionHeading";
import { RoadmapMilestone } from "./RoadmapMilestone";

const MILESTONES = [
  {
    quarter: "Q1 2026",
    title: "Platform Launch",
    items: ["Public beta release", "KYC integration", "First 3 properties listed"],
    status: "completed" as const,
  },
  {
    quarter: "Q2 2026",
    title: "Wallet Integration",
    items: ["MetaMask support", "Multi-currency deposits", "Staking rewards"],
    status: "current" as const,
  },
  {
    quarter: "Q3 2026",
    title: "Global Expansion",
    items: ["EU market launch", "10+ property listings", "Mobile app beta"],
    status: "upcoming" as const,
  },
  {
    quarter: "Q4 2026",
    title: "DeFi Features",
    items: ["Secondary market trading", "Yield farming", "Governance token"],
    status: "upcoming" as const,
  },
];

export function RoadmapSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="Roadmap" subtitle="Our journey to democratize real estate investment" />

        <div className="relative">
          {/* Horizontal connecting line (desktop) */}
          <div
            className="absolute left-0 right-0 top-5 hidden h-0.5 bg-primary-100 lg:block"
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {MILESTONES.map((milestone) => (
              <RoadmapMilestone key={milestone.quarter} {...milestone} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
