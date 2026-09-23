import Reveal from "./reveal";
import { Pill } from "./section-heading";

export default function PageHero({
  pill,
  title,
  intro,
}: {
  pill: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative bg-navy-900 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle_at_85%_20%,#3FC3DC_0%,transparent_45%),radial-gradient(circle_at_10%_90%,#11497B_0%,transparent_50%)]"
      />
      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-20 md:pt-48 md:pb-24">
        <Reveal className="max-w-3xl">
          <Pill tone="dark">{pill}</Pill>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
