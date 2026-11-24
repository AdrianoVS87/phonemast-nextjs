import StructuredData from "@/components/seo/StructuredData";
import { faqPage } from "@/seo/schema";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  /** Page path for the FAQPage node. Omit when the page already marks the questions up itself. */
  schemaPath?: string;
}

/** Native <details> disclosure: works without JavaScript and ships none. */
export default function FAQAccordion({ items, schemaPath }: FAQAccordionProps) {
  return (
    <>
      {schemaPath ? <StructuredData nodes={[faqPage(schemaPath, items.map((i) => ({ question: i.question, answer: i.answer })))]} /> : null}
      <div className="faq-list">
        {items.map((item) => (
          <details key={item.question} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </>
  );
}
