
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
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

  const certifications = [
    "NLP Practitioner",
    "Certified Life Coach", 
    "Public Speaking Expert",
    "Mindset Transformation Specialist"
  ];

  const timeline = [
    { place: "Mangalore", description: "Born and raised", year: "Early Years" },
    { place: "UAE", description: "Banking & Education Career", year: "Career Journey" },
    { place: "Bangalore", description: "Life & Speaking Coach", year: "Current" }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black parallax-bg" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="animate-on-scroll">
              <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-8">
                <span className="gradient-text">Meet</span>
                <br />
                <span className="text-white">Octavia Pais</span>
              </h1>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  After years of climbing the corporate ladder in banking and making a mark in education, 
                  I discovered my true calling: <span className="text-gold font-semibold">helping people break through their mental barriers</span> 
                  and find their authentic voice.
                </p>
                <p>
                  My journey from <span className="text-gold">Mangalore to the UAE and back to Bangalore</span> taught me that 
                  transformation isn't about where you are—it's about who you choose to become.
                </p>
                <p>
                  Today, I combine <span className="text-gold font-semibold">mindset work with practical communication skills</span> 
                  to help people not just speak up, but show up powerfully in every area of their lives.
                </p>
              </div>
            </div>

            {/* Portrait */}
            <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gold/20 rounded-3xl transform rotate-6 animate-pulse" />
                <img 
                  src="/lovable-uploads/3deeb80c-cb3c-424c-8a59-ed530ead07fd.png"
                  alt="Octavia Pais"
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-24 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-center mb-16 gradient-text animate-on-scroll">
            My Journey
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gold" />
              
              {timeline.map((item, index) => (
                <div 
                  key={item.place}
                  className={`flex items-center mb-16 animate-on-scroll ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="bg-card/50 border-gold/20 hover:border-gold/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="font-playfair text-2xl font-bold text-gold mb-2">
                          {item.place}
                        </h3>
                        <p className="text-muted-foreground mb-2">{item.description}</p>
                        <span className="text-sm text-gold font-medium">{item.year}</span>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-gold rounded-full border-4 border-background z-10 animate-pulse-glow" />
                  
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-center mb-16 gradient-text animate-on-scroll">
            Credentials & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card 
                key={cert}
                className="bg-card/50 border-gold/20 hover:border-gold/50 transition-all duration-300 card-3d animate-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4 group-hover:animate-bounce">🏆</div>
                  <h3 className="font-semibold text-lg text-gold">
                    {cert}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Style */}
      <section className="py-24 bg-black/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-16 gradient-text animate-on-scroll">
            My Coaching Style
          </h2>
          
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {['Direct', 'Empowering', 'Energetic', 'Honest', 'Empathetic'].map((word, index) => (
                <span 
                  key={word}
                  className="bg-gold text-black px-6 py-3 rounded-full text-xl font-bold hover:scale-110 transition-transform duration-300 cursor-default animate-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {word}
                </span>
              ))}
            </div>
            
            <p className="text-xl leading-relaxed text-muted-foreground">
              I believe in cutting through the noise and getting to the heart of what's holding you back. 
              My approach combines <span className="text-gold font-semibold">compassionate understanding</span> with 
              <span className="text-gold font-semibold"> practical action steps</span> that create real, lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-center mb-16 gradient-text animate-on-scroll">
            Beyond Coaching
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="animate-on-scroll">
              <img 
                src="/lovable-uploads/ac02951f-79a7-4a33-ae14-7e22133f5d82.png"
                alt="Octavia Pais Personal"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-8 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-gold mb-4">When I'm Not Coaching</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '📚', activity: 'Reading' },
                    { icon: '🌱', activity: 'Gardening' },
                    { icon: '🏔️', activity: 'Adventure' },
                    { icon: '🍳', activity: 'Cooking' }
                  ].map((hobby, index) => (
                    <div 
                      key={hobby.activity}
                      className="bg-card/50 border-gold/20 rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300 animate-float"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="text-2xl mb-2">{hobby.icon}</div>
                      <div className="text-sm text-muted-foreground">{hobby.activity}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-card/30 rounded-2xl p-6 border border-gold/20">
                <p className="text-lg leading-relaxed text-muted-foreground italic">
                  "When you arise in the morning, think of what a precious privilege it is to be alive - 
                  to breathe, to think, to enjoy, to love."
                </p>
                <p className="text-gold font-medium mt-4">— A quote that guides my life and work</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
