import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, MapPin, Users, TrendingUp } from "lucide-react";

export function FeaturedProperty() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl bg-white" style={{ boxShadow: "var(--shadow-neumorphic)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 sm:h-80 lg:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
                alt="Unity Towers — luxury residential development in Dubai Marina"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute left-4 top-4 rounded-full bg-primary-500 px-4 py-1.5 text-sm font-bold text-white">
                Featured
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Unity Towers</h2>
              <div className="mt-2 flex items-center gap-1.5 text-foreground-muted">
                <MapPin className="h-4 w-4" />
                Dubai Marina, UAE
              </div>

              <p className="mt-5 leading-relaxed text-foreground-muted">
                A landmark 42-story twin tower residential development in the heart of Dubai Marina. 320 luxury
                apartments with premium amenities, rooftop infinity pool, and direct marina access. Phase 1 is 73%
                funded.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: TrendingUp, label: "Projected ROI", value: "16.5%" },
                  { icon: Users, label: "Investors", value: "1,240" },
                  { icon: Building2, label: "Units", value: "320" },
                  { icon: MapPin, label: "Completion", value: "Q4 2027" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <stat.icon className="mb-1 h-5 w-5 text-primary-500" />
                    <p className="text-lg font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-foreground-muted">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-600"
                >
                  Invest in Unity Towers
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
