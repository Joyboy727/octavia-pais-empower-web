
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

  const programs = [
    {
      name: "The Breakthrough Blueprint",
      price: "₹5,000",
      duration: "3 Days",
      gradient: "from-blue-600 to-blue-800",
      icon: "🌟",
      description: "Break free from limiting beliefs and discover your true potential",
      benefits: [
        "Identify and eliminate self-sabotaging patterns",
        "Build unshakeable confidence",
        "Create a personalized action plan",
        "Access to exclusive resources"
      ],
      cta: "Join The Blueprint"
    },
    {
      name: "Unstoppable Momentum Bootcamp", 
      price: "₹4,999",
      duration: "Intensive Program",
      gradient: "from-purple-600 to-purple-800",
      icon: "🚀",
      description: "Transform your mindset and accelerate your personal growth",
      benefits: [
        "Daily momentum-building exercises",
        "Group coaching sessions",
        "Accountability partnership",
        "Breakthrough techniques"
      ],
      cta: "Join The Bootcamp"
    },
    {
      name: "The Evolution Experience",
      price: "₹49,999 + Taxes",
      duration: "6 Months",
      gradient: "from-gold to-yellow-600",
      icon: "💫",
      description: "Premium transformation program for serious change-makers",
      benefits: [
        "Weekly 1-on-1 coaching sessions",
        "Complete mindset makeover",
        "Public speaking mastery",
        "Lifetime support community",
        "Business networking opportunities"
      ],
      cta: "Apply Now",
      premium: true
    },
    {
      name: "Speak With Impact",
      price: "₹9,999",
      duration: "5 Sessions",
      gradient: "from-red-600 to-red-800", 
      icon: "🎤",
      description: "Master the art of confident, compelling communication",
      benefits: [
        "Overcome speaking anxiety",
        "Develop your unique voice",
        "Advanced presentation skills",
        "Real-world practice opportunities"
      ],
      cta: "Book Your Spot"
    }
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

      {/* Programs Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <Card 
                key={program.name}
                className={`${program.premium ? 'lg:col-span-2' : ''} bg-gradient-to-br ${program.gradient} border-0 text-white overflow-hidden relative group animate-on-scroll`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {program.premium && (
                  <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse-glow">
                    PREMIUM
                  </div>
                )}
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl group-hover:animate-bounce">{program.icon}</span>
                    <div className="text-right">
                      <div className="text-3xl font-bold">{program.price}</div>
                      <div className="text-sm opacity-80">{program.duration}</div>
                    </div>
                  </div>
                  <CardTitle className="font-playfair text-3xl font-bold mb-4">
                    {program.name}
                  </CardTitle>
                  <p className="text-lg opacity-90 leading-relaxed">
                    {program.description}
                  </p>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-lg mb-3">What You'll Get:</h4>
                    <ul className="space-y-2">
                      {program.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-2">
                          <span className="text-white/80 mt-1">✓</span>
                          <span className="text-white/90">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    size="lg" 
                    className={`w-full font-bold text-lg py-4 rounded-full transition-all duration-300 magnetic-hover ${
                      program.premium 
                        ? 'bg-gold hover:bg-gold-dark text-black' 
                        : 'bg-white/20 hover:bg-white/30 text-white border-white/30'
                    }`}
                  >
                    {program.cta}
                  </Button>
                </CardContent>

                {/* Animated Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Card>
            ))}
          </div>
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
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-black font-bold px-8 py-4 rounded-full text-lg magnetic-hover glow-effect">
                Book Free Clarity Call
              </Button>
              <a href="tel:+919008808808">
                <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black font-bold px-8 py-4 rounded-full text-lg magnetic-hover">
                  Call Now: +91 90088 08808
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
