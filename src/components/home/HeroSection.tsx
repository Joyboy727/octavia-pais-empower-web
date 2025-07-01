
import { useRef } from "react";
import PremiumButton from "@/components/PremiumButton";
import CounterAnimation from "@/components/CounterAnimation";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 mobile-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy parallax-bg" />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Logo - Made Larger */}
        <div className="mb-12 premium-scale-in">
          <img 
            src="/lovable-uploads/9d0b6c88-a75a-4ea9-9b78-179fd103e9f9.png" 
            alt="Octavia Pais Logo" 
            className="h-40 md:h-56 lg:h-64 w-auto mx-auto mb-8 filter drop-shadow-2xl animate-gentle-float premium-glow premium-image-hover"
          />
        </div>

        {/* Main Headlines with Typewriter Effect */}
        <div className="space-y-6 mb-16">
          <h1 className="font-playfair font-bold text-responsive-xl leading-tight">
            <span className="gradient-text text-shadow-gold premium-typewriter inline-block">
              Break Free from Doubt.
            </span>
            <br />
            <span className="text-white premium-slide-in" style={{ animationDelay: '3.5s' }}>
              Speak Up.
            </span>
            <br />
            <span className="gradient-text premium-slide-in" style={{ animationDelay: '4s' }}>
              Transform Your Life.
            </span>
          </h1>
          
          <p className="text-responsive-lg text-gold font-medium premium-fade-in" style={{ animationDelay: '4.5s' }}>
            Mindset & Public Speaking Coach — Bangalore
          </p>

          {/* Success Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8 premium-fade-in" style={{ animationDelay: '5s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold">
                <CounterAnimation target={8} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold">
                <CounterAnimation target={500} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">Lives Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold">
                <CounterAnimation target={95} suffix="%" />
              </div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons with Premium Styling */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mobile-stack premium-fade-in" style={{ animationDelay: '5.5s' }}>
          <PremiumButton 
            variant="cta" 
            size="lg" 
            withGlow 
            withShimmer
            className="font-bold px-8 py-4 text-lg"
          >
            Book Your Free Clarity Call
          </PremiumButton>
          
          <a href="tel:+919008808808" className="transform hover:scale-105 transition-transform duration-300">
            <PremiumButton 
              variant="outline" 
              size="lg"
              className="font-bold px-8 py-4 text-lg border-2 hover:border-gold-light"
            >
              Call Octavia Now → +91 90088 08808
            </PremiumButton>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 premium-fade-in" style={{ animationDelay: '6s' }}>
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full animate-bounce mt-2"></div>
          </div>
          <p className="text-xs text-gold mt-2">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
