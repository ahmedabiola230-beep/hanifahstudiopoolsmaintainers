import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Star } from "lucide-react";
import Reveal from "../reveal";
import { Pill } from "../section-heading";
import { heroStats, site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative bg-navy-900 overflow-hidden">
      {/* ambient glows */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(63,195,220,0.18)_0%,transparent_45%),radial-gradient(circle_at_0%_80%,rgba(17,73,123,0.5)_0%,transparent_55%)]"
      />
      {/* faint wave lines */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-40 text-aqua-400/10"
        preserveAspectRatio="none"
        viewBox="0 0 1440 160"
        fill="none"
      >
        <path
          d="M0 120 C240 40 480 200 720 120 C960 40 1200 200 1440 120"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M0 140 C240 60 480 220 720 140 C960 60 1200 220 1440 140"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-end min-h-[92vh] lg:min-h-[100vh] pt-36 md:pt-44">
          {/* copy */}
          <div className="pb-14 lg:pb-24">
            <Reveal>
              <Pill tone="dark">Austin Pool Design &amp; Care</Pill>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-[42px] leading-[1.06] md:text-6xl lg:text-[68px] font-extrabold tracking-tight text-white">
                We Build Pools Worth Staying Home For
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-lg">
                Cerulea designs, builds, and cares for custom pools across the
                Austin area. From the first sketch to the weekly water check,
                one crew handles every detail so all you have to do is swim.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-aqua-400 text-navy-950 font-bold px-8 h-14 hover:bg-aqua-300 transition-colors"
                >
                  Start Your Pool Project
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white font-semibold px-8 h-14 hover:border-aqua-400 hover:text-aqua-300 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {site.phone}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-10 flex items-center gap-3 text-white/70">
                <div className="flex -space-x-2">
                  {["bg-navy-700", "bg-aqua-500", "bg-navy-800", "bg-aqua-600"].map(
                    (c, i) => (
                      <span
                        key={i}
                        className={`w-9 h-9 rounded-full ${c} border-2 border-navy-900 flex items-center justify-center text-[11px] font-bold text-white`}
                      >
                        {["DR", "MT", "PS", "EM"][i]}
                      </span>
                    )
                  )}
                </div>
                <div className="text-sm leading-tight">
                  <span className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    <span className="text-white font-semibold ml-1">4.9</span>
                  </span>
                  <span className="text-white/60">
                    from 300+ verified Google reviews
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* image */}
          <div className="relative hidden lg:block">
            <Reveal delay={0.15} y={40}>
              <div className="relative">
                <Image
                  src="/images/hero-tech.png"
                  alt="Cerulea Pools technician in front of a luxury pool"
                  width={768}
                  height={1344}
                  priority
                  className="w-full max-w-[560px] ml-auto h-[82vh] object-cover object-top [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]"
                />
                {/* floating badge */}
                <div className="absolute left-0 bottom-24 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-xl shadow-navy-950/40">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-aqua-400 text-navy-950">
                    <ShieldCheck className="w-6 h-6" />
                  </span>
                  <div className="leading-tight">
                    <p className="font-bold text-white text-[15px]">
                      Licensed &amp; Insured
                    </p>
                    <p className="text-white/60 text-[13px]">
                      CPO certified technicians
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* stats strip */}
        <Reveal delay={0.1} className="relative z-10 pb-14">
          <div className="rounded-3xl bg-navy-850/80 backdrop-blur border border-white/10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/8">
            {heroStats.map((s) => (
              <div key={s.label} className="px-6 py-6 text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-extrabold text-aqua-400">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
