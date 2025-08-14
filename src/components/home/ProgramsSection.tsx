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
      features: ["6+ hours of Coaching", "Breakthrough Exercises", "Hot Seat Coaching", "7-Day Action Plan"],
      badge: "Most Popular",
      cta: "Join The Bootcamp"
    },
    {
      name: "Unstoppable Momentum Bootcamp",
      price: "₹9,999",
      duration: "5 Days (2 hours per day)",
      gradient: "from-purple-600/30 to-purple-800/30",
      borderGradient: "border-purple-500/50",
      icon: "🚀",
      description: "Build habits that create lasting change",
      features: ["Daily Live Sessions", "Habit Tracking Tools", "Accountability System", "Neuroscience Methods"],
      badge: "Best Value",
      cta: "Join The Bootcamp"
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
    }
  ];

  return (
    <section className="py-20 bg-navy-light/20 relative overflow-hidden">
      <div className="absolute inset-0 premium-gradient-overlay" />
      <div className="relative z-10 container mx-auto px-4 mobile-padding">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-serif text-5xl md:text-6xl font-extrabold mb-6 text-gold tracking-wide leading-tight">
            Our Signature Programs
          </h2>
          <p className="text-white text-lg max-w-3xl mx-auto opacity-90" style={{ animationDelay: '0.2s' }}>
            Choose the program that aligns with your transformation goals and unlock your true potential.
          </p>
        </div>
        
        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {programs.map((program, index) => (
            <PremiumCard
              key={program.name}
              className={`${program.isPremium ? 'lg:col-span-3 relative' : ''} ${program.name === "Speak With Impact" ? 'md:col-span-1' : ''}
                bg-gradient-to-br ${program.gradient} ${program.borderGradient} border-2 
                text-white overflow-hidden group animate-on-scroll premium-card-hover rounded-3xl shadow-xl h-full flex flex-col`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Badge */}
              {program.badge && (
                <div className={`absolute top-6 right-6 px-4 py-1.5 rounded-full text-sm font-bold z-10 ${
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
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {program.icon}
                  </span>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      {program.originalPrice && (
                        <span className="text-lg text-white/60 line-through">
                          {program.originalPrice}
                        </span>
                      )}
                      <div className="text-3xl md:text-4xl font-bold text-gold">
                      {program.price}
                    </div>
                    </div>
                    <div className="text-sm opacity-80">{program.duration}</div>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 group-hover:text-gold-light transition-colors">
                  {program.name}
                </h3>
                <p className="text-white/90 mb-8 group-hover:text-white transition-colors text-lg">
                  {program.description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-10">
                  <h4 className="font-semibold text-gold mb-4 text-xl">What's Included:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {program.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-start space-x-3 text-sm premium-fade-in"
                        style={{ animationDelay: `${(index * 0.2) + (featureIndex * 0.1) + 0.3}s` }}
                      >
                        <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-white/90 group-hover:text-white transition-colors text-base">
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
                  className="w-full font-bold text-lg py-4 mt-auto"
                  onClick={() => handleButtonClick(program.cta)}
                >
                  {program.cta}
                </PremiumButton>

                {/* Urgency Indicator */}
                {program.badge === "Most Popular" && (
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center gap-2 text-sm text-gold bg-gold/10 px-4 py-2 rounded-full">
                      <div className="w-2.5 h-2.5 bg-gold rounded-full animate-pulse"></div>
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
        {/* Optional: Add a subtle background pattern or texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url(/path/to/subtle-pattern.png)' }} />
      </div>
    </section>
  );
};

export default ProgramsSection;
