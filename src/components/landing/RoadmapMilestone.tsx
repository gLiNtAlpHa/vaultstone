import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface RoadmapMilestoneProps {
  quarter: string;
  title: string;
  items: string[];
  status: "completed" | "current" | "upcoming";
}

export function RoadmapMilestone({ quarter, title, items, status }: RoadmapMilestoneProps) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Status dot */}
      <div
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full border-4",
          status === "completed" && "border-success-500 bg-success-500 text-white",
          status === "current" && "border-primary-500 bg-primary-500 text-white",
          status === "upcoming" && "border-primary-200 bg-white text-primary-300"
        )}
      >
        {status === "completed" ? <Check className="h-5 w-5" /> : <span className="h-2.5 w-2.5 rounded-full bg-current" />}
      </div>

      <div className="mt-4 text-center">
        <span
          className={cn(
            "text-xs font-bold uppercase tracking-wider",
            status === "completed" && "text-success-500",
            status === "current" && "text-primary-500",
            status === "upcoming" && "text-foreground-muted"
          )}
        >
          {quarter}
        </span>
        <h4 className="mt-1 text-base font-bold text-foreground">{title}</h4>
        <ul className="mt-2 space-y-1">
          {items.map((item) => (
            <li key={item} className="text-sm text-foreground-muted">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
