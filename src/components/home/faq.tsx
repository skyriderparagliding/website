import { FadeUp } from "@/components/motion/fade-up";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/testimonials";
import { JsonLd } from "@/components/seo/json-ld";
import { FAQSchema } from "@/components/seo/schemas";

export function FAQSection() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <JsonLd data={FAQSchema(faqs)} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <FadeUp className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </div>
    </section>
  );
}
