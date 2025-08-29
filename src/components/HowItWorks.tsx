const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Plan",
      description: "Select the setup that matches your tool requirements - from single tool deployment to full operational cloud instances."
    },
    {
      number: "02",
      title: "We Deploy & Configure",
      description: "Our team handles the complete deployment process. You get a branded, segregated instance accessible only by your team."
    },
    {
      number: "03",
      title: "You Own & Control",
      description: "Access your tools via secure cloud login. Add optional support subscription for ongoing updates and integrations."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It <span className="text-brand-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From selection to deployment in three simple steps
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-brand-primary/50 to-transparent transform -translate-x-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;