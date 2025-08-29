import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section id="features">
          <Benefits />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <Pricing />
        <section id="faq">
          <FAQ />
        </section>
        <Contact />
      </main>
      
      <footer className="bg-secondary/20 border-t border-brand-primary/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">S</span>
            </div>
            <span className="text-xl font-bold">
              Synaptix <span className="text-brand-primary">Core</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Synaptix Core. Professional micro cloud instances for tool ownership.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
