import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "../reveal";
import { Pill } from "../section-heading";
import { faqs } from "@/lib/site";

export default function FaqAccordion({
  items = faqs,
}: {
  items?: { question: string; answer: string }[];
}) {
  return (
    <div>
      {items.map((faq, i) => (
        <Reveal key={faq.question} delay={i * 0.05}>
          <AccordionItem
            value={`item-${i}`}
            className="border-b border-navy-900/10"
          >
            <AccordionTrigger className="py-6 text-left text-[17px] md:text-lg font-bold text-navy-900 hover:text-aqua-600 hover:no-underline [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-navy-900">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-steel-500 leading-relaxed text-[15.5px]">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        </Reveal>
      ))}
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Reveal>
              <Pill>Any Question?</Pill>
              <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12] text-navy-900">
                Questions, <span className="text-aqua-400">Answered</span>
              </h2>
              <p className="mt-5 text-steel-500 leading-relaxed max-w-md">
                Straight answers to the things homeowners ask us most. If yours
                is not on the list, call or send us a message and a real person
                will get back to you the same day.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible className="w-full">
              <FaqAccordion />
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
