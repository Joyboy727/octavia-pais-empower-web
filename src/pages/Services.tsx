
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FluidProgramsGrid from "@/components/programs/FluidProgramsGrid";
import PremiumPricingCalculator from "@/components/programs/PremiumPricingCalculator";

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
      id: "breakthrough-blueprint",
      name: "The Breakthrough Blueprint",
      price: "₹5,000",
      duration: "3 Days",
      description: "Break free from limiting beliefs and discover your true potential",
      features: [
        "20+ Hours Live Coaching",
        "Breakthrough Exercises", 
        "Hot Seat Coaching",
        "7-Day Action Plan"
      ],
      category: "intensive",
    },
    {
      id: "momentum-bootcamp",
      name: "Unstoppable Momentum Bootcamp", 
      price: "₹4,999",
      duration: "5 Days",
      description: "Build habits that create lasting change",
      features: [
        "Daily Live Sessions",
        "Habit Tracking Tools",
        "Accountability System", 
        "Neuroscience Methods"
      ],
      category: "bootcamp",
    },
    {
      id: "evolution-experience",
      name: "The Evolution Experience",
      price: "₹49,999",
      originalPrice: "₹65,000",
      duration: "6 Months",
      description: "Complete life transformation journey",
      features: [
        "12 Private Sessions",
        "Public Speaking Mastery",
        "WhatsApp Support",
        "Business Networking"
      ],
      category: "premium",
      isPremium: true
    },
    {
      id: "speak-impact",
      name: "Speak With Impact",
      price: "₹9,999",
      duration: "5 Sessions",
      description: "Master confident communication",
      features: [
        "1-on-1 Coaching",
        "Voice Training", 
        "Presentation Skills",
        "Real Practice"
      ],
      category: "speaking",
    }
  ];

  const filters = [
    { id: 'all', name: 'All Programs', icon: '📚' },
    { id: 'intensive', name: 'Intensive', icon: '⚡' },
    { id: 'bootcamp', name: 'Bootcamp', icon: '🚀' },
    { id: 'premium', name: 'Premium', icon: '💎' },
    { id: 'speaking', name: 'Speaking', icon: '🎤' }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black parallax-bg" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-8 animate-scale-in">
            <span className="gradient-text">Transform Your Life</span>
            <br />
            <span className="text-white">Choose Your Journey</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Discover the program that's right for you and start your transformation today
          </p>
        </div>
      </section>

      {/* Enhanced Programs Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <FluidProgramsGrid programs={programs} filters={filters} />
        </div>
      </section>

      {/* Premium Pricing Calculator */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8 gradient-text">
              Calculate Your Investment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Customize your coaching journey and see exactly what your transformation will cost
            </p>
          </div>
          <PremiumPricingCalculator />
        </div>
      </section>

      {/* Why Choose These Programs */}
      <section className="py-24 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-center mb-16 gradient-text animate-on-scroll">
            Why These Programs Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🎯",
                title: "Targeted Approach",
                description: "Each program is designed to address specific challenges and goals"
              },
              {
                icon: "🤝",
                title: "Proven Methods",
                description: "Based on years of experience and successful client transformations"
              },
              {
                icon: "💪",
                title: "Lasting Results",
                description: "Focus on sustainable change, not quick fixes"
              }
            ].map((feature, index) => (
              <Card 
                key={feature.title}
                className="bg-card/50 border-gold/20 hover:border-gold/50 transition-all duration-300 text-center card-3d animate-on-scroll group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">
                    {feature.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-gold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8 gradient-text">
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-xl mb-12 text-muted-foreground leading-relaxed">
              Don't wait for the "perfect" moment. The best time to start is now. 
              Book your free clarity call and let's discuss which program is right for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold-dark text-black font-bold px-8 py-4 rounded-full text-lg magnetic-hover glow-effect"
                onClick={() => handleButtonClick("Book Free Clarity Call")}
              >
                Book Free Clarity Call
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-black font-bold px-8 py-4 rounded-full text-lg magnetic-hover"
                onClick={() => handleButtonClick("Call Now")}
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
