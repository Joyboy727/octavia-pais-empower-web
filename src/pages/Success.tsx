
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Success = () => {
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

  const successStories = [
    {
      name: "Ananya",
      title: "From Student to Leader",
      image: "/lovable-uploads/51cae283-e75f-4902-a215-aef5185b0ae4.png",
      story: "Struggled with self-doubt and public speaking anxiety",
      transformation: "Now leads presentations confidently and mentors other students",
      quote: "Octavia helped me find my voice when I thought I had lost it forever. The transformation has been life-changing.",
      program: "Speak With Impact",
      confidenceGrowth: 85,
      icon: "🎓"
    },
    {
      name: "Rohit",
      title: "Career Breakthrough",
      image: "/lovable-uploads/29e81a7c-71b6-407c-bdb8-1769fc86fd82.png",
      story: "Felt stuck in his career with no clear direction",
      transformation: "Promoted to team lead and started his own consulting practice",
      quote: "The Evolution Experience completely transformed how I see myself and my potential. I went from feeling invisible to becoming a leader.",
      program: "The Evolution Experience",
      confidenceGrowth: 92,
      icon: "💼"
    },
    {
      name: "Priya",
      title: "Mindset Revolution",
      image: "/lovable-uploads/9138164a-e7ad-4bad-a4dd-b5039c883402.png",
      story: "Battled with imposter syndrome and fear of failure",
      transformation: "Started her own business and became a motivational speaker",
      quote: "Octavia's direct yet compassionate approach helped me break through mental barriers I didn't even know existed.",
      program: "Breakthrough Blueprint",
      confidenceGrowth: 78,
      icon: "🚀"
    }
  ];

  const stats = [
    { number: "200+", label: "Lives Transformed", icon: "👥" },
    { number: "16+", label: "Years Experience", icon: "⏰" },
    { number: "95%", label: "Success Rate", icon: "📈" },
    { number: "100%", label: "Satisfaction", icon: "⭐" }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black parallax-bg" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-8 animate-scale-in">
            <span className="gradient-text">Success</span>
            <br />
            <span className="text-white">Stories</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Real transformations from real people who dared to change their story
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-2 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-5xl font-bold text-gold mb-2 animate-pulse-glow">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-center mb-16 gradient-text animate-on-scroll">
            Transformation Stories
          </h2>
          
          <div className="space-y-24 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <div 
                key={story.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-on-scroll ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gold/20 rounded-3xl transform rotate-3 animate-pulse" />
                    <img 
                      src={story.image}
                      alt={story.name}
                      className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute -top-4 -right-4 bg-gold text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl animate-bounce-slow">
                      {story.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="bg-card/50 border-gold/20 hover:border-gold/50 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="font-playfair text-2xl font-bold text-gold mb-1">
                            {story.name}
                          </h3>
                          <p className="text-muted-foreground">{story.title}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground mb-1">Program</div>
                          <div className="text-gold font-medium text-sm">{story.program}</div>
                        </div>
                      </div>

                      {/* Before/After */}
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-red-400 mb-2">Before:</h4>
                          <p className="text-muted-foreground">{story.story}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-400 mb-2">After:</h4>
                          <p className="text-muted-foreground">{story.transformation}</p>
                        </div>
                      </div>

                      {/* Confidence Meter */}
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Confidence Growth</span>
                          <span className="text-gold font-bold">{story.confidenceGrowth}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-gold to-yellow-400 h-2 rounded-full transition-all duration-1000 animate-pulse-glow"
                            style={{ width: `${story.confidenceGrowth}%` }}
                          />
                        </div>
                      </div>

                      {/* Quote */}
                      <blockquote className="border-l-4 border-gold pl-4 italic text-lg leading-relaxed">
                        "{story.quote}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlights */}
      <section className="py-24 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-center mb-16 gradient-text animate-on-scroll">
            What People Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Octavia has a gift for seeing potential where others see problems.",
                name: "Sarah M.",
                role: "Marketing Executive"
              },
              {
                quote: "Her approach is both challenging and supportive. Exactly what I needed.",
                name: "David K.",
                role: "Entrepreneur"
              },
              {
                quote: "The transformation I experienced was beyond what I thought possible.",
                name: "Meera R.",
                role: "Teacher"
              }
            ].map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="bg-card/50 border-gold/20 hover:border-gold/50 transition-all duration-300 text-center card-3d animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">💬</div>
                  <blockquote className="text-lg italic mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-gold/20 pt-4">
                    <div className="font-semibold text-gold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
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
              Your Success Story Starts Here
            </h2>
            <p className="text-xl mb-12 text-muted-foreground leading-relaxed">
              Join the hundreds of people who have transformed their lives. 
              Your breakthrough is just one conversation away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+919008808808">
                <button className="bg-gold hover:bg-gold-dark text-black font-bold px-8 py-4 rounded-full text-lg magnetic-hover glow-effect transition-all duration-300">
                  Start Your Transformation
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;
