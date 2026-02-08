"use client";

import { useState } from "react";
import { Search } from "lucide-react";

interface InvestmentFiltersProps {
  onFilterChange: (filters: { search: string; sort: string; minRoi: string }) => void;
}

export function InvestmentFilters({ onFilterChange }: InvestmentFiltersProps) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [minRoi, setMinRoi] = useState("any");

  function update(updates: Partial<{ search: string; sort: string; minRoi: string }>) {
    const next = { search, sort, minRoi, ...updates };
    if (updates.search !== undefined) setSearch(updates.search);
    if (updates.sort !== undefined) setSort(updates.sort);
    if (updates.minRoi !== undefined) setMinRoi(updates.minRoi);
    onFilterChange(next);
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted" />
        <input
          type="text"
          placeholder="Search properties..."
          value={search}
          onChange={(e) => update({ search: e.target.value })}
          className="w-full rounded-xl border-2 border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-foreground-muted focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
        />
      </div>
      <select
        value={sort}
        onChange={(e) => update({ sort: e.target.value })}
        className="rounded-xl border-2 border-gray-200 bg-white px-4 py-2.5 text-sm text-foreground focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
      >
        <option value="featured">Featured</option>
        <option value="roi-high">Highest ROI</option>
        <option value="roi-low">Lowest ROI</option>
        <option value="funded">Most Funded</option>
      </select>
      <select
        value={minRoi}
        onChange={(e) => update({ minRoi: e.target.value })}
        className="rounded-xl border-2 border-gray-200 bg-white px-4 py-2.5 text-sm text-foreground focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
      >
        <option value="any">Any ROI</option>
        <option value="10">10%+</option>
        <option value="12">12%+</option>
        <option value="15">15%+</option>
      </select>
    </div>
  );
}
