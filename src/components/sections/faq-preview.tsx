import { siteConfig } from "@/config/site"
import { Section } from "@/components/ui/section"
import { Marker } from "@/components/visuals/marker"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqPreview() {
  const { faq } = siteConfig.home

  return (
    <Section variant="muted" className="py-24 bg-muted/20">
      <div className="container px-4 md:px-6 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 font-display">
          <Marker>{faq.heading}</Marker>
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faq.questions.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-background border rounded-xl px-6 shadow-sm hover:shadow-md transition-all duration-200 data-[state=open]:border-primary/50">
              <AccordionTrigger className="text-lg font-bold text-left py-6 hover:no-underline font-display [&[data-state=open]]:text-primary transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 font-sans leading-relaxed border-t border-border/50 pt-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}
