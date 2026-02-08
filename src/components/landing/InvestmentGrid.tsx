"use client";

import { useState, useMemo } from "react";
import { InvestmentCard } from "./InvestmentCard";
import { InvestmentFilters } from "./InvestmentFilters";

const ALL_INVESTMENTS = [
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
  {
    title: "Coral Bay Resort",
    location: "Phuket, Thailand",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&fit=crop",
    roi: 15.1,
    funded: 38,
    minInvestment: "0.15 ETH",
  },
  {
    title: "Manhattan Lofts",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    roi: 10.9,
    funded: 82,
    minInvestment: "2.0 ETH",
  },
  {
    title: "Solar Gardens",
    location: "Lisbon, Portugal",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    roi: 13.8,
    funded: 61,
    minInvestment: "0.25 ETH",
  },
];

export function InvestmentGrid() {
  const [filters, setFilters] = useState({ search: "", sort: "featured", minRoi: "any" });

  const filtered = useMemo(() => {
    let result = [...ALL_INVESTMENTS];

    if (filters.search) {
      const q = filters.search.toLowerCase();
      result = result.filter(
        (i) => i.title.toLowerCase().includes(q) || i.location.toLowerCase().includes(q)
      );
    }

    if (filters.minRoi !== "any") {
      const min = Number(filters.minRoi);
      result = result.filter((i) => i.roi >= min);
    }

    switch (filters.sort) {
      case "roi-high":
        result.sort((a, b) => b.roi - a.roi);
        break;
      case "roi-low":
        result.sort((a, b) => a.roi - b.roi);
        break;
      case "funded":
        result.sort((a, b) => b.funded - a.funded);
        break;
    }

    return result;
  }, [filters]);

  return (
    <div className="space-y-8">
      <InvestmentFilters onFilterChange={setFilters} />

      {filtered.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-lg text-foreground-muted">
            No investments match your filters. Try adjusting your search.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((investment) => (
            <InvestmentCard key={investment.title} {...investment} />
          ))}
        </div>
      )}
    </div>
  );
}
