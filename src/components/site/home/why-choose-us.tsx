import Reveal from "../reveal";
import { SectionHeading } from "../section-heading";
import { whyChooseUs } from "@/lib/site";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-navy-900 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_90%_15%,rgba(63,195,220,0.12)_0%,transparent_40%)]"
      />
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        <SectionHeading
          pill="Why Choose Us"
          line1="The Pool Company That"
          line2="Actually Shows Up"
          intro="We deliver reliable, high quality pool care with a focus on safety, efficiency, and long term performance. Here is what that looks like in practice."
        />
        <div className="mt-14 grid md:grid-cols-2 gap-x-10 gap-y-8">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex gap-5 rounded-3xl bg-white/[0.04] border border-white/10 p-6 md:p-7 h-full hover:border-aqua-400/40 transition-colors">
                <span className="inline-flex items-center justify-center w-14 h-14 shrink-0 rounded-2xl bg-navy-700 text-aqua-300 text-xl font-extrabold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2.5 text-white/60 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
