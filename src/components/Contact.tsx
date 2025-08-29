import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get <span className="text-brand-primary">Started</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transform your business tools into professional instances. Contact us to discuss your requirements and get a custom deployment plan.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-6 border border-brand-primary/20 shadow-card">
              <Mail className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm mb-4">Get detailed information about your specific needs</p>
              <Button variant="outline-glow" size="sm" className="w-full">
                Send Email
              </Button>
            </div>
            
            <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-6 border border-brand-primary/20 shadow-card">
              <MessageCircle className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-muted-foreground text-sm mb-4">Instant answers to your questions</p>
              <Button variant="outline-glow" size="sm" className="w-full">
                Start Chat
              </Button>
            </div>
            
            <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-6 border border-brand-primary/20 shadow-card">
              <Calendar className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Schedule Call</h3>
              <p className="text-muted-foreground text-sm mb-4">Book a consultation to discuss your project</p>
              <Button variant="outline-glow" size="sm" className="w-full">
                Book Now
              </Button>
            </div>
          </div>
          
          <div className="bg-gradient-card backdrop-blur-sm rounded-xl p-8 border border-brand-primary/20 shadow-glow">
            <h3 className="text-2xl font-bold mb-4">Start Your Instance Today</h3>
            <p className="text-muted-foreground mb-6">
              Join businesses who've transformed their operations with branded tool instances. 
              Professional deployment in 48-72 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="lg" className="px-8">
                Get Custom Quote
              </Button>
              <Button variant="outline-glow" size="lg" className="px-8">
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;