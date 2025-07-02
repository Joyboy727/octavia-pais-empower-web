
import { useRef } from "react";
import PremiumButton from "@/components/PremiumButton";
import CounterAnimation from "@/components/CounterAnimation";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 mobile-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy parallax-bg" />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Logo - New PNG with seamless integration */}
        <div className="mb-12 premium-scale-in">
          <img 
            src="/lovable-uploads/e762880d-c3aa-4d83-a05d-ff106ac7e818.png" 
            alt="Octavia Pais - Life & Speaking Coach" 
            className="h-32 sm:h-40 md:h-56 lg:h-64 w-auto mx-auto mb-8 seamless-logo animate-gentle-float premium-image-hover"
          />
        </div>

        {/* Main Headlines with better mobile spacing */}
        <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h1 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight px-2">
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
          
          <p className="text-lg sm:text-xl md:text-2xl text-gold font-medium premium-fade-in px-4" style={{ animationDelay: '4.5s' }}>
            Mindset & Public Speaking Coach — Bangalore
          </p>

          {/* Success Stats - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mt-8 premium-fade-in px-4" style={{ animationDelay: '5s' }}>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold">
                <CounterAnimation target={8} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold">
                <CounterAnimation target={500} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Lives Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold">
                <CounterAnimation target={95} suffix="%" />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons with improved mobile layout */}
        <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center mobile-stack premium-fade-in px-4" style={{ animationDelay: '5.5s' }}>
          <a 
            href="https://calendly.com/octaviathelifecoach/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <PremiumButton 
              variant="cta" 
              size="lg" 
              withGlow 
              withShimmer
              className="font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
            >
              Book Your Free Clarity Call
            </PremiumButton>
          </a>
          
          <a 
            href="tel:+917975163696" 
            className="transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
          >
            <PremiumButton 
              variant="outline" 
              size="lg"
              className="font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 hover:border-gold-light w-full sm:w-auto"
            >
              Call Octavia Now → 7975163696
            </PremiumButton>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 premium-fade-in hidden sm:block" style={{ animationDelay: '6s' }}>
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
