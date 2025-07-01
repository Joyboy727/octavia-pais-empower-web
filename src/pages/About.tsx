
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('smooth-fade', 'visible');
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
    <div className="min-h-screen pt-24 bg-navy">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy parallax-bg" />
        
        <div className="relative z-10 container mx-auto px-4 mobile-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-on-scroll">
              <h1 className="font-playfair text-responsive-xl font-bold mb-6">
                <span className="gradient-text">Meet</span>
                <br />
                <span className="text-white">Octavia Pais</span>
              </h1>
              <div className="space-y-4 text-responsive-base leading-relaxed text-muted-foreground">
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
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 bg-gold/20 rounded-3xl transform rotate-3 animate-gentle-float" />
                <img 
                  src="/lovable-uploads/3deeb80c-cb3c-424c-8a59-ed530ead07fd.png"
                  alt="Octavia Pais"
                  className="relative w-full rounded-3xl shadow-2xl professional-hover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-16 bg-navy-light/30">
        <div className="container mx-auto px-4 mobile-padding">
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-center mb-12 gradient-text animate-on-scroll">
            My Journey
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gold/50 hidden md:block" />
              
              {timeline.map((item, index) => (
                <div 
                  key={item.place}
                  className={`flex items-center mb-12 animate-on-scroll ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-0 gap-4`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} text-center md:text-left`}>
                    <Card className="bg-card/50 border-gold/20 hover:border-gold/40 transition-all duration-300 card-elegant">
                      <CardContent className="p-6">
                        <h3 className="font-playfair text-xl font-bold text-gold mb-2">
                          {item.place}
                        </h3>
                        <p className="text-muted-foreground mb-2">{item.description}</p>
                        <span className="text-sm text-gold font-medium">{item.year}</span>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:block w-4 h-4 bg-gold rounded-full border-4 border-navy z-10 subtle-pulse-glow" />
                  
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4 mobile-padding">
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-center mb-12 gradient-text animate-on-scroll">
            Credentials & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card 
                key={cert}
                className="bg-card/50 border-gold/20 hover:border-gold/40 transition-all duration-300 card-elegant animate-on-scroll text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-2xl mb-3 professional-hover">🏆</div>
                  <h3 className="font-semibold text-base text-gold">
                    {cert}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Style */}
      <section className="py-16 bg-navy-light/30">
        <div className="container mx-auto px-4 mobile-padding text-center">
          <h2 className="font-playfair text-2xl md:text-4xl font-bold mb-12 gradient-text animate-on-scroll">
            My Coaching Style
          </h2>
          
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['Direct', 'Empowering', 'Energetic', 'Honest', 'Empathetic'].map((word, index) => (
                <span 
                  key={word}
                  className="bg-gold text-navy px-4 py-2 rounded-full text-base font-bold professional-hover cursor-default professional-animation"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {word}
                </span>
              ))}
            </div>
            
            <p className="text-responsive-lg leading-relaxed text-muted-foreground">
              I believe in cutting through the noise and getting to the heart of what's holding you back. 
              My approach combines <span className="text-gold font-semibold">compassionate understanding</span> with 
              <span className="text-gold font-semibold"> practical action steps</span> that create real, lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-16">
        <div className="container mx-auto px-4 mobile-padding">
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-center mb-12 gradient-text animate-on-scroll">
            Beyond Coaching
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-on-scroll">
              <img 
                src="/lovable-uploads/ac02951f-79a7-4a33-ae14-7e22133f5d82.png"
                alt="Octavia Pais Personal"
                className="w-full rounded-3xl shadow-2xl professional-hover"
              />
            </div>
            
            <div className="space-y-6 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div>
                <h3 className="font-playfair text-xl font-bold text-gold mb-4">When I'm Not Coaching</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: '📚', activity: 'Reading' },
                    { icon: '🌱', activity: 'Gardening' },
                    { icon: '🏔️', activity: 'Adventure' },
                    { icon: '🍳', activity: 'Cooking' }
                  ].map((hobby, index) => (
                    <div 
                      key={hobby.activity}
                      className="bg-card/50 border-gold/20 rounded-lg p-4 text-center professional-hover card-elegant professional-animation"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-xl mb-2">{hobby.icon}</div>
                      <div className="text-sm text-muted-foreground">{hobby.activity}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-card/30 rounded-2xl p-6 border border-gold/20">
                <p className="text-base leading-relaxed text-muted-foreground italic">
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
