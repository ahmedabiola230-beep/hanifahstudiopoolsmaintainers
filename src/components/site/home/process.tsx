import { ArrowRight, Hammer, MessageSquareText, PencilRuler, Waves } from "lucide-react";
import Reveal from "../reveal";
import { SectionHeading } from "../section-heading";
import { processSteps } from "@/lib/site";

const icons: Record<string, React.ReactNode> = {
  chat: <MessageSquareText className="w-7 h-7" />,
  pencil: <PencilRuler className="w-7 h-7" />,
  hammer: <Hammer className="w-7 h-7" />,
  waves: <Waves className="w-7 h-7" />,
};

export default function Process() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <SectionHeading
          pill="Our Process"
          line1="From First Sketch"
          line2="to First Swim"
          intro="From the first consultation to ongoing care, we handle every step with care and precision, so the experience feels as good as the result."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1} className="relative">
              <div className="text-center px-2">
                <span className="inline-flex items-center justify-center w-[72px] h-[72px] rounded-full bg-aqua-400 text-navy-950">
                  {icons[step.icon]}
                </span>
                <h3 className="mt-5 text-xl font-bold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-steel-500 leading-relaxed text-[15px]">
                  {step.text}
                </p>
              </div>
              {i < processSteps.length - 1 && (
                <ArrowRight
                  aria-hidden="true"
                  className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-navy-900"
                />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
