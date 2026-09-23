import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, HeartHandshake, ShieldCheck, Timer } from "lucide-react";
import PageHero from "@/components/site/page-hero";
import Reveal from "@/components/site/reveal";
import { Pill, SectionHeading } from "@/components/site/section-heading";
import { heroStats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | Cerulea Pools",
  description:
    "Cerulea Pools started in 2013 with one truck and a simple idea: a pool company that shows up and does good work will always stand out.",
};

const values = [
  {
    icon: <Timer className="w-6 h-6" />,
    title: "Show up when we say we will",
    text: "Scheduled means scheduled. If a delay happens, you hear it from us before it affects your day, not after.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Fix it right the first time",
    text: "We do not patch problems or sell band aid fixes. Diagnose properly, quote fairly, repair once.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Treat every yard like our own",
    text: "We close gates, rinse decks, and leave your space cleaner than we found it. Every visit, every crew.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        pill="About Cerulea Pools"
        title={"A Pool Company Built on\nShowing Up and Doing It Right"}
        intro="We are a crew of Austin locals who believe owning a pool should be the best part of having a backyard, not another chore on the list."
      />

      {/* story */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] shadow-2xl shadow-navy-900/20">
                <Image
                  src="/images/service-construction.webp"
                  alt="A Cerulea pool build at dusk"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-[28px] overflow-hidden aspect-[16/9] shadow-xl shadow-navy-900/15 mt-6 hidden md:block">
                <Image
                  src="/images/gallery-4.webp"
                  alt="Detail of a finished Cerulea pool"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Pill>Our Story</Pill>
              <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.12] text-navy-900">
                One truck, two techs, and a short list of promises
              </h2>
              <div className="mt-6 space-y-5 text-steel-500 text-[17px] leading-relaxed">
                <p>
                  Cerulea Pools started in 2013 after our founder, Daniel
                  Reyes, spent eight years servicing pools for big companies
                  and kept watching the same story repeat: missed appointments,
                  surprise charges, and water nobody wanted to swim in. He
                  figured a pool company that simply showed up on time and did
                  good work would stand out in this town.
                </p>
                <p>
                  It did. Word travels fast in Austin, and by 2018 we were
                  building full custom pools on top of the maintenance routes
                  that started it all. Today we run six service crews and two
                  construction teams, but the rules have not changed since the
                  truck days. Give honest numbers, answer the phone, and leave
                  every yard better than you found it.
                </p>
                <p>
                  We are certified by the Pool &amp; Hot Tub Alliance, fully
                  licensed and insured in Texas, and stubborn about the details
                  other companies skip. That combination has earned us more
                  than 850 pools built or serviced and a 4.9 star rating we
                  work hard to keep.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {heroStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.07}>
                <p className="text-4xl md:text-5xl font-extrabold text-aqua-400">
                  {s.value}
                </p>
                <p className="mt-2 text-white/60">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* values */}
      <section className="bg-ice-50">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionHeading
            pill="How We Work"
            line1="Three Rules Every"
            line2="Crew Lives By"
            intro="These are not wall posters. They are the standards our techs and builders are reviewed on, and the reason clients stay with us for years."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="h-full">
                <div className="h-full bg-white rounded-3xl p-8 border border-navy-900/5 shadow-sm hover:shadow-lg transition-shadow">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-ice-100 text-aqua-600">
                    {v.icon}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-navy-900">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-steel-500 leading-relaxed">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] bg-navy-900 px-8 py-14 md:p-16 text-center">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(63,195,220,0.18)_0%,transparent_45%)]"
              />
              <div className="relative">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-aqua-400 text-navy-950 mx-auto">
                  <Award className="w-8 h-8" />
                </span>
                <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                  Come see what the fuss is about
                </h2>
                <p className="mt-4 text-white/65 max-w-xl mx-auto leading-relaxed">
                  Book a free site visit and we will walk your yard, talk
                  honestly about options, and leave you with real numbers. No
                  pressure, no obligation, no sales script.
                </p>
                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-aqua-400 text-navy-950 font-bold px-8 h-14 hover:bg-aqua-300 transition-colors"
                >
                  Book a Free Site Visit
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
