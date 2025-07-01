
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 mobile-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy parallax-bg" />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-8 elegant-entrance">
          <img 
            src="/lovable-uploads/9d0b6c88-a75a-4ea9-9b78-179fd103e9f9.png" 
            alt="Octavia Pais Logo" 
            className="h-32 md:h-40 lg:h-48 w-auto mx-auto mb-6 filter drop-shadow-2xl animate-gentle-float premium-glow"
          />
        </div>

        {/* Main Headlines */}
        <div className="space-y-4 mb-12">
          <h1 className="font-playfair font-bold text-responsive-xl leading-tight">
            <span className="gradient-text text-shadow-gold premium-slide-in">
              Break Free from Doubt.
            </span>
            <br />
            <span className="text-white premium-slide-in" style={{ animationDelay: '0.3s' }}>
              Speak Up.
            </span>
            <br />
            <span className="gradient-text premium-slide-in" style={{ animationDelay: '0.6s' }}>
              Transform Your Life.
            </span>
          </h1>
          
          <p className="text-responsive-lg text-gold font-medium premium-fade-in" style={{ animationDelay: '0.9s' }}>
            Mindset & Public Speaking Coach — Bangalore
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mobile-stack premium-fade-in" style={{ animationDelay: '1.2s' }}>
          <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy font-bold px-6 py-3 rounded-full text-base premium-button-hover premium-glow">
            Book Your Free Clarity Call
          </Button>
          <a href="tel:+919008808808">
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy font-bold px-6 py-3 rounded-full text-base premium-button-hover">
              Call Octavia Now → +91 90088 08808
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
