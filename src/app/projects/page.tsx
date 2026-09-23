import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Timer } from "lucide-react";
import PageHero from "@/components/site/page-hero";
import Reveal from "@/components/site/reveal";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Projects | Cerulea Pools",
  description:
    "Recent pool builds from around Austin: infinity edges, lagoon pools, plunge pools, and full backyard transformations.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        pill="Our Work"
        title={"Pools We Have Built,\nBackyards We Changed"}
        intro="Every project below started as a conversation over a patch of grass. Scroll through and picture your own yard, then imagine the first weekend after the water is switched on."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 0.1}>
                <article className="group relative rounded-[28px] overflow-hidden shadow-lg shadow-navy-900/10">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={`${p.name} in ${p.location}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />
                    <div className="absolute left-6 right-6 bottom-6">
                      <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-white/75">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-aqua-300" />
                          {p.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Timer className="w-3.5 h-3.5 text-aqua-300" />
                          {p.duration}
                        </span>
                      </p>
                      <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-white">
                        {p.name}
                      </h2>
                      <p className="mt-2 text-white/70 leading-relaxed text-[15px] max-w-md">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="rounded-[32px] bg-ice-50 border border-navy-900/5 px-8 py-12 md:p-14 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
                Your yard could be the next one on this page
              </h2>
              <p className="mt-4 text-steel-500 max-w-xl mx-auto leading-relaxed">
                We take on a limited number of builds each season so every
                project gets the crew it deserves. Tell us about your space and
                we will let you know honestly what is possible.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 text-white font-bold px-8 h-14 hover:bg-aqua-400 hover:text-navy-950 transition-colors"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
