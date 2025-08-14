import PremiumButton from "@/components/PremiumButton";
import CounterAnimation from "@/components/CounterAnimation";

const HeroTextSection = () => {
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
    <section id="hero-text-section" className="relative z-10 text-center max-w-6xl mx-auto py-12 px-4 mobile-padding">
      {/* Main Headlines with premium typography */}
      <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16">
        <h1 className="font-heading text-gold text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tighter px-2 animate-fade-in-up">
          Life is extraordinary.
          <br />
          Unleash yours.
        </h1>
        <p className="font-body text-white text-center text-lg sm:text-xl md:text-2xl mt-4 px-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Empowering students and professionals to speak confidently and live purposefully.
        </p>
        <p className="font-body text-gray-200 text-center text-base sm:text-lg md:text-xl font-medium px-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Growth & Mindset Coach | Public Speaking Strategist
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mt-8 premium-fade-in px-4" style={{ animationDelay: '1.2s' }}>
          <div className="text-center premium-stat-card">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold">
              <CounterAnimation target={8} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center premium-stat-card">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold">
              <CounterAnimation target={500} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">Lives Transformed</div>
          </div>
          <div className="text-center premium-stat-card">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold">
              <CounterAnimation target={95} suffix="%" />
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Premium CTA Buttons - Updated with click handlers */}
      <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
        <PremiumButton 
          variant="default" 
          size="lg" 
          className="bg-white text-black hover:bg-gray-200 font-bold px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          onClick={() => handleButtonClick("Book Free Clarity Call")}
        >
          Book a free clarity call
        </PremiumButton>
        <PremiumButton 
          variant="outline" 
          size="lg" 
          className="border-white text-white hover:bg-white hover:text-black font-bold px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          onClick={() => handleButtonClick("Start now")}
        >
          Start now
        </PremiumButton>
        
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up hidden sm:block" style={{ animationDelay: '1.2s' }}>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center animate-pulse-subtle">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
        <p className="text-xs text-white mt-2 font-body">Scroll to explore</p>
      </div>
    </section>
  );
};

export default HeroTextSection;