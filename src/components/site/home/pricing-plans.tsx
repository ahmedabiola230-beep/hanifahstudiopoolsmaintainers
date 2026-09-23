import Link from "next/link";
import { Check } from "lucide-react";
import Reveal from "../reveal";
import { SectionHeading } from "../section-heading";
import { plans } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function PricingPlans({
  withHeading = true,
}: {
  withHeading?: boolean;
}) {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        {withHeading && (
          <SectionHeading
            pill="Care Plans"
            line1="Care Plans for Every"
            line2="Kind of Pool"
            intro="Simple monthly plans that keep your pool clean, efficient, and beautifully maintained. No long contracts, cancel any time with thirty days notice."
          />
        )}
        <div className="mt-14 grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08} className="h-full">
              <div
                className={cn(
                  "h-full rounded-[28px] p-8 flex flex-col transition-transform duration-300 hover:-translate-y-1.5",
                  plan.featured
                    ? "bg-navy-800 text-white ring-2 ring-aqua-400 shadow-2xl shadow-navy-900/25"
                    : "bg-navy-900 text-white"
                )}
              >
                {plan.featured && (
                  <span className="self-start mb-4 rounded-full bg-aqua-400 text-navy-950 text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-1.5">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-extrabold">{plan.name}</h3>
                <p className={cn("mt-2.5 leading-relaxed", plan.featured ? "text-white/70" : "text-white/60")}>
                  {plan.blurb}
                </p>
                <p className="mt-6 flex items-end gap-1">
                  <span className="text-5xl font-extrabold text-aqua-400">
                    {plan.price}
                  </span>
                  <span className="text-white/60 mb-1.5">{plan.period}</span>
                </p>
                <ul className="mt-7 space-y-3.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-aqua-400/20 text-aqua-300">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-white/80 text-[15px]">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center rounded-full h-[52px] font-bold transition-colors",
                    plan.featured
                      ? "bg-aqua-400 text-navy-950 hover:bg-aqua-300"
                      : "bg-white/10 text-white border border-white/15 hover:bg-aqua-400 hover:text-navy-950 hover:border-aqua-400"
                  )}
                >
                  Get Started
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-steel-500 text-[15px]">
            Prices shown are for pools up to 25,000 gallons. Bigger pools, spas,
            and water features cost a little more, and we always confirm the
            exact price before anything starts.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
