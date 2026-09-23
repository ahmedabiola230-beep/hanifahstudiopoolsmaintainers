"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "../section-heading";
import Reveal from "../reveal";
import { testimonials } from "@/lib/site";
import { cn } from "@/lib/utils";

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.57 5.57 0 0 1-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29A7.2 7.2 0 0 1 4.89 12c0-.8.14-1.57.38-2.29V6.62H1.29a12 12 0 0 0 0 10.76l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42A11.98 11.98 0 0 0 12 0 11.99 11.99 0 0 0 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : 380;
    track.scrollBy({ left: amount * dir, behavior: "smooth" });
  };

  return (
    <section className="bg-ice-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-20 md:pt-28 pb-20 md:pb-28">
        <SectionHeading
          pill="Testimonials"
          line1="Real Words from Real"
          line2="Pool Owners"
          intro="We could tell you we show up on time and stand behind our work. These homeowners already lived it, so we will let them do the talking."
        />
      </div>

      <Reveal className="relative pb-20 md:pb-28">
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 md:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pb-4"
        >
          {testimonials.map((t) => (
            <article
              key={t.name + t.date}
              data-card
              className="snap-start shrink-0 w-[320px] md:w-[380px] bg-white rounded-3xl p-7 shadow-sm border border-navy-900/5 flex flex-col"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm",
                      t.color
                    )}
                  >
                    {t.initials}
                  </span>
                  <div className="leading-tight">
                    <p className="font-bold text-navy-900">{t.name}</p>
                    <p className="text-steel-400 text-[13px] mt-0.5">{t.date}</p>
                  </div>
                </div>
                <GoogleG className="w-6 h-6" />
              </div>
              <div className="mt-4 flex items-center gap-1 text-amber-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    className="w-4 h-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                  </svg>
                ))}
                <span className="ml-1.5 text-sm font-bold text-navy-900">
                  {t.rating.toFixed(1)}
                </span>
              </div>
              <p className="mt-4 text-steel-500 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <Quote
                className="w-8 h-8 text-ice-100 self-end -mb-1"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-steel-400 text-sm">
            <Image
              src="/images/google-icon.svg"
              alt="Google reviews"
              width={18}
              height={18}
              className="rounded-sm"
            />
            4.9 out of 5 on Google
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => scrollBy(-1)}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy-900 text-white hover:bg-aqua-400 hover:text-navy-950 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={() => scrollBy(1)}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-aqua-400 text-navy-950 hover:bg-navy-900 hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
