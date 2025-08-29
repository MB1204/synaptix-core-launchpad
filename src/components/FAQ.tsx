import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How is this different from SaaS tools?",
      answer: "Unlike shared SaaS platforms, you get your own dedicated, branded instance. It feels like proprietary software built specifically for your business, with full control over data and customization."
    },
    {
      question: "What happens after deployment?",
      answer: "You receive login credentials and a complete walkthrough. Your instance is hosted on our infrastructure but completely segregated for your exclusive use. Optional support plans ensure ongoing maintenance and updates."
    },
    {
      question: "Can I integrate with my existing systems?",
      answer: "Yes! We specialize in cross-tool integrations and can connect your instance with existing systems. Custom integrations are available as add-ons for $75-$150 per feature."
    },
    {
      question: "What about data security and ownership?",
      answer: "Your data stays in your segregated instance. You maintain full ownership and control. We provide the infrastructure and maintenance, but your business data belongs to you."
    },
    {
      question: "How quickly can you deploy?",
      answer: "Standard deployment takes 48-72 hours for most configurations. More complex setups with multiple tools and integrations may take 5-7 business days."
    },
    {
      question: "Do I need technical knowledge to use this?",
      answer: "Not at all. We handle all technical aspects including deployment, configuration, and maintenance. You simply log in and use your tools like any professional software."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-brand-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our micro cloud instances
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Collapsible key={index} open={openItems.includes(index)}>
              <div className="border border-brand-primary/20 rounded-lg mb-4 bg-gradient-card backdrop-blur-sm">
                <CollapsibleTrigger 
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-brand-primary/5 transition-colors rounded-lg"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-brand-primary transition-transform ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`} 
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;