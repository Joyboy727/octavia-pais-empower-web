
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProgramsSection = () => {
  const programs = [
    {
      name: "The Breakthrough Blueprint",
      price: "₹5,000",
      duration: "3 Days",
      gradient: "from-blue-600/20 to-blue-800/20",
      borderGradient: "border-blue-500/30",
      icon: "🌟"
    },
    {
      name: "Unstoppable Momentum Bootcamp",
      price: "₹4,999",
      duration: "Intensive",
      gradient: "from-purple-600/20 to-purple-800/20",
      borderGradient: "border-purple-500/30",
      icon: "🚀"
    },
    {
      name: "The Evolution Experience",
      price: "₹49,999",
      duration: "6 Months",
      gradient: "from-gold/20 to-yellow-600/20",
      borderGradient: "border-gold/50",
      icon: "💫"
    },
    {
      name: "Speak With Impact",
      price: "₹9,999",
      duration: "5 Sessions",
      gradient: "from-red-600/20 to-red-800/20",
      borderGradient: "border-red-500/30",
      icon: "🎤"
    }
  ];

  return (
    <section className="py-16 bg-navy-light/30">
      <div className="container mx-auto px-4 mobile-padding">
        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-center mb-12 gradient-text animate-on-scroll">
          Transform Your Life
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={program.name}
              className={`bg-gradient-to-br ${program.gradient} ${program.borderGradient} border-2 text-white professional-hover cursor-pointer card-elegant animate-on-scroll`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{program.icon}</span>
                  <div className="text-right">
                    <div className="text-xl font-bold">{program.price}</div>
                    <div className="text-sm opacity-80">{program.duration}</div>
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-bold mb-4">
                  {program.name}
                </h3>
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 professional-hover">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
