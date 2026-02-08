import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Building2, Scale, Newspaper, MapPin, BadgeCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Company",
  description: "Our legal structure, licenses, compliance, and strategic partnerships.",
  openGraph: {
    title: "Company | VaultStone",
    description: "Our legal structure, licenses, regulatory compliance, and strategic partnerships.",
    images: ["/og/company.png"],
  },
};

const LICENSES = [
  { title: "Virtual Asset Service Provider (VASP)", jurisdiction: "Dubai, UAE", status: "Active" },
  {
    title: "Money Services Business (MSB)",
    jurisdiction: "United States (FinCEN)",
    status: "Active",
  },
  {
    title: "Payment Institution License",
    jurisdiction: "European Union",
    status: "In Progress",
  },
];

const PARTNERS = [
  "Hyperledger Foundation",
  "Chainlink",
  "Ernst & Young",
  "Dubai Land Department",
  "AWS",
  "Fireblocks",
];

const PRESS = [
  {
    outlet: "TechCrunch",
    title: "VaultStone raises $8M to tokenize real estate",
    date: "Jan 2026",
  },
  {
    outlet: "CoinDesk",
    title: "How blockchain is reshaping property investment",
    date: "Dec 2025",
  },
  {
    outlet: "Bloomberg",
    title: "Dubai startup bridges crypto and real estate",
    date: "Nov 2025",
  },
];

const OFFICES = [
  { city: "Dubai", address: "DIFC Innovation Hub, Gate Avenue, Dubai, UAE", primary: true },
  { city: "Singapore", address: "71 Robinson Road, #14-01, Singapore 068895", primary: false },
  { city: "London", address: "One Canada Square, Canary Wharf, London E14 5AB", primary: false },
];

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Built for Trust, <span className="text-primary-600">Regulated for Safety</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
              VaultStone operates under strict regulatory frameworks to ensure your investments are
              protected by the highest standards of compliance and governance.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Structure */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Legal Structure"
            subtitle="Incorporated and regulated across multiple jurisdictions"
          />
          <div
            className="mx-auto max-w-3xl rounded-2xl bg-white p-8"
            style={{ boxShadow: "var(--shadow-neumorphic)" }}
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary-50 p-3">
                <Building2 className="h-7 w-7 text-primary-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">VaultStone Holdings Ltd.</h3>
                <p className="mt-2 leading-relaxed text-foreground-muted">
                  Incorporated in the Dubai International Financial Centre (DIFC) as a Category 4
                  regulated entity. Our holding structure includes subsidiaries in Singapore and the
                  United Kingdom, enabling compliant operations across Asia, the Middle East, and Europe.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-success-50 px-4 py-1.5 text-sm font-medium text-success-600">
                  <BadgeCheck className="h-4 w-4" />
                  DIFC Regulated Entity
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Licenses & Compliance"
            subtitle="Operating under recognized regulatory frameworks"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LICENSES.map((license) => (
              <div
                key={license.title}
                className="rounded-2xl bg-white p-6"
                style={{ boxShadow: "var(--shadow-neumorphic)" }}
              >
                <Scale className="mb-4 h-7 w-7 text-primary-500" />
                <h4 className="font-bold text-foreground">{license.title}</h4>
                <p className="mt-1 text-sm text-foreground-muted">{license.jurisdiction}</p>
                <span
                  className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                    license.status === "Active"
                      ? "bg-success-50 text-success-600"
                      : "bg-warning-50 text-warning-600"
                  }`}
                >
                  {license.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Strategic Partners" subtitle="Working with industry leaders" />
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {PARTNERS.map((name) => (
              <div
                key={name}
                className="flex h-24 items-center justify-center rounded-2xl bg-white p-4"
                style={{ boxShadow: "var(--shadow-neumorphic)" }}
              >
                <span className="text-center text-sm font-semibold text-foreground-muted">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="In the Press" subtitle="What media is saying about us" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRESS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6"
                style={{ boxShadow: "var(--shadow-neumorphic)" }}
              >
                <div className="flex items-center gap-2">
                  <Newspaper className="h-5 w-5 text-primary-500" />
                  <span className="text-sm font-bold text-primary-600">{item.outlet}</span>
                </div>
                <h4 className="mt-3 font-semibold text-foreground">{item.title}</h4>
                <p className="mt-2 text-sm text-foreground-muted">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Our Offices"
            subtitle="Serving investors globally from three continents"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {OFFICES.map((office) => (
              <div
                key={office.city}
                className="rounded-2xl bg-white p-6"
                style={{ boxShadow: "var(--shadow-neumorphic)" }}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary-500" />
                  <h4 className="text-lg font-bold text-foreground">{office.city}</h4>
                  {office.primary && (
                    <span className="rounded-full bg-primary-50 px-2 py-0.5 text-xs font-semibold text-primary-600">
                      HQ
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-foreground-muted">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
