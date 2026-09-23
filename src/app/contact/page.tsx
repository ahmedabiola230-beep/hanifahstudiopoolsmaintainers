import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/site/page-hero";
import Reveal from "@/components/site/reveal";
import ContactForm from "@/components/site/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Cerulea Pools",
  description:
    "Get a free quote from Cerulea Pools. Call, email, or send us a message and we will reply within one business day.",
};

const cards = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call or text",
    lines: [site.phone, "Fastest way to reach us"],
    href: site.phoneHref,
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email us",
    lines: [site.email, "We reply within one business day"],
    href: site.emailHref,
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Service area",
    lines: [site.serviceArea, "Free site visits included"],
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Office hours",
    lines: [site.hours, "Saturday by appointment"],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        pill="Contact Us"
        title={"Let Us Talk About\nYour Backyard"}
        intro="Whether you are planning a new pool, curious about care plans, or trying to figure out why your water looks off, we would love to hear from you."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* info cards */}
            <div className="lg:col-span-2 space-y-5">
              <Reveal>
                <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 tracking-tight">
                  Reach us directly
                </h2>
                <p className="mt-3 text-steel-500 leading-relaxed">
                  No call centers, no ticket numbers. When you contact Cerulea
                  you get our office team, and they actually know the crews.
                </p>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-4">
                {cards.map((c, i) => {
                  const inner = (
                    <>
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-ice-100 text-aqua-600">
                        {c.icon}
                      </span>
                      <h3 className="mt-4 font-bold text-navy-900">{c.title}</h3>
                      {c.lines.map((l, j) => (
                        <p
                          key={l}
                          className={
                            j === 0
                              ? "mt-1 text-ink-900/85 text-[15px] font-medium"
                              : "text-steel-400 text-sm"
                          }
                        >
                          {l}
                        </p>
                      ))}
                    </>
                  );
                  return (
                    <Reveal key={c.title} delay={i * 0.06}>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="block h-full bg-ice-50 border border-navy-900/5 rounded-3xl p-6 hover:border-aqua-400/50 hover:shadow-md transition-all"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="h-full bg-ice-50 border border-navy-900/5 rounded-3xl p-6">
                          {inner}
                        </div>
                      )}
                    </Reveal>
                  );
                })}
              </div>
            </div>

            {/* form */}
            <div className="lg:col-span-3">
              <Reveal delay={0.1}>
                <Suspense
                  fallback={
                    <div className="bg-ice-50 rounded-[28px] h-[560px] animate-pulse" />
                  }
                >
                  <ContactForm />
                </Suspense>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
