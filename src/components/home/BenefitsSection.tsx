
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
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
    <section className="py-16">
      <div className="container mx-auto px-4 mobile-padding">
        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-center mb-12 gradient-text animate-on-scroll">
          What You Get
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className="bg-card/50 border-gold/20 hover:border-gold/40 transition-all duration-400 card-elegant animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3 professional-hover">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gold">
                  {benefit.title}
                </h3>
                <p className="text-responsive-base text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
