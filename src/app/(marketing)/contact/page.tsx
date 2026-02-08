import type { Metadata } from "next";
import { ContactForm } from "@/components/landing/ContactForm";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our team. We're here to help with your investment journey.",
  openGraph: {
    title: "Contact Us | VaultStone",
    description: "Get in touch with our team. We're here to help with your investment journey.",
    images: ["/og/contact.png"],
  },
};

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "support@vaultstone.com",
    href: "mailto:support@vaultstone.com",
  },
  { icon: Phone, label: "Phone", value: "+971 4 123 4567", href: "tel:+97141234567" },
  { icon: Clock, label: "Business Hours", value: "Mon-Fri, 9AM-6PM GST", href: null },
  { icon: MapPin, label: "Headquarters", value: "DIFC Innovation Hub, Dubai, UAE", href: null },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
              Have a question about investing, partnerships, or our platform? Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div
                className="rounded-2xl bg-white p-8"
                style={{ boxShadow: "var(--shadow-neumorphic)" }}
              >
                <h2 className="mb-6 text-2xl font-bold text-foreground">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {CONTACT_INFO.map((info) => (
                  <div
                    key={info.label}
                    className="rounded-2xl bg-white p-6"
                    style={{ boxShadow: "var(--shadow-neumorphic)" }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-primary-50 p-2.5">
                        <info.icon className="h-5 w-5 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{info.label}</h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="mt-0.5 text-sm text-primary-600 transition-colors hover:text-primary-700"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-sm text-foreground-muted">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
