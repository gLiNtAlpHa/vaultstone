import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";

export function MarketingNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold text-primary-600">
          {SITE_NAME}
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-foreground-muted transition-colors hover:text-primary-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-xl border-2 border-primary-500 px-5 py-2 text-sm font-medium text-primary-500 transition-colors hover:bg-primary-50"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="rounded-xl bg-primary-500 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu */}
        <MobileMenu />
      </nav>
    </header>
  );
}
