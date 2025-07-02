import PremiumButton from "@/components/PremiumButton";
import PremiumCard from "@/components/PremiumCard";
import SocialMediaIcons from "@/components/SocialMediaIcons";

const CTASection = () => {
  const handleButtonClick = (buttonText: string) => {
    const bookingButtons = ["Join The Bootcamp", "Apply Now", "Book Your Spot", "Book Free Clarity Call", "Start Your Transformation", "Send Message"];
    const callButtons = ["Call Now", "Call Now (desktop)", "Call Now (mobile)", "Call Octavia Now"];
    
    if (bookingButtons.includes(buttonText)) {
      window.open("https://calendly.com/octaviathelifecoach/30min", "_blank");
    } else if (callButtons.includes(buttonText)) {
      window.location.href = "tel:+917975163696";
    }
  };

  return (
    <section className="py-12 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
      <div className="premium-gradient-overlay absolute inset-0" />
      
      <div className="relative z-10 container mx-auto px-4 mobile-padding text-center">
        <div className="max-w-5xl mx-auto animate-on-scroll">
          {/* Main CTA Content */}
          <PremiumCard variant="glass" className="p-6 sm:p-12 mb-8 sm:mb-12 premium-glow">
            <h2 className="font-playfair text-2xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 gradient-text text-shadow-gold premium-slide-up">
              Ready to Rewrite Your Story?
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-muted-foreground leading-relaxed premium-fade-in px-2" style={{ animationDelay: '0.3s' }}>
              Stop waiting for the "perfect" moment. Your transformation begins with a single decision. 
              Let's unlock your potential and create the life you've always envisioned.
            </p>

            {/* Transformation Promise - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 premium-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-center p-4">
                <div className="text-2xl sm:text-3xl mb-2">🎯</div>
                <h3 className="text-gold font-semibold mb-1 text-sm sm:text-base">Clear Direction</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Know exactly where you're going</p>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl sm:text-3xl mb-2">💪</div>
                <h3 className="text-gold font-semibold mb-1 text-sm sm:text-base">Unshakeable Confidence</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Believe in yourself completely</p>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl sm:text-3xl mb-2">🚀</div>
                <h3 className="text-gold font-semibold mb-1 text-sm sm:text-base">Rapid Results</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">See changes from day one</p>
              </div>
            </div>

            {/* CTA Buttons - Updated with click handlers */}
            <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center mb-6 sm:mb-8 premium-fade-in px-4" style={{ animationDelay: '0.7s' }}>
              <PremiumButton 
                variant="cta" 
                size="lg" 
                withGlow 
                withShimmer
                className="font-bold px-6 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl w-full sm:w-auto"
                onClick={() => handleButtonClick("Book Free Clarity Call")}
              >
                Book Free Clarity Call
              </PremiumButton>
              
              <PremiumButton 
                variant="outline" 
                size="lg"
                className="font-bold px-6 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl border-2 w-full sm:w-auto"
                onClick={() => handleButtonClick("Call Now")}
              >
                Call Now: 7975163696
              </PremiumButton>
            </div>

            {/* Trust Indicators - Mobile Responsive */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 premium-fade-in px-4" style={{ animationDelay: '0.9s' }}>
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
          <PremiumCard variant="glass" className="p-6 sm:p-8 premium-fade-in" style={{ animationDelay: '1.1s' }}>
            <h3 className="font-playfair text-xl sm:text-2xl font-bold text-gold mb-4 sm:mb-6">
              Connect With Octavia
            </h3>
            <SocialMediaIcons variant="horizontal" size={24} className="mb-4 sm:mb-6" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div className="text-center sm:text-left">
                <h4 className="text-gold font-semibold mb-2">Get In Touch</h4>
                <p className="mb-2">📧 octaviapais@gmail.com</p>
                <p>📱 7975163696</p>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-gold font-semibold mb-2">Based In</h4>
                <p className="mb-2">📍 Bangalore, India</p>
                <p>🌍 Available Online Worldwide</p>
              </div>
            </div>
          </PremiumCard>

          {/* Final Motivational Quote */}
          <div className="mt-8 sm:mt-12 premium-fade-in" style={{ animationDelay: '1.3s' }}>
            <blockquote className="text-base sm:text-lg md:text-xl italic text-muted-foreground mb-4 px-4">
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
