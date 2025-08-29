import { Shield, Zap, Settings } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Branded Instance Ownership",
      description: "Your clients get their own segregated, branded instance. It feels like proprietary software without the development overhead."
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "From concept to live instance in 48-72 hours. We handle deployment, configuration, and handover so you can focus on your business."
    },
    {
      icon: Settings,
      title: "Full Control & Support",
      description: "Complete workflow ownership with optional ongoing support. Updates, integrations, and tweaks managed by our team."
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-brand-primary">Synaptix Core</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business tools into professional, owned instances that scale with your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-card backdrop-blur-sm rounded-xl p-8 border border-brand-primary/20 shadow-card hover:shadow-glow transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-brand-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-primary/30 transition-colors">
                <benefit.icon className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;