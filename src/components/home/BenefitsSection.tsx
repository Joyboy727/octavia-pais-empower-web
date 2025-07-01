
import PremiumCard from "@/components/PremiumCard";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Mindset Transformation",
      description: "Break free from limiting beliefs and self-sabotage patterns",
      icon: "🧠",
      gradient: "from-purple-500/20 to-purple-700/20",
      features: ["Identify limiting beliefs", "Reframe negative thoughts", "Build mental resilience"]
    },
    {
      title: "Communication Mastery",
      description: "Develop powerful speaking and presentation skills",
      icon: "💬",
      gradient: "from-blue-500/20 to-blue-700/20",
      features: ["Confident public speaking", "Clear message delivery", "Authentic voice development"]
    },
    {
      title: "Unshakeable Confidence",
      description: "Build deep self-belief that withstands any challenge",
      icon: "⭐",
      gradient: "from-gold/20 to-yellow-600/20",
      features: ["Inner confidence building", "Self-worth enhancement", "Fear elimination techniques"]
    },
    {
      title: "Impactful Presence",
      description: "Command attention and respect in any setting",
      icon: "🎯",
      gradient: "from-red-500/20 to-red-700/20",
      features: ["Executive presence", "Leadership qualities", "Magnetic personality"]
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
            What You Get
          </h2>
          <p className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto premium-fade-in" style={{ animationDelay: '0.2s' }}>
            Comprehensive transformation that impacts every area of your life
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
                  <span>Advanced</span>
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
          <PremiumCard variant="glass" className="inline-block p-8">
            <h3 className="font-playfair text-2xl font-bold text-gold mb-4">
              Ready to Experience These Benefits?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Join hundreds of individuals who have transformed their lives through proven coaching methods
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span>Proven Methods</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span>8+ Years Experience</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span>Personalized Approach</span>
              </div>
            </div>
          </PremiumCard>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
