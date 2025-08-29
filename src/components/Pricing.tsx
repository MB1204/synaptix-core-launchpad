import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter Micro Instance",
      price: "$750",
      description: "Perfect for single tool deployment",
      features: [
        "1 tool deployed & hosted",
        "Full walkthrough included",
        "Cloud login access",
        "Basic setup & configuration",
        "48-72 hour deployment"
      ],
      popular: false
    },
    {
      name: "Expanded Stack",
      price: "$1,200",
      description: "Ideal for integrated tool suites",
      features: [
        "1-3 tools deployed",
        "Cross-tool integrations",
        "Branded dashboards",
        "Advanced configuration",
        "Priority deployment",
        "Extended walkthrough"
      ],
      popular: true
    },
    {
      name: "Full Ops Cloud",
      price: "$2,000",
      description: "Complete operational solution",
      features: [
        "3+ tools deployed",
        "Advanced dashboards",
        "Automation logic",
        "Priority support included",
        "Custom integrations",
        "Dedicated deployment"
      ],
      popular: false
    }
  ];

  const supportPlans = [
    {
      name: "Standard Support",
      price: "$249/mo",
      description: "Essential ongoing maintenance",
      features: [
        "Minor tweaks & adjustments",
        "Bug fixes & patches",
        "Ongoing updates",
        "Email support",
        "Standard response time"
      ]
    },
    {
      name: "Priority Support",
      price: "+$200",
      description: "Expedited support service",
      features: [
        "48-72 hour turnaround",
        "Urgent request handling",
        "Priority queue access",
        "Phone support available",
        "Escalation management"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Plans & <span className="text-brand-primary">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the setup that fits your needs. All plans include full deployment and configuration.
          </p>
        </div>
        
        {/* Main Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gradient-card backdrop-blur-sm rounded-xl p-8 border shadow-card hover:shadow-glow transition-all duration-300 ${
                plan.popular 
                  ? 'border-brand-primary shadow-glow scale-105' 
                  : 'border-brand-primary/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-brand-primary to-brand-secondary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-brand-primary mb-2">{plan.price}</div>
                <div className="text-sm text-muted-foreground">One-time setup</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "premium" : "outline-glow"} 
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
        
        {/* Support Plans */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Support Plans <span className="text-brand-primary">(Optional)</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {supportPlans.map((plan, index) => (
              <div 
                key={index}
                className="bg-gradient-card backdrop-blur-sm rounded-xl p-8 border border-brand-primary/20 shadow-card"
              >
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-brand-primary">{plan.price}</div>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-brand-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              <strong>Add-on Integrations:</strong> $75–$150 per new feature
            </p>
            <Button variant="hero" size="lg">
              Contact for Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;