import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/site/page-hero";
import Reveal from "@/components/site/reveal";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Services | Cerulea Pools",
  description:
    "Pool design and construction, weekly maintenance, water treatment, renovations, inspections and repairs, spas and outdoor features. All from one Austin crew.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        pill="Our Services"
        title={"Everything Your Pool Needs,\nUnder One Roof"}
        intro="Six services that cover the whole life of a pool, from a bare patch of dirt to decades of easy weekends. One company, one standard of work."
      />

      <div className="bg-white">
        {services.map((service, i) => {
          const imageLeft = i % 2 === 1;
          return (
            <section
              key={service.slug}
              id={service.slug}
              className={cn(
                "scroll-mt-24",
                i % 2 === 1 ? "bg-ice-50" : "bg-white"
              )}
            >
              <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <Reveal className={cn(imageLeft ? "lg:order-2" : "lg:order-1")}>
                    <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-aqua-600">
                      Service {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-4 text-3xl md:text-[42px] font-extrabold tracking-tight leading-[1.12] text-navy-900">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-steel-500 text-[17px] leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-7 grid sm:grid-cols-2 gap-3">
                      {service.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-[15px] text-ink-900/85"
                        >
                          <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-ice-100 text-aqua-600 shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/contact?service=${service.slug}`}
                      className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 text-white font-bold px-7 h-12 hover:bg-aqua-400 hover:text-navy-950 transition-colors"
                    >
                      Ask About {service.title.split(" ")[0]}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Reveal>
                  <Reveal
                    delay={0.1}
                    className={cn(imageLeft ? "lg:order-1" : "lg:order-2")}
                  >
                    <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-navy-900/20 aspect-[4/3]">
                      <Image
                        src={service.image || "/images/gallery-2.webp"}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* bottom cta */}
      <section className="bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Not sure which service you need?
            </h2>
            <p className="mt-4 text-white/65 max-w-xl mx-auto leading-relaxed">
              Tell us what is going on with your pool or your yard and we will
              point you in the right direction, even if the answer is not one
              of ours.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-aqua-400 text-navy-950 font-bold px-8 h-14 hover:bg-aqua-300 transition-colors"
            >
              Talk to a Real Person
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
