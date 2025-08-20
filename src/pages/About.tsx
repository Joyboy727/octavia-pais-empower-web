import React, { useEffect, useRef, useState } from 'react';
import { CinematicButton } from '@/components/CinematicButton';
import { CinematicCard } from '@/components/CinematicCard';
import { CinematicQuote } from '@/components/CinematicQuote';
import { CertificationItem } from '@/components/CertificationItem';
import { Sparkles, Heart, Globe, ArrowRight } from 'lucide-react';

const About = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsHeroVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Cinematic Hero Section */}
      <section ref={heroRef} className="min-h-screen relative flex items-center cinematic-hero-bg">
        {/* Parallax Background */}
        <div className="absolute inset-0 cinematic-parallax-bg" />
        
        {/* Bokeh Particles */}
        <div className="absolute inset-0 cinematic-bokeh-particles" />
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left: Content */}
            <div className="space-y-8 lg:pr-12">
              <div className={`cinematic-text-reveal ${isHeroVisible ? 'animate' : ''}`}>
                <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
                  <span className="cinematic-gradient-text block">My</span>
                  <span className="cinematic-gradient-text-animated block mt-2">Story</span>
                </h1>
              </div>
              
              <div className={`cinematic-text-reveal delay-300 ${isHeroVisible ? 'animate' : ''}`}>
                <p className="text-xl md:text-2xl text-gold/90 font-light tracking-wide leading-relaxed">
                  Growth & Mindset Coach | Public Speaking Strategist
                </p>
              </div>
              
              <div className={`cinematic-text-reveal delay-500 ${isHeroVisible ? 'animate' : ''}`}>
                <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                  From the outside, everything looked perfect. A successful career in banking. 
                  International experience. A respected teaching role in Bangalore.
                </p>
              </div>
              
            </div>

            {/* Right: Cinematic Portrait */}
            <div className={`cinematic-image-reveal ${isHeroVisible ? 'animate' : ''}`}>
              <div className="relative max-w-lg mx-auto">
                {/* Image Frame */}
                <div className="cinematic-image-frame">
                  <img 
                    src="/DSC_0790.JPG"
                    alt="Professional cinematic portrait, soft spotlight lighting, dark background with subtle grain, high-resolution vertical frame, elegant pose - Niclas Moser on Unsplash"
                    className="w-full h-auto rounded-2xl cinematic-image-glow"
                    style={{ width: '100%', height: 'auto' }}
                  />
                  
                  {/* Golden Frame Border */}
                  <div className="cinematic-golden-frame" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Quote Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <CinematicQuote>
            "But deep down, I kept wondering: 'Is this it?'"
          </CinematicQuote>
        </div>
      </section>

      {/* Storytelling Flow */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="cinematic-story-block">
              <p className="text-xl text-gray-300 leading-relaxed text-center">
                Maybe you've asked yourself the same question. That quiet nudge... the sense that you're made for more—but unsure what "more" looks like or how to get there.
              </p>
            </div>
            
            <div className="cinematic-story-block">
              <p className="text-xl text-gray-300 leading-relaxed text-center">
                For me, that nudge became a wake-up call. After over 12 years in corporate roles and nearly a decade teaching in international schools, I stepped away from certainty—and into purpose.
              </p>
            </div>
            
            <CinematicQuote>
              I realized my true gift wasn't in closing deals or delivering lessons. It was in helping people rewrite the stories they were telling themselves.
            </CinematicQuote>
          </div>
        </div>
      </section>

      {/* What I Do Today - Split Layout */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-playfair text-5xl md:text-6xl font-bold cinematic-gradient-text">
                What I Do Today
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  I help professionals—just like you—get unstuck and stand up for the life they actually want.
                </p>
                <p>
                  Whether you're 28 and wrestling with imposter syndrome… Or 48 and craving a life with more purpose than pressure—I'm here to guide you from anxious to aligned, and from quiet to confident.
                </p>
                <div className="cinematic-highlight-box">
                  <p className="text-xl font-semibold text-gold">
                    You don't have to keep playing small.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="cinematic-secondary-image">
              <img 
                src="/DSC_0808.JPG"
                alt="Professional cinematic portrait, soft spotlight lighting, dark background with subtle grain, high-resolution vertical frame, elegant pose - Valentin Lacoste on Unsplash"
                className="w-full h-auto rounded-2xl"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts - Premium Interaction Cards */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-20 cinematic-gradient-text">
            The Personal Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <CinematicCard
              icon={<Globe size={48} />}
              title="Global Perspective"
              description="Born and raised in the UAE, lived in Mangalore, and now in Bangalore — each place shaped how I see the world and approach transformation."
            />
            
            <CinematicCard
              icon={<Heart size={48} />}
              title="Aligned Hustle"
              description="Deeply grounded in what I call 'aligned hustle' — where faith meets focused action, creating sustainable change from the inside out."
            />
            
            <CinematicCard
              icon={<Sparkles size={48} />}
              title="Transformation Joy"
              description="I light up when I see someone go from 'I don't think I can' to 'Just watch me.' That moment of breakthrough is pure magic."
            />
          </div>
          
          {/* Connecting Lines */}
          <div className="cinematic-connection-lines" />
        </div>
      </section>

      {/* Certifications & Training Section */}
      <section className="py-32 relative certifications-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold cinematic-gradient-text mb-6 certification-title-shimmer">
                Certifications & Training
              </h2>
              
              {/* Horizontal Gold Line */}
              <div className="certification-separator mx-auto mb-8" />
              
              <p className="text-lg text-gray-400 font-light italic max-w-3xl mx-auto leading-relaxed">
                A strong foundation in education, communication, and personal transformation — built through academic study and hands-on experience.
              </p>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-2">
                <CertificationItem 
                  title="Certified Life Coach – RR Training Systems"
                  index={0}
                />
                <CertificationItem 
                  title="Advanced Life Coaching Certificate – Joeel & Natalie Rivera (Beginner to Advanced)"
                  index={1}
                />
                <CertificationItem 
                  title="NLP Practitioner Certification – Kain Ramsay (Accredited Program)"
                  index={2}
                />
                <CertificationItem 
                  title="Train the Trainer – Canfield Training Group (Jack Canfield Methodology)"
                  index={3}
                />
              </div>
              
              <div className="space-y-2">
                <CertificationItem 
                  title="Masters in English Literature – Bangalore University"
                  index={4}
                />
                <CertificationItem 
                  title="Bachelor of Education (B.Ed.) – Bangalore University"
                  index={5}
                />
                <CertificationItem 
                  title="Bachelor of Business Management (BBM) – Mangalore University"
                  index={6}
                />
                <CertificationItem 
                  title="CIDTL (Cambridge International Diploma for Teachers and Learners) – Indus International School, Bangalore"
                  index={7}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-20 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <CinematicQuote>
            Ready to rewrite your story?
          </CinematicQuote>
          <CinematicButton 
            className="mt-8"
            urgencyText="Only 3 spots left this month"
          >
            Book Your Clarity Call
          </CinematicButton>
        </div>
      </section>

      {/* Footer CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-gold to-gold-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            If you're feeling the pull toward something deeper, more empowered, and more you — that's not random. That's alignment knocking.
          </p>
          <CinematicButton className="bg-black text-gold hover:bg-black/90">
            Book a Free Clarity Call
          </CinematicButton>
        </div>
      </section>
    </div>
  );
};

export default About;