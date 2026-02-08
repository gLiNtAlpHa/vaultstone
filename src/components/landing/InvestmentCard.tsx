import Image from "next/image";
import Link from "next/link";
import { MapPin, TrendingUp } from "lucide-react";

interface InvestmentCardProps {
  title: string;
  location: string;
  image: string;
  roi: number;
  funded: number;
  minInvestment: string;
}

export function InvestmentCard({
  title,
  location,
  image,
  roi,
  funded,
  minInvestment,
}: InvestmentCardProps) {
  return (
    <div
      className="group overflow-hidden rounded-2xl bg-white transition-shadow hover:shadow-lg"
      style={{ boxShadow: "var(--shadow-neumorphic)" }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-success-500 px-3 py-1 text-xs font-bold text-white">
          <TrendingUp className="h-3 w-3" />
          {roi}% ROI
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <div className="mt-1.5 flex items-center gap-1 text-sm text-foreground-muted">
          <MapPin className="h-4 w-4" />
          {location}
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-foreground-muted">Funded</span>
            <span className="font-semibold text-primary-600">{funded}%</span>
          </div>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-primary-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary-400 to-primary-600 transition-all"
              style={{ width: `${funded}%` }}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-foreground-muted">
            Min. <span className="font-semibold text-foreground">{minInvestment}</span>
          </span>
          <Link
            href="/register"
            className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600"
          >
            Invest Now
          </Link>
        </div>
      </div>
    </div>
  );
}
