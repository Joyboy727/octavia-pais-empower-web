
import PremiumCard from "@/components/PremiumCard";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Mindset Transformation",
      description: "Quiet the noise. Shift the story. Step into clarity.",
      icon: "🧠",
      gradient: "from-purple-500/20 to-purple-700/20",
      features: [
        "Identify and reframe limiting beliefs",
        "Break through mental clutter and self-doubt",
        "Build emotional resilience that lasts"
      ],
      transformationLevel: "Core Mindset Reset"
    },
    {
      title: "Communication Confidence",
      description: "Say what you mean. Be heard. Feel proud.",
      icon: "💬",
      gradient: "from-blue-500/20 to-blue-700/20",
      features: [
        "Speak with calm, clear confidence",
        "Share your message with purpose",
        "Develop your authentic communication style"
      ],
      transformationLevel: "Authentic Expression Upgrade"
    },
    {
      title: "Unshakeable Confidence",
      description: "Trust yourself. Own your worth. Stop second-guessing.",
      icon: "⭐",
      gradient: "from-gold/20 to-yellow-600/20",
      features: [
        "Build deep self-belief from the inside out",
        "Let go of perfectionism, comparison, and fear",
        "Reclaim your space without shrinking"
      ],
      transformationLevel: "Rooted Confidence Shift"
    },
    {
      title: "Impactful Presence",
      description: "Command the room—without saying a word.",
      icon: "🎯",
      gradient: "from-red-500/20 to-red-700/20",
      features: [
        "Cultivate executive presence with authenticity",
        "Strengthen your leadership voice and visibility",
        "Show up fully—calm, clear, and magnetic"
      ],
      transformationLevel: "Leadership Energy Embodied"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy" />
      <div className="premium-gradient-overlay absolute inset-0" />
      
      <div className="relative z-10 container mx-auto px-4 mobile-padding">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 gradient-text text-shadow-gold premium-slide-up">
            🌿 What You Get
          </h2>
          <p className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto premium-fade-in" style={{ animationDelay: '0.2s' }}>
            Lasting transformation that starts from within—and radiates into every area of your life. This is where things begin to shift. Together, we’ll focus on mindset, communication, confidence, and presence—so you stop holding back and start living more boldly and fully.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <PremiumCard
              key={benefit.title}
              variant="hover-lift"
              glowOnHover
              className={`p-8 bg-gradient-to-br ${benefit.gradient} border-gold/20 hover:border-gold/50 animate-on-scroll premium-card-hover group`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon and Title */}
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4 group-hover:animate-bounce transition-all duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-gold mb-2 group-hover:text-gold-light transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-white transition-colors">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Feature List */}
              <div className="space-y-3">
                {benefit.features.map((feature, featureIndex) => (
                  <div 
                    key={feature}
                    className="flex items-center text-sm text-muted-foreground group-hover:text-white transition-colors"
                    style={{ animationDelay: `${(index * 0.15) + (featureIndex * 0.05) + 0.3}s` }}
                  >
                    <div className="w-2 h-2 bg-gold rounded-full mr-3 group-hover:bg-gold-light transition-colors"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 pt-6 border-t border-gold/20">
                <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
                  <span>Transformation Level</span>
                  <span>{benefit.transformationLevel}</span>
                </div>
                <div className="w-full bg-navy-light rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-gold to-gold-light h-2 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                    style={{ width: '85%' }}
                  />
                </div>
              </div>
            </PremiumCard>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 animate-on-scroll premium-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="relative bg-gradient-to-b from-navy-dark to-charcoal p-10 md:p-16 rounded-[18px] shadow-xl overflow-hidden group">
            {/* Soft glowing edge */}
            <div className="absolute inset-0 rounded-[18px]" style={{ boxShadow: '0 0 30px rgba(255, 215, 0, 0.3)' }}></div>
            
            <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4 gradient-text text-shadow-gold tracking-tight relative inline-block">
              💬 You’re Not Too Late—You’re Just Ready.
              <span className="absolute bottom-0 left-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-gold to-transparent transform -translate-x-1/2 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
            </h3>
            <p className="text-[#f0f0f0] leading-relaxed max-w-3xl mx-auto mb-10">
              You don’t need to be fearless. You just need to be willing. If you’re done holding back and ready to feel more like yourself again—this is your moment.
            </p>

            {/* Why It Works list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center text-center">
                <div className="text-gold text-4xl mb-3 transition-transform duration-300 group-hover:scale-105">
                  ✔️
                </div>
                <h4 className="font-bold text-lg text-gold mb-1">Proven Methods</h4>
                <p className="text-sm text-muted-foreground">rooted in psychology, coaching, and communication science</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-gold text-4xl mb-3 transition-transform duration-300 group-hover:scale-105">
                  ⭐
                </div>
                <h4 className="font-bold text-lg text-gold mb-1">8+ Years Experience</h4>
                <p className="text-sm text-muted-foreground">across industries and life stages</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-gold text-4xl mb-3 transition-transform duration-300 group-hover:scale-105">
                  ✨
                </div>
                <h4 className="font-bold text-lg text-gold mb-1">100% Personalized Approach</h4>
                <p className="text-sm text-muted-foreground">no fluff, no pressure, no cookie-cutter plans</p>
              </div>
            </div>

            {/* Call-to-Action Button */}
            <button className="relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-navy-dark rounded-full shadow-lg
                               bg-gradient-to-r from-[#FFD700] to-[#FFC000] hover:from-[#FFC000] hover:to-[#FFD700]
                               transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
              <span className="mr-3 text-2xl">→</span> Book Your Free Clarity Call Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
