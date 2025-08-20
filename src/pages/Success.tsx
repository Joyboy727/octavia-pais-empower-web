import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, Star, Award, Users, TrendingUp, Quote, CheckCircle, ArrowRight } from "lucide-react";

const Success = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStory, setActiveStory] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Optimized Intersection Observer for instant animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "200+", label: "Lives Transformed", icon: Users, color: "text-gold" },
    { number: "16+", label: "Years Experience", icon: Award, color: "text-gold" },
    { number: "95%", label: "Success Rate", icon: TrendingUp, color: "text-gold" },
    { number: "100%", label: "Satisfaction", icon: Star, color: "text-gold" }
  ];

  const successStories = [
    {
      name: "Ananya Sharma",
      title: "From Student to Leader",
      image: "/ananya.jpg",
      attribution: "Christina @ wocintechchat.com on Unsplash",
      story: "Struggled with self-doubt and public speaking anxiety that held her back from leadership opportunities",
      transformation: "Now leads presentations confidently, mentors other students, and secured a leadership role in her organization",
      quote: "Octavia helped me find my voice when I thought I had lost it forever. The transformation has been life-changing.",
      program: "Speak With Impact",
      confidenceGrowth: 85,
      category: "Leadership Development",
      timeframe: "3 months"
    },
    {
      name: "Rohit Patel",
      title: "Career Breakthrough",
      image: "https://images.unsplash.com/photo-1657727534676-cac1bb160d64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzJTIwcGVyc29uJTIwY29uZmlkZW50JTIwZXhwcmVzc2lvbiUyMG9mZmljZSUyMGJhY2tncm91bmR8ZW58MHwxfHx8MTc1NTI3OTAxNnww&ixlib=rb-4.1.0&q=85",
      attribution: "ZBRA Marketing on Unsplash",
      story: "Felt stuck in his career with no clear direction, lacking confidence to pursue advancement opportunities",
      transformation: "Promoted to team lead within 6 months and started his own consulting practice, increasing income by 150%",
      quote: "The Evolution Experience completely transformed how I see myself and my potential. I went from feeling invisible to becoming a leader.",
      program: "The Evolution Experience",
      confidenceGrowth: 92,
      category: "Career Advancement",
      timeframe: "6 months"
    },
    {
      name: "Priya Mehta",
      title: "Mindset Revolution",
      image: "/priya.jpg",
      attribution: "EFFYDESK on Unsplash",
      story: "Battled with imposter syndrome and fear of failure that prevented her from taking risks or pursuing her dreams",
      transformation: "Started her own business, became a motivational speaker, and now helps other women overcome similar challenges",
      quote: "Octavia's direct yet compassionate approach helped me break through mental barriers I didn't even know existed.",
      program: "Breakthrough Blueprint",
      confidenceGrowth: 78,
      category: "Entrepreneurship",
      timeframe: "4 months"
    }
  ];

  const achievements = [
    {
      title: "Speaking Engagements",
      description: "Delivered transformational talks to audiences worldwide",
      image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxjb25mZXJlbmNlJTIwc3BlYWtlciUyMHByZXNlbnRhdGlvbiUyMGF1ZGllbmNlJTIwYXVkaXRvcml1bXxlbnwwfDB8fHwxNzU1Mjc5MDE2fDA&ixlib=rb-4.1.0&q=85",
      attribution: "Miguel Henriques on Unsplash",
      stats: "50+ Events"
    },
    {
      title: "Team Collaboration",
      description: "Building high-performing teams through effective communication",
      image: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGNvbGxhYm9yYXRpb24lMjBkaXZlcnNlJTIwcHJvZmVzc2lvbmFscyUyMGNvbmZlcmVuY2UlMjB0YWJsZSUyMG9mZmljZXxlbnwwfDB8fHwxNzU1Mjc5MDE2fDA&ixlib=rb-4.1.0&q=85",
      attribution: "Mapbox on Unsplash",
      stats: "100+ Teams"
    },
    {
      title: "One-on-One Coaching",
      description: "Personalized guidance for individual transformation",
      image: "https://images.unsplash.com/photo-1557180491-4c2f503222d9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw4fHxjb2FjaGluZyUyMG1lbnRvcmluZyUyMG9uZS1vbi1vbmUlMjBtZWV0aW5nJTIwY29tZm9ydGFibGUlMjBjaGFpcnMlMjBvZmZpY2UlMjBzcGFjZXxlbnwwfDB8fHwxNzU1Mjc5MDE2fDA&ixlib=rb-4.1.0&q=85",
      attribution: "Daoud Abismail on Unsplash",
      stats: "200+ Sessions"
    }
  ];

  const testimonials = [
    {
      quote: "Octavia has a gift for seeing potential where others see problems. Her approach is transformational.",
      name: "Sarah Mitchell",
      role: "Marketing Executive",
      image: "https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw2fHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzJTIwcGVyc29uJTIwY29uZmlkZW50JTIwZXhwcmVzc2lvbiUyMG9mZmljZSUyMGJhY2tncm91bmR8ZW58MHwxfHx8MTc1NTI3OTAxNnww&ixlib=rb-4.1.0&q=85",
      attribution: "TRAN NHU TUAN on Unsplash"
    },
    {
      quote: "Her approach is both challenging and supportive. Exactly what I needed to break through my limitations.",
      name: "David D'Souza",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1738750908048-14200459c3c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzJTIwcGVyc29uJTIwY29uZmlkZW50JTIwZXhwcmVzc2lvbiUyMG9mZmljZSUyMGJhY2tncm91bmR8ZW58MHwxfHx8MTc1NTI3OTAxNnww&ixlib=rb-4.1.0&q=85",
      attribution: "Mudia Mowoe on Unsplash"
    },
    {
      quote: "The transformation I experienced was beyond what I thought possible. Life-changing doesn't even cover it.",
      name: "Meera Reddy",
      role: "Teacher",
      image: "https://images.unsplash.com/photo-1685541088069-66baf0b2d753?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGRpdmVyc2UlMjBwcm9mZXNzaW9uYWwlMjBob21lJTIwb2ZmaWNlJTIwY29uZmlkZW50JTIwZXhwcmVzc2lvbnxlbnwwfDF8fHwxNzU1Mjc5MDE3fDA&ixlib=rb-4.1.0&q=85",
      attribution: "Divaris Shirichena on Unsplash"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy cinematic-hero-bg"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent transform -skew-y-12"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-gold/10 to-transparent transform skew-y-12"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gold/30 rounded-full animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={`space-y-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4" />
                  Success Stories
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight font-playfair">
                  Transformation
                  <span className="block gradient-text">
                    Stories
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Discover how our programs have transformed lives and empowered individuals to achieve their full potential. These are real stories from real people who have experienced remarkable growth.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-4 rounded-full premium-button-luxury expert-hover"
                  onClick={() => window.open("https://calendly.com/octaviathelifecoach/30min", "_blank")}
                >
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-muted text-muted-foreground hover:bg-muted px-8 py-4 rounded-full transition-all duration-400 hover:scale-105 hover:border-gold/30 expert-hover"
                  onClick={() => window.open("https://calendly.com/octaviathelifecoach/30min", "_blank")}
                >
                  Schedule a Call
                </Button>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-playfair">Impact by Numbers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from real transformations across our programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={stat.label}
                  className="animate-on-scroll text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="p-8 h-full border-gold/20 shadow-lg bg-card premium-card-hover expert-hover morph-on-hover">
                    <CardContent className="p-0 space-y-4">
                      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-gold/10 to-gold/20 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 premium-float`}>
                        <IconComponent className={`w-8 h-8 ${stat.color}`} />
                      </div>
                      <div className="text-4xl font-bold text-gold group-hover:scale-125 transition-all duration-500 text-reveal">
                        {stat.number}
                      </div>
                      <div className="text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievement Showcase */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-playfair">Our Impact in Action</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we create transformation through various touchpoints
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className="animate-on-scroll group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="overflow-hidden border-gold/20 bg-card/50 backdrop-blur-sm hover:bg-card/80 premium-card-hover expert-hover morph-on-hover">
                  <div className="relative overflow-hidden">
                    <img 
                      src={achievement.image}
                      alt={`${achievement.title} - ${achievement.attribution}`}
                      className="w-full h-64 object-cover premium-image-hover"
                      style={{ width: '100%', height: '256px' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-gold">
                      <div className="text-2xl font-bold">{achievement.stats}</div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-playfair">Transformation Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real people, real results, real transformations
            </p>
          </div>

          <div className="space-y-20">
            {successStories.map((story, index) => (
              <div 
                key={story.name}
                className={`animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative group`}>
                  <div className="relative overflow-hidden rounded-3xl cinematic-image-frame">
                    {/* Golden accent */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-gold/20 to-transparent rounded-3xl"></div>
                    <img 
                      src={story.image}
                      alt={`${story.name} - ${story.attribution}`}
                     className="w-full h-100 object-cover rounded-3xl shadow-2xl cinematic-image-glow premium-image-hover"
                      style={{ width: '100%', height: '400px' }}
                    />
                    <div className="absolute top-4 right-4 bg-gold text-navy px-3 py-1 rounded-full text-sm font-semibold">
                      {story.timeframe}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} space-y-6`}>
                  <div>
                    <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {story.category}
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-2 font-playfair">{story.name}</h3>
                    <p className="text-xl text-gold font-semibold">{story.title}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-destructive/10 border-l-4 border-destructive rounded-r-lg">
                      <h4 className="font-semibold text-destructive mb-2">Before:</h4>
                      <p className="text-muted-foreground">{story.story}</p>
                    </div>
                    <div className="p-4 bg-green-500/10 border-l-4 border-green-500 rounded-r-lg">
                      <h4 className="font-semibold text-green-600 mb-2">After:</h4>
                      <p className="text-muted-foreground">{story.transformation}</p>
                    </div>
                  </div>

                  {/* Confidence Growth */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">Confidence Growth</span>
                      <span className="text-2xl font-bold text-gold">{story.confidenceGrowth}%</span>
                    </div>
                    <Progress value={story.confidenceGrowth} className="h-3" />
                  </div>

                  {/* Quote */}
                  <blockquote className="relative p-6 bg-gradient-to-r from-card to-muted/20 rounded-2xl border-l-4 border-gold cinematic-highlight-box">
                    <Quote className="w-8 h-8 text-gold/30 absolute top-2 left-2" />
                    <p className="text-lg italic text-foreground pl-6">"{story.quote}"</p>
                    <div className="mt-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm font-medium text-muted-foreground">{story.program}</span>
                    </div>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-playfair">What People Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Authentic feedback from our community of transformed individuals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="animate-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="p-6 h-full border-gold/20 shadow-lg bg-card premium-card-hover expert-hover morph-on-hover">
                  <CardContent className="p-0 space-y-4">
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image}
                        alt={`${testimonial.name} - ${testimonial.attribution}`}
                        className="w-16 h-16 rounded-full object-cover"
                        style={{ width: '64px', height: '64px' }}
                      />
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <blockquote className="text-muted-foreground italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/30 to-transparent transform -skew-y-12"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-playfair">
              Your Success Story
              <span className="block gradient-text">
                Starts Here
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join the hundreds of people who have transformed their lives. 
              Your breakthrough is just one conversation away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-4 rounded-full premium-button-luxury expert-hover"
                onClick={() => window.open('https://calendly.com/octaviathelifecoach/30min', '_blank')}
              >
                Start Your Transformation
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-muted text-muted-foreground hover:bg-muted px-8 py-4 rounded-full transition-all duration-400 hover:scale-105 hover:border-gold/30 expert-hover"
                onClick={() => window.open('https://calendly.com/octaviathelifecoach/30min', '_blank')}
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;