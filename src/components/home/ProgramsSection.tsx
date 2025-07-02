
import PremiumCard from "@/components/PremiumCard";
import PremiumButton from "@/components/PremiumButton";

const ProgramsSection = () => {
  const handleButtonClick = (buttonText: string) => {
    const bookingButtons = ["Join The Bootcamp", "Apply Now", "Book Your Spot", "Book Free Clarity Call", "Start Your Transformation", "Send Message"];
    const callButtons = ["Call Now", "Call Now (desktop)", "Call Now (mobile)", "Call Octavia Now"];
    
    if (bookingButtons.includes(buttonText)) {
      window.open("https://calendly.com/octaviathelifecoach/30min", "_blank");
    } else if (callButtons.includes(buttonText)) {
      window.location.href = "tel:+917975163696";
    }
  };

  const programs = [
    {
      name: "The Breakthrough Blueprint",
      price: "₹5,000",
      duration: "3 Days",
      gradient: "from-blue-600/30 to-blue-800/30",
      borderGradient: "border-blue-500/50",
      icon: "🌟",
      description: "Intensive mindset rewiring program",
      features: ["20+ Hours Live Coaching", "Breakthrough Exercises", "Hot Seat Coaching", "7-Day Action Plan"],
      badge: "Most Popular",
      cta: "Join The Bootcamp"
    },
    {
      name: "Unstoppable Momentum Bootcamp",
      price: "₹4,999",
      duration: "5 Days",
      gradient: "from-purple-600/30 to-purple-800/30",
      borderGradient: "border-purple-500/50",
      icon: "🚀",
      description: "Build habits that create lasting change",
      features: ["Daily Live Sessions", "Habit Tracking Tools", "Accountability System", "Neuroscience Methods"],
      badge: "Best Value",
      cta: "Join The Bootcamp"
    },
    {
      name: "The Evolution Experience",
      price: "₹49,999",
      originalPrice: "₹65,000",
      duration: "6 Months",
      gradient: "from-gold/30 to-yellow-600/30",
      borderGradient: "border-gold/70",
      icon: "💫",
      description: "Complete life transformation journey",
      features: ["12 Private Sessions", "Public Speaking Mastery", "WhatsApp Support", "Business Networking"],
      badge: "Premium",
      isPremium: true,
      cta: "Apply Now"
    },
    {
      name: "Speak With Impact",
      price: "₹9,999",
      duration: "5 Sessions",
      gradient: "from-red-600/30 to-red-800/30",
      borderGradient: "border-red-500/50",
      icon: "🎤",
      description: "Master confident communication",
      features: ["1-on-1 Coaching", "Voice Training", "Presentation Skills", "Real Practice"],
      badge: "Specialist",
      cta: "Book Your Spot"
    }
  ];

  return (
    <section className="py-20 bg-navy-light/20 relative overflow-hidden">
      <div className="absolute inset-0 premium-gradient-overlay" />
      <div className="relative z-10 container mx-auto px-4 mobile-padding">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 gradient-text text-shadow-gold premium-slide-up">
            Transform Your Life
          </h2>
          <p className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto premium-fade-in" style={{ animationDelay: '0.2s' }}>
            Choose the program that aligns with your transformation goals
          </p>
        </div>
        
        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <PremiumCard
              key={program.name}
              className={`${program.isPremium ? 'lg:col-span-2 relative' : ''} 
                bg-gradient-to-br ${program.gradient} ${program.borderGradient} border-2 
                text-white overflow-hidden group animate-on-scroll premium-card-hover`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Badge */}
              {program.badge && (
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold z-10 ${
                  program.isPremium 
                    ? 'bg-gold text-navy animate-pulse' 
                    : 'bg-white/20 text-white border border-white/30'
                } premium-glow`}>
                  {program.badge}
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl group-hover:animate-bounce transition-all duration-300">
                    {program.icon}
                  </span>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      {program.originalPrice && (
                        <span className="text-lg text-white/60 line-through">
                          {program.originalPrice}
                        </span>
                      )}
                      <div className="text-2xl md:text-3xl font-bold text-gold">
                        {program.price}
                      </div>
                    </div>
                    <div className="text-sm opacity-80">{program.duration}</div>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="font-playfair text-xl md:text-2xl font-bold mb-4 group-hover:text-gold-light transition-colors">
                  {program.name}
                </h3>
                <p className="text-white/90 mb-6 group-hover:text-white transition-colors">
                  {program.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-gold mb-3">What's Included:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {program.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-start space-x-3 text-sm premium-fade-in"
                        style={{ animationDelay: `${(index * 0.2) + (featureIndex * 0.1) + 0.3}s` }}
                      >
                        <span className="text-gold mt-1 text-xs">✓</span>
                        <span className="text-white/90 group-hover:text-white transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <PremiumButton
                  variant={program.isPremium ? "cta" : "secondary"}
                  size="lg"
                  withGlow={program.isPremium}
                  withShimmer={program.isPremium}
                  className="w-full font-bold text-lg py-4"
                  onClick={() => handleButtonClick(program.cta)}
                >
                  {program.cta}
                </PremiumButton>

                {/* Urgency Indicator */}
                {program.badge === "Most Popular" && (
                  <div className="mt-4 text-center">
                    <div className="inline-flex items-center gap-2 text-xs text-gold bg-gold/10 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                      <span>Limited seats available</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Animated Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
            </PremiumCard>
          ))}
        </div>

        {/* Bottom Testimonial */}
        <div className="text-center mt-16 animate-on-scroll premium-fade-in" style={{ animationDelay: '1s' }}>
          <PremiumCard variant="glass" className="max-w-4xl mx-auto p-8">
            <blockquote className="text-lg md:text-xl italic text-muted-foreground mb-4">
              "Octavia's coaching didn't just change my mindset—it transformed my entire life. 
              I went from being afraid to speak up in meetings to confidently leading presentations."
            </blockquote>
            <cite className="text-gold font-medium">— Sarah M., Marketing Executive</cite>
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-gold text-xl">⭐</span>
              ))}
            </div>
          </PremiumCard>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
