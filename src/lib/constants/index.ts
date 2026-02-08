export const SITE_NAME = "VaultStone";
export const SITE_DESCRIPTION =
  "Invest cryptocurrency into real estate development with blockchain transparency, smart contracts, and secure wallets.";

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Investments", href: "/investments" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  platform: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Investments", href: "/investments" },
    { label: "Dashboard", href: "/dashboard" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Company", href: "/company" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
} as const;

export const SUPPORTED_CURRENCIES = ["BTC", "ETH", "USDT"] as const;
