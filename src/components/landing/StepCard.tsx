import type { LucideIcon } from "lucide-react";

interface StepCardProps {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export function StepCard({ step, icon: Icon, title, description }: StepCardProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="relative mb-5">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white"
          style={{ boxShadow: "var(--shadow-neumorphic)" }}
        >
          <Icon className="h-8 w-8 text-primary-500" />
        </div>
        <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">
          {step}
        </span>
      </div>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-foreground-muted">{description}</p>
    </div>
  );
}
