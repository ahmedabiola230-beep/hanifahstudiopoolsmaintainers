import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, FileText, RefreshCcw } from "lucide-react";
import PageHero from "@/components/site/page-hero";
import Reveal from "@/components/site/reveal";
import PricingPlans from "@/components/site/home/pricing-plans";
import { FaqSection } from "@/components/site/home/faq";

export const metadata: Metadata = {
  title: "Care Plans & Pricing | Cerulea Pools",
  description:
    "Simple monthly pool care plans from $129 a month. Weekly cleaning, water chemistry, equipment care, and priority scheduling with no long contracts.",
};

const notes = [
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Flat monthly pricing",
    text: "The price you see is the price you pay. Chemicals included in every plan, with no fuel surcharges or trip fees tacked on later.",
  },
  {
    icon: <RefreshCcw className="w-6 h-6" />,
    title: "No long contracts",
    text: "Every plan runs month to month. If we ever stop earning it, you can cancel with thirty days notice and keep your photo reports.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Photo reports included",
    text: "After every visit you get a short report with readings and photos of your equipment, so you always know exactly what you are paying for.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        pill="Care Plans & Pricing"
        title={"Pool Care That Pays\nfor Itself in Peace of Mind"}
        intro="Pick the plan that fits your pool and your schedule. Everything is month to month, chemicals are included, and your same tech shows up every week."
      />

      <PricingPlans />

      {/* how pricing works */}
      <section className="bg-ice-50">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.12] text-navy-900">
                What you get with{" "}
                <span className="text-aqua-400">every single plan</span>
              </h2>
              <p className="mt-5 text-steel-500 text-[17px] leading-relaxed">
                We keep pricing simple because pool care is complicated enough.
                All three plans include the essentials below, and upgrades are
                always your choice, never our upsell.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-navy-900 text-white font-bold px-8 h-14 hover:bg-aqua-400 hover:text-navy-950 transition-colors"
              >
                Request Your Plan
              </Link>
            </Reveal>
            <div className="space-y-5">
              {notes.map((n, i) => (
                <Reveal key={n.title} delay={i * 0.08}>
                  <div className="flex gap-5 bg-white rounded-3xl border border-navy-900/5 p-6 shadow-sm">
                    <span className="inline-flex items-center justify-center w-[52px] h-[52px] shrink-0 rounded-2xl bg-ice-100 text-aqua-600">
                      {n.icon}
                    </span>
                    <div>
                      <h3 className="font-bold text-navy-900 text-lg">
                        {n.title}
                      </h3>
                      <p className="mt-1.5 text-steel-500 leading-relaxed">
                        {n.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
