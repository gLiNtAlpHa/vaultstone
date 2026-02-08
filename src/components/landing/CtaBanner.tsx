import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          Start Investing Today
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-primary-200">
          Join thousands of investors already earning returns from blockchain-secured real estate.
          Create your account in minutes and invest from as little as 0.1 ETH.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-primary-600 shadow-lg transition-all hover:bg-primary-50 hover:shadow-xl"
          >
            Create Free Account
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/investments"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            Browse Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
}
