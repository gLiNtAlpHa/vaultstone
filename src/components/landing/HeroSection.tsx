import Link from "next/link";
import { ArrowRight, Shield, TrendingUp, Zap } from "lucide-react";
import { HeroBackground } from "./HeroBackground";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 sm:py-28 lg:py-36">
      <HeroBackground />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-1.5 text-sm font-medium text-primary-600 shadow-sm">
            <Zap className="h-4 w-4" />
            Blockchain-Powered Real Estate
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Invest Crypto into{" "}
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              Real Estate
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-foreground-muted sm:text-xl">
            Access institutional-grade real estate investments starting from 0.1 ETH. Powered by
            Hyperledger, secured by smart contracts, with full blockchain transparency.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-600 hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-500 px-8 py-3.5 text-base font-semibold text-primary-600 transition-colors hover:bg-primary-50"
            >
              How It Works
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { icon: Shield, label: "Bank-Grade Security", desc: "Multi-layer encryption & 2FA" },
              { icon: TrendingUp, label: "12-18% Annual ROI", desc: "Consistent real estate returns" },
              { icon: Zap, label: "Instant Settlement", desc: "Smart contract automation" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-primary-100 bg-white/80 p-5 backdrop-blur-sm"
                style={{ boxShadow: "var(--shadow-neumorphic)" }}
              >
                <item.icon className="mb-3 h-8 w-8 text-primary-500" />
                <h3 className="font-semibold text-foreground">{item.label}</h3>
                <p className="mt-1 text-sm text-foreground-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
