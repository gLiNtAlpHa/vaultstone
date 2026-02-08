import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { InvestmentCard } from "./InvestmentCard";

const FEATURED_INVESTMENTS = [
  {
    title: "Unity Towers Residence",
    location: "Dubai Marina, UAE",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    roi: 16.5,
    funded: 73,
    minInvestment: "0.5 ETH",
  },
  {
    title: "Greenfield Estate",
    location: "Austin, Texas, USA",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    roi: 14.2,
    funded: 89,
    minInvestment: "0.3 ETH",
  },
  {
    title: "Skyline Apartments",
    location: "London, United Kingdom",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    roi: 12.8,
    funded: 56,
    minInvestment: "0.1 ETH",
  },
  {
    title: "Oceanview Villas",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
    roi: 18.3,
    funded: 42,
    minInvestment: "0.2 ETH",
  },
  {
    title: "Metro Business Hub",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=600&h=400&fit=crop",
    roi: 13.5,
    funded: 95,
    minInvestment: "1.0 ETH",
  },
  {
    title: "Alpine Residences",
    location: "Zurich, Switzerland",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop",
    roi: 11.7,
    funded: 67,
    minInvestment: "0.5 ETH",
  },
];

export function InvestmentShowcase() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Investment Opportunities"
          subtitle="Browse curated real estate projects with proven returns"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_INVESTMENTS.map((investment) => (
            <InvestmentCard key={investment.title} {...investment} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/investments"
            className="inline-flex items-center gap-2 text-base font-semibold text-primary-600 transition-colors hover:text-primary-700"
          >
            View All Opportunities
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
