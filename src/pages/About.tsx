
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import SkillBars from "@/components/about/SkillBars";
import PhotoGallery from "@/components/about/PhotoGallery";
import AchievementBadges from "@/components/about/AchievementBadges";
import PersonalValues from "@/components/about/PersonalValues";

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
    "Life Coach Certification – RR Training Systems",
    "Life Coaching Certificate: Beginner to Advanced – Joeel & Natalie Rivera",
    "NLP Practitioner Certification – Neuro-Linguistic Programming (NLP) Practitioner Course by Kain Ramsay",
    "Masters in English Literature - Bangalore University",
    "CIDTL (Cambridge International Diploma for Teachers and Learners) – Indus International School, Bangalore",
    "Bachelor of Education – Bangalore University",
    "Train the Trainer Certification – Jack Canfield's Canfield Training Group",
    "NLP Practitioner Certification – Neuro-Linguistic Programming (NLP) Practitioner Certificate (Accredited) by Kain Ramsay"
  ];

  const credentialsOrder = [
    "🏆 Certified Life Coach",
    "🏆 Mindset Transformation Specialist", 
    "🏆 NLP Practitioner",
    "🏆 Public Speaking Expert"
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
                <span className="gradient-text">MY</span>
                <br />
                <span className="text-white">STORY</span>
              </h1>
              <p className="text-lg text-gold font-medium mb-6">
                Growth & Mindset Coach | Public Speaking Strategist
              </p>
              <div className="space-y-4 text-responsive-base leading-relaxed text-muted-foreground">
                <p>
                  <span className="text-gold font-semibold">From the outside, everything looked picture-perfect.</span>
                </p>
                <p>
                  A successful banking career, international experience, and a respected role as an educator in Bangalore. I had stability, security, and status. But deep inside, I felt a quiet ache—a sense that I was meant for more.
                </p>
                <p>
                  I often found myself asking: <span className="text-gold font-semibold">"Is this it?"</span>
                </p>
                <p>
                  There was a voice within me that refused to be silenced. It whispered, <span className="text-gold font-semibold">"You're here to do work that changes lives."</span> And eventually, I listened.
                </p>
                <p>
                  After over 12 years in corporate sectors and nearly a decade of shaping young minds in international schools, I took a leap of faith—away from certainty and into purpose.
                </p>
                <p>
                  I realized that my gift wasn't just in delivering lessons or closing deals. It was in helping people break through self-doubt, speak with confidence, and take aligned action toward their dreams.
                </p>
                <p>
                  <span className="text-gold font-semibold">That's how my coaching practice was born.</span>
                </p>
                <p>
                  Since then, I've devoted myself to helping ambitious men and women master their mindset, find their authentic voice, and lead lives that feel as good on the inside as they look on the outside.
                </p>
                <div className="mt-8 p-6 bg-card/30 rounded-2xl border border-gold/20">
                  <h3 className="text-xl font-bold text-gold mb-4">💡 ✨ Fun Facts About Me</h3>
                  <p>
                    I was born and raised in the UAE, spent a few years in Mangalore after marriage, and now call Bangalore home. Each place has shaped my worldview and added a unique layer to my journey.
                  </p>
                  <p className="mt-3">
                    I'm deeply rooted in practices like vision boards, prayer, affirmations, and what I call "aligned hustle"—where faith meets focused action.
                  </p>
                  <p className="mt-3">
                    Nothing excites me more than witnessing someone go from <span className="text-gold font-semibold">"I don't think I can"</span> to <span className="text-gold font-semibold">"Just watch me do it!"</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Portrait */}
            <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 bg-gold/20 rounded-3xl transform rotate-3 animate-gentle-float" />
                <img 
                  src="/lovable-uploads/10c64aa3-4a08-47fd-b71f-a056e7fb11ba.png"
                  alt="Octavia Pais"
                  className="relative w-full rounded-3xl shadow-2xl professional-hover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4 mobile-padding">
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-center mb-12 gradient-text animate-on-scroll">
            🎓 CERTIFICATIONS & TRAINING
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            Years of experience and continuous learning have shaped my expertise across multiple domains
          </p>
          
          <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto mb-16">
            {certifications.map((cert, index) => (
              <Card 
                key={cert}
                className="bg-card/50 border-gold/20 hover:border-gold/40 transition-all duration-300 card-elegant animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <p className="text-muted-foreground text-sm">
                    {cert}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-center mb-12 gradient-text animate-on-scroll">
            Credentials & Expertise 🏆
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {credentialsOrder.map((cert, index) => (
              <Card 
                key={cert}
                className="bg-card/50 border-gold/20 hover:border-gold/40 transition-all duration-300 card-elegant animate-on-scroll text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
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

      {/* Skills Section */}
      <SkillBars />

      {/* Personal Values */}
      <PersonalValues />

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Achievement Badges */}
      <AchievementBadges />

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
