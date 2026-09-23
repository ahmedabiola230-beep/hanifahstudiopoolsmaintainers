"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, MapPin, Timer } from "lucide-react";
import Reveal from "../reveal";
import { Pill } from "../section-heading";
import { projects } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = (dir: 1 | -1) => {
    if (timer.current) clearTimeout(timer.current);
    setIndex((i) => {
      const next = (i + dir + projects.length) % projects.length;
      return next;
    });
  };

  return (
    <section className="relative bg-navy-900 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(63,195,220,0.1)_0%,transparent_40%)]"
      />
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-end">
          <Reveal>
            <Pill tone="dark">Latest Projects</Pill>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12] text-white">
              Built with Pride.{" "}
              <span className="text-aqua-400">Made for Real Life.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6 lg:items-end">
              <p className="text-white/65 leading-relaxed max-w-md lg:text-right">
                A look at recent builds from around Austin, where each space is
                designed to combine beauty and function with real
                craftsmanship. Every one of these yards is different, and every
                one was signed off by a happy owner.
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous project"
                  onClick={() => go(-1)}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-aqua-400 hover:text-navy-950 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next project"
                  onClick={() => go(1)}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-aqua-400 text-navy-950 hover:bg-white transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-12">
          <div className="relative rounded-[32px] overflow-hidden h-[420px] md:h-[540px]">
            {projects.map((p, i) => (
              <div
                key={p.name}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700",
                  i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
                aria-hidden={i !== index}
              >
                <Image
                  src={p.image}
                  alt={`${p.name}, ${p.location}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 80rem"
                  className="object-cover"
                  priority={i === 0}
                />
                {/* glass info card */}
                <div className="absolute left-5 bottom-5 right-5 sm:left-8 sm:bottom-8 sm:right-auto sm:max-w-md bg-navy-950/45 backdrop-blur-xl border border-white/15 rounded-3xl p-6 md:p-8 shadow-2xl shadow-navy-950/50">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                    {p.name}
                  </h3>
                  <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/70">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-aqua-300" />
                      {p.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Timer className="w-4 h-4 text-aqua-300" />
                      {p.duration}
                    </span>
                  </p>
                  <p className="mt-3 text-white/75 leading-relaxed">
                    {p.description}
                  </p>
                  <Link
                    href="/projects"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-aqua-400 text-navy-950 font-bold px-6 h-11 hover:bg-aqua-300 transition-colors"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {projects.map((p, i) => (
              <button
                key={p.name}
                type="button"
                aria-label={`Show project ${p.name}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  i === index ? "w-8 bg-aqua-400" : "w-2.5 bg-white/25 hover:bg-white/50"
                )}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
