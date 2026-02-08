import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { Target, Eye, Heart, Globe, Shield, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our mission to democratize real estate investment through blockchain technology.",
  openGraph: {
    title: "About Us | VaultStone",
    description:
      "Learn about our mission to democratize real estate investment through blockchain technology.",
    images: ["/og/about.png"],
  },
};

const TIMELINE = [
  { year: "2024", event: "Company founded with a vision to bridge crypto and real estate" },
  { year: "2025", event: "Secured seed funding and assembled core engineering team" },
  { year: "Q1 2026", event: "Platform public beta launch with first 3 properties" },
  { year: "Q2 2026", event: "Full wallet integration and 1,000+ active investors" },
];

const TEAM = [
  {
    name: "Alexander Chen",
    role: "CEO & Co-Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Sarah Williams",
    role: "CTO & Co-Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Michael Torres",
    role: "Head of Blockchain",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Emily Park",
    role: "Head of Investments",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "David Kimura",
    role: "Lead Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    role: "Head of Compliance",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
  },
];

const VALUES = [
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Your assets are protected by multi-layer security. We never cut corners on safety.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Real estate investment should be accessible to anyone, anywhere, with any amount.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We leverage cutting-edge blockchain technology to solve real-world investment challenges.",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "Our investors are our partners. We grow together, transparently and collaboratively.",
  },
];

const STATS = [
  { value: 150, prefix: "$", suffix: "M+", label: "Total Invested" },
  { value: 12500, suffix: "+", label: "Active Investors" },
  { value: 85, label: "Properties Funded" },
  { value: 12, suffix: "+", label: "Countries Served" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Democratizing Real Estate Investment
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
              We believe everyone should have access to institutional-grade real estate investments. By
              combining blockchain transparency with traditional property expertise, we&apos;re making it
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Our Story" subtitle="From idea to platform — our journey so far" />
          <div className="mx-auto max-w-2xl">
            <div className="relative border-l-2 border-primary-200 pl-8">
              {TIMELINE.map((item) => (
                <div key={item.year} className="relative mb-10 last:mb-0">
                  <div className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary-500 bg-white">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary-500" />
                  </div>
                  <span className="text-sm font-bold text-primary-600">{item.year}</span>
                  <p className="mt-1 text-foreground-muted">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div
              className="rounded-2xl bg-white p-8 sm:p-10"
              style={{ boxShadow: "var(--shadow-neumorphic)" }}
            >
              <div className="mb-5 inline-flex rounded-xl bg-primary-50 p-3">
                <Target className="h-7 w-7 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-4 leading-relaxed text-foreground-muted">
                To make real estate investment accessible to everyone by removing traditional barriers —
                high minimums, geographic restrictions, and opaque processes — through the power of
                blockchain technology.
              </p>
            </div>
            <div
              className="rounded-2xl bg-white p-8 sm:p-10"
              style={{ boxShadow: "var(--shadow-neumorphic)" }}
            >
              <div className="mb-5 inline-flex rounded-xl bg-primary-50 p-3">
                <Eye className="h-7 w-7 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="mt-4 leading-relaxed text-foreground-muted">
                A world where anyone with a smartphone and cryptocurrency can build wealth through real
                estate — the most proven asset class in human history — with full transparency and
                instant liquidity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Our Team"
            subtitle="Industry veterans in blockchain, real estate, and fintech"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-2xl bg-white p-6 text-center"
                style={{ boxShadow: "var(--shadow-neumorphic)" }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
                <h4 className="mt-4 text-lg font-bold text-foreground">{member.name}</h4>
                <p className="text-sm text-foreground-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Our Values" subtitle="The principles that guide everything we do" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-white p-6"
                style={{ boxShadow: "var(--shadow-neumorphic)" }}
              >
                <value.icon className="mb-4 h-8 w-8 text-primary-500" />
                <h4 className="text-lg font-bold text-foreground">{value.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold text-white sm:text-4xl">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix ?? ""}
                    suffix={stat.suffix ?? ""}
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-primary-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
