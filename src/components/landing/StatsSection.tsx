import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const STATS = [
  { value: 150, suffix: "M+", label: "Total Invested", prefix: "$" },
  { value: 12500, suffix: "+", label: "Active Investors", prefix: "" },
  { value: 85, suffix: "", label: "Properties Funded", prefix: "" },
  { value: 15.4, suffix: "%", label: "Avg. Annual ROI", prefix: "", decimals: 1 },
];

export function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </div>
              <p className="mt-2 text-sm font-medium text-primary-200 sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
