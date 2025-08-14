import CounterAnimation from "@/components/CounterAnimation";
import PremiumCard from "@/components/PremiumCard";

const WhoIHelpSection = () => {
  const challenges = [
    { icon: "🔒", text: "Stuck", delay: "0.1s", description: "Trapped in your current situation with no clear way forward" },
    { icon: "😰", text: "Overwhelmed", delay: "0.2s", description: "Too many thoughts, too much pressure, zero clarity" },
    { icon: "🤔", text: "Overthinking", delay: "0.3s", description: "Paralyzed by what-ifs, doubts, and constant second-guessing" },
    { icon: "🚀", text: "Ready for Action", delay: "0.4s", description: "You know there’s more for you—and you're ready to claim it" }
  ];

  return (
    <section className="py-20 bg-navy-light/30 relative overflow-hidden">
      <div className="absolute inset-0 premium-gradient-overlay" />
      <div className="relative z-10 container mx-auto px-4 mobile-padding">
        <div className="text-center mb-16 animate-on-scroll">
          {/* Enhanced Age Indicator */}
          <PremiumCard variant="glass" className="inline-block p-8 mb-8 premium-scale-in">
            <div className="text-6xl md:text-8xl font-bold text-gold premium-glow">
              <CounterAnimation target={18} suffix="+" />
            </div>
            <div className="text-lg text-muted-foreground mt-2">Years & Above</div>
            <div className="text-sm text-gold font-medium">All Ages Welcome</div>
          </PremiumCard>
          
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-8 gradient-text premium-slide-up text-shadow-gold">
            This Is Where the Shift Begins
          </h2>
          
          <p className="text-responsive-lg text-muted-foreground mb-12 max-w-3xl mx-auto premium-fade-in" style={{ animationDelay: '0.3s' }}>
            Whether you're battling self-doubt, buried under overthinking, or standing at the edge of something big—this space is made for your transformation.
          </p>
          <p className="text-responsive-lg text-muted-foreground mb-12 max-w-3xl mx-auto premium-fade-in" style={{ animationDelay: '0.3s' }}>
            Here’s what I help you move through:
          </p>
          
          {/* Enhanced Challenge Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {challenges.map((item, index) => (
              <PremiumCard
                key={item.text}
                variant="hover-lift"
                glowOnHover
                className="p-6 text-center premium-slide-in group"
                style={{ animationDelay: item.delay }}
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-gold font-bold text-lg mb-2 group-hover:text-gold-light transition-colors">
                  {item.text}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-white transition-colors">
                  {item.description}
                </p>
              </PremiumCard>
            ))}
          </div>

          {/* Success Stories Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-on-scroll premium-fade-in" style={{ animationDelay: '0.6s' }}>
            <PremiumCard variant="glass" className="p-6 text-center">
              <div className="text-3xl font-bold text-gold mb-2">
                <CounterAnimation target={500} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">Lives Transformed</div>
            </PremiumCard>
            
            <PremiumCard variant="glass" className="p-6 text-center">
              <div className="text-3xl font-bold text-gold mb-2">
                <CounterAnimation target={95} suffix="%" />
              </div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </PremiumCard>
            
            <PremiumCard variant="glass" className="p-6 text-center">
              <div className="text-3xl font-bold text-gold mb-2">
                <CounterAnimation target={4} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">Programs Available</div>
            </PremiumCard>
          </div>

          {/* Inspirational Quote */}
          <PremiumCard variant="glass" className="max-w-3xl mx-auto p-8 mt-12 premium-fade-in" style={{ animationDelay: '0.8s' }}>
            <blockquote className="text-lg md:text-xl italic text-muted-foreground mb-4">
              "The moment you take responsibility for everything in your life is the moment you can change anything in your life."
            </blockquote>
            <cite className="text-gold font-medium">— Hal Elrod</cite>
            <div className="mt-4 text-sm text-muted-foreground">
              A philosophy that guides every coaching session
            </div>
          </PremiumCard>
        </div>
      </div>
    </section>
  );
};

export default WhoIHelpSection;
