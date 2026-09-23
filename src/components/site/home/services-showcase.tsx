import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "../reveal";
import { SectionHeading } from "../section-heading";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function ServicesShowcase() {
  const showcase = services.slice(0, 4);
  return (
    <div>
      {showcase.map((service, i) => {
        const dark = i % 2 === 1; // alternate navy rows like the reference
        const imageLeft = i % 2 === 1;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={cn(dark ? "bg-navy-900" : "bg-white")}
          >
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* copy */}
                <Reveal
                  className={cn(
                    imageLeft ? "lg:order-2" : "lg:order-1",
                    !imageLeft && "lg:text-right"
                  )}
                >
                  <p
                    className={cn(
                      "text-[11px] font-bold tracking-[0.3em] uppercase",
                      dark ? "text-aqua-300" : "text-aqua-600"
                    )}
                  >
                    {String(i + 1).padStart(2, "0")} / What We Do
                  </p>
                  <h2
                    className={cn(
                      "mt-4 text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.12]",
                      dark ? "text-white" : "text-navy-900"
                    )}
                  >
                    {service.title}
                  </h2>
                  <p
                    className={cn(
                      "mt-5 text-[17px] leading-relaxed max-w-xl",
                      dark ? "text-white/65" : "text-steel-500",
                      !imageLeft && "lg:ml-auto"
                    )}
                  >
                    {service.short}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {service.bullets.slice(0, 3).map((b) => (
                      <li
                        key={b}
                        className={cn(
                          "flex items-start gap-2.5 text-[15px]",
                          dark ? "text-white/75" : "text-ink-900/80",
                          !imageLeft && "lg:flex-row-reverse lg:text-right"
                        )}
                      >
                        <Check className="w-5 h-5 text-aqua-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services#${service.slug}`}
                    className={cn(
                      "group mt-7 inline-flex items-center gap-2 font-bold text-[15px]",
                      dark
                        ? "text-aqua-300 hover:text-aqua-200"
                        : "text-navy-900 hover:text-aqua-600"
                    )}
                  >
                    Learn more about this service
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Reveal>

                {/* image */}
                <Reveal
                  delay={0.1}
                  className={cn(imageLeft ? "lg:order-1" : "lg:order-2")}
                >
                  <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-navy-950/25 aspect-[4/3]">
                    <Image
                      src={service.image || "/images/gallery-1.webp"}
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
      {/* link to all services */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pb-16 md:pb-20 text-center">
          <SectionHeading
            pill="And That Is Not All"
            line1="Two more ways we keep"
            line2="your pool life easy"
            intro="Inspections and repairs when something needs a sharp eye, plus spas and outdoor features when your backyard needs a little more than a pool."
          />
          <Reveal delay={0.15} className="mt-8">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-navy-900 text-white font-bold px-8 h-14 hover:bg-navy-800 transition-colors"
            >
              See All Six Services
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
