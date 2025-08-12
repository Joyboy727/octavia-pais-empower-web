
import { Button } from "@/components/ui/button";
import PremiumButton from "@/components/PremiumButton";
import PremiumCard from "@/components/PremiumCard";

const AboutSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light parallax-bg" />
      <div className="premium-gradient-overlay absolute inset-0" />
      
      <div className="relative z-10 container mx-auto px-4 mobile-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Octavia's Image with Premium Effects - No Border */}
          <div className="animate-on-scroll premium-scale-in">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-gold-light/20 rounded-3xl transform rotate-3 animate-gentle-float premium-shadow opacity-50" />
              <div className="premium-image-hover">
                <img 
                  src="/lovable-uploads/10c64aa3-4a08-47fd-b71f-a056e7fb11ba.png"
                  alt="Octavia Pais - Life & Public Speaking Coach"
                  className="relative w-full rounded-3xl shadow-2xl border-0 outline-none"
                  loading="lazy"
                  style={{
                    border: 'none',
                    outline: 'none',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-gold to-gold-light text-navy px-6 py-3 rounded-full font-bold text-sm premium-badge premium-glow">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-navy rounded-full animate-pulse"></span>
                  8+ Years Experience
                </span>
              </div>
            </div>
          </div>

          {/* About Text with Enhanced Typography */}
          <div className="animate-on-scroll premium-slide-in-right" style={{ animationDelay: '0.3s' }}>
            <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8 gradient-text text-shadow-gold">
              Meet Octavia Pais
            </h2>
            
            <div className="space-y-6 text-responsive-lg leading-relaxed">
              <PremiumCard variant="glass" className="p-6 premium-fade-in border-0" style={{ animationDelay: '0.5s' }}>
                <p className="text-muted-foreground">
                  After years in <span className="text-gold font-semibold bg-gold/10 px-2 py-1 rounded">banking, education & leadership</span>, 
                  I now help people break mental barriers, build true self-belief, and 
                  <span className="text-gold font-semibold bg-gold/10 px-2 py-1 rounded ml-1">show up powerfully</span> in life and work.
                </p>
              </PremiumCard>
              
              <PremiumCard variant="glass" className="p-6 premium-fade-in border-0" style={{ animationDelay: '0.7s' }}>
                <p className="text-muted-foreground">
                  My coaching combines <span className="text-gold font-semibold bg-gold/10 px-2 py-1 rounded">mindset transformation</span> with 
                  real-world communication tools to help you own your story and express it clearly.
                </p>
              </PremiumCard>

              <PremiumCard variant="glass" className="p-6 premium-fade-in border-0" style={{ animationDelay: '0.9s' }}>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                    <span>NLP Practitioner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                    <span>MA Literature</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                    <span>B.Ed</span>
                  </div>
                </div>
              </PremiumCard>
            </div>
            
            <div className="mt-10 premium-fade-in" style={{ animationDelay: '1.1s' }}>
              <PremiumButton 
                variant="primary" 
                size="lg" 
                withGlow 
                withShimmer
                className="font-bold px-8 py-4 premium-button-hover"
                onClick={() => window.open("https://calendly.com/octaviathelifecoach/30min", "_blank")}
              >
                Book a Free Clarity Call
              </PremiumButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
