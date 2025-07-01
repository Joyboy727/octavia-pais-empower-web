
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light parallax-bg" />
      <div className="relative z-10 container mx-auto px-4 mobile-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Octavia's Image */}
          <div className="animate-on-scroll premium-scale-in">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gold/20 rounded-3xl transform rotate-3 animate-gentle-float premium-shadow" />
              <img 
                src="/lovable-uploads/10c64aa3-4a08-47fd-b71f-a056e7fb11ba.png"
                alt="Octavia Pais - Life & Public Speaking Coach"
                className="relative w-full rounded-3xl shadow-2xl premium-image-hover"
              />
              <div className="absolute -bottom-4 -right-4 bg-gold text-navy px-4 py-2 rounded-full font-bold text-sm premium-badge">
                8+ Years Experience
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="animate-on-scroll premium-slide-in-right" style={{ animationDelay: '0.3s' }}>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6 gradient-text">
              Meet Octavia Pais
            </h2>
            <div className="space-y-4 text-responsive-lg leading-relaxed text-muted-foreground">
              <p className="premium-fade-in" style={{ animationDelay: '0.5s' }}>
                After years in <span className="text-gold font-medium">banking, education & leadership</span>, 
                I now help people break mental barriers, build true self-belief, and 
                <span className="text-gold font-medium"> show up powerfully</span> in life and work.
              </p>
              <p className="premium-fade-in" style={{ animationDelay: '0.7s' }}>
                My coaching combines <span className="text-gold font-medium">mindset transformation</span> with 
                real-world communication tools to help you own your story and express it clearly.
              </p>
            </div>
            <div className="mt-8 premium-fade-in" style={{ animationDelay: '0.9s' }}>
              <Button className="bg-gold hover:bg-gold-dark text-navy font-bold px-6 py-3 rounded-full premium-button-hover">
                Learn More About My Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
