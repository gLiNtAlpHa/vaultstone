import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div
      className="group rounded-2xl bg-white p-8 transition-shadow hover:shadow-lg"
      style={{ boxShadow: "var(--shadow-neumorphic)" }}
    >
      <div className="mb-5 inline-flex rounded-xl bg-primary-50 p-3">
        <Icon className="h-7 w-7 text-primary-500" />
      </div>
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-3 leading-relaxed text-foreground-muted">{description}</p>
    </div>
  );
}
