
import PremiumButton from "@/components/PremiumButton";
import PremiumCard from "@/components/PremiumCard";
import SocialMediaIcons from "@/components/SocialMediaIcons";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
      <div className="premium-gradient-overlay absolute inset-0" />
      
      <div className="relative z-10 container mx-auto px-4 mobile-padding text-center">
        <div className="max-w-5xl mx-auto animate-on-scroll">
          {/* Main CTA Content */}
          <PremiumCard variant="glass" className="p-12 mb-12 premium-glow">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8 gradient-text text-shadow-gold premium-slide-up">
              Ready to Rewrite Your Story?
            </h2>
            
            <p className="text-responsive-lg mb-8 text-muted-foreground leading-relaxed premium-fade-in" style={{ animationDelay: '0.3s' }}>
              Stop waiting for the "perfect" moment. Your transformation begins with a single decision. 
              Let's unlock your potential and create the life you've always envisioned.
            </p>

            {/* Transformation Promise */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 premium-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="text-gold font-semibold mb-1">Clear Direction</h3>
                <p className="text-sm text-muted-foreground">Know exactly where you're going</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💪</div>
                <h3 className="text-gold font-semibold mb-1">Unshakeable Confidence</h3>
                <p className="text-sm text-muted-foreground">Believe in yourself completely</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="text-gold font-semibold mb-1">Rapid Results</h3>
                <p className="text-sm text-muted-foreground">See changes from day one</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 premium-fade-in" style={{ animationDelay: '0.7s' }}>
              <PremiumButton 
                variant="cta" 
                size="lg" 
                withGlow 
                withShimmer
                className="font-bold px-10 py-5 text-xl"
              >
                Book Your Free Clarity Call
              </PremiumButton>
              
              <a href="tel:+919008808808" className="transform hover:scale-105 transition-transform duration-300">
                <PremiumButton 
                  variant="outline" 
                  size="lg"
                  className="font-bold px-10 py-5 text-xl border-2"
                >
                  Call Now: +91 90088 08808
                </PremiumButton>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground mb-8 premium-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>8+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>500+ Lives Transformed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>95% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>NLP Certified</span>
              </div>
            </div>
          </PremiumCard>

          {/* Social Media & Contact */}
          <PremiumCard variant="glass" className="p-8 premium-fade-in" style={{ animationDelay: '1.1s' }}>
            <h3 className="font-playfair text-2xl font-bold text-gold mb-6">
              Connect With Octavia
            </h3>
            <SocialMediaIcons variant="horizontal" size={28} className="mb-6" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div>
                <h4 className="text-gold font-semibold mb-2">Get In Touch</h4>
                <p className="mb-2">📧 octaviapais@gmail.com</p>
                <p>📱 +91 90088 08808</p>
              </div>
              <div>
                <h4 className="text-gold font-semibold mb-2">Based In</h4>
                <p className="mb-2">📍 Bangalore, India</p>
                <p>🌍 Available Online Worldwide</p>
              </div>
            </div>
          </PremiumCard>

          {/* Final Motivational Quote */}
          <div className="mt-12 premium-fade-in" style={{ animationDelay: '1.3s' }}>
            <blockquote className="text-lg md:text-xl italic text-muted-foreground mb-4">
              "Your current situation is not your final destination. The best is yet to come."
            </blockquote>
            <cite className="text-gold font-medium">— Octavia Pais</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
