
const WhoIHelpSection = () => {
  const challenges = [
    { icon: "🔒", text: "Stuck", delay: "0.1s" },
    { icon: "😰", text: "Overwhelmed", delay: "0.2s" },
    { icon: "🤔", text: "Overthinking", delay: "0.3s" },
    { icon: "🚀", text: "Ready for Action", delay: "0.4s" }
  ];

  return (
    <section className="py-16 bg-navy-light/30 relative overflow-hidden">
      <div className="absolute inset-0 premium-gradient-overlay" />
      <div className="relative z-10 container mx-auto px-4 mobile-padding">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-block bg-gold text-navy font-bold text-4xl md:text-6xl rounded-full w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-6 premium-pulse-glow premium-scale-in">
            16+
          </div>
          <h2 className="font-playfair text-2xl md:text-4xl font-bold mb-6 gradient-text premium-slide-up">
            Years Helping People Transform
          </h2>
          <p className="text-responsive-lg text-muted-foreground mb-8 premium-fade-in" style={{ animationDelay: '0.3s' }}>
            Whether you're feeling any of these, you're in the right place:
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {challenges.map((item, index) => (
              <div 
                key={item.text}
                className="bg-card/50 border-gold/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3 premium-card-hover premium-slide-in"
                style={{ animationDelay: item.delay }}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-gold font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIHelpSection;
