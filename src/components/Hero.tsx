import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Your Tools, Your Brand, <br />
            <span className="text-brand-primary animate-glow-pulse">Your Control</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Deploy custom tool instances that feel like proprietary software. No development team required. 
            Full ownership, branded experience, optional ongoing support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToPricing}
              className="text-lg px-8 py-4"
            >
              Get Your Instance
            </Button>
            <Button 
              variant="outline-glow" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              See How It Works
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gradient-card backdrop-blur-sm rounded-lg p-6 border border-brand-primary/20 shadow-card">
              <div className="text-3xl font-bold text-brand-primary mb-2">$750+</div>
              <div className="text-sm text-muted-foreground">Setup from</div>
            </div>
            <div className="bg-gradient-card backdrop-blur-sm rounded-lg p-6 border border-brand-primary/20 shadow-card">
              <div className="text-3xl font-bold text-brand-primary mb-2">48-72h</div>
              <div className="text-sm text-muted-foreground">Deployment time</div>
            </div>
            <div className="bg-gradient-card backdrop-blur-sm rounded-lg p-6 border border-brand-primary/20 shadow-card">
              <div className="text-3xl font-bold text-brand-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Your ownership</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;