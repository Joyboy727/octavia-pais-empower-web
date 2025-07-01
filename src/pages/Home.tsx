
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
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
      icon: "🌟"
    },
    {
      name: "Unstoppable Momentum Bootcamp",
      price: "₹4,999",
      duration: "Intensive",
      gradient: "from-purple-600 to-purple-800",
      icon: "🚀"
    },
    {
      name: "The Evolution Experience",
      price: "₹49,999",
      duration: "6 Months",
      gradient: "from-gold to-yellow-600",
      icon: "💫"
    },
    {
      name: "Speak With Impact",
      price: "₹9,999",
      duration: "5 Sessions",
      gradient: "from-red-600 to-red-800",
      icon: "🎤"
    }
  ];

  const benefits = [
    {
      title: "Mindset Transformation",
      description: "Break free from limiting beliefs",
      icon: "🧠"
    },
    {
      title: "Communication Tools",
      description: "Real-world speaking strategies",
      icon: "💬"
    },
    {
      title: "Build Confidence",
      description: "Develop unshakeable self-belief",
      icon: "⭐"
    },
    {
      title: "Speak with Impact",
      description: "Command attention and respect",
      icon: "🎯"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black parallax-bg" />
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-scale-in">
            <img 
              src="/lovable-uploads/9d0b6c88-a75a-4ea9-9b78-179fd103e9f9.png" 
              alt="Octavia Pais Logo" 
              className="h-32 md:h-48 w-auto mx-auto mb-6 filter drop-shadow-2xl animate-float"
            />
          </div>

          {/* Main Headlines */}
          <div className="space-y-6 mb-12">
            <h1 className="font-playfair font-bold text-4xl md:text-7xl lg:text-8xl leading-tight">
              <span className="gradient-text text-shadow-gold typewriter">
                Break Free from Doubt.
              </span>
              <br />
              <span className="text-white animate-fade-in" style={{ animationDelay: '3s' }}>
                Speak Up.
              </span>
              <br />
              <span className="gradient-text animate-fade-in" style={{ animationDelay: '4s' }}>
                Transform Your Life.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gold font-medium animate-fade-in" style={{ animationDelay: '5s' }}>
              Mindset & Public Speaking Coach — Bangalore
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '6s' }}>
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-black font-bold px-8 py-4 rounded-full text-lg magnetic-hover glow-effect">
              Book Your Free Clarity Call
            </Button>
            <a href="tel:+919008808808">
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black font-bold px-8 py-4 rounded-full text-lg magnetic-hover">
                Call Octavia Now → +91 90088 08808
              </Button>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Parallax About Snapshot */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black parallax-bg" style={{ transform: 'translateY(-50px)' }} />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <p className="text-xl md:text-2xl leading-relaxed font-light text-muted-foreground">
              After years in <span className="text-gold font-medium">banking, education & leadership</span>, 
              I now help people break mental barriers, build true self-belief, and 
              <span className="text-gold font-medium"> show up powerfully</span> in life and work.
            </p>
          </div>
        </div>
      </section>

      {/* Who I Help Section */}
      <section className="py-24 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block bg-gold text-black font-bold text-6xl md:text-8xl rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-8 animate-pulse-glow">
              16+
            </div>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6 gradient-text">
              Years Helping People Transform
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {['stuck', 'overwhelmed', 'overthinking', 'ready for action'].map((word, index) => (
                <span 
                  key={word}
                  className="bg-gold/20 text-gold px-4 py-2 rounded-full text-lg font-medium animate-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-center mb-16 gradient-text animate-on-scroll">
            What You Get
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title}
                className="bg-card/50 border-gold/20 hover:border-gold/50 transition-all duration-300 card-3d animate-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-gold">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-24 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-center mb-16 gradient-text animate-on-scroll">
            Transform Your Life
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card 
                key={program.name}
                className={`bg-gradient-to-br ${program.gradient} border-0 text-white hover:scale-105 transition-all duration-300 cursor-pointer card-3d animate-on-scroll`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{program.icon}</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{program.price}</div>
                      <div className="text-sm opacity-80">{program.duration}</div>
                    </div>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold mb-4">
                    {program.name}
                  </h3>
                  <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8 gradient-text">
              Ready to rewrite your story?
            </h2>
            <p className="text-xl mb-12 text-muted-foreground">
              Let's begin your transformation journey today.
            </p>
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-black font-bold px-12 py-6 rounded-full text-xl magnetic-hover glow-effect">
              Start Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
