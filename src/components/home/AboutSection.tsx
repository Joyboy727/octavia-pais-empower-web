
import React from 'react';

const AboutSection = () => {
  return (
    <section className="pt-48 pb-28 relative overflow-hidden bg-gradient-to-br from-navy/95 to-navy-light/95">
      <div className="relative z-10 container mx-auto px-4 mobile-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Octavia's Image - Larger and More Prominent */}
          <div className="animate-on-scroll">
            <div className="relative w-full lg:w-[115%] mx-auto rounded-3xl overflow-hidden">
              <img 
                src="/DSC_0847.JPG"
                alt="Octavia Pais - Life & Public Speaking Coach"
                className="w-full h-full object-cover rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* About Text - Clean and Professional */}
          <div className="animate-on-scroll">
            <h2 className="font-serif text-5xl md:text-6xl font-extrabold mb-8 text-gold tracking-wide leading-tight">
              MEET OCTAVIA PAIS
            </h2>
            
            <div className="space-y-8">
              <div className="relative p-10 rounded-xl border border-gold/20 bg-navy-light/30 backdrop-blur-sm">
                <p className="text-white text-lg leading-loose font-light mb-4">
                  After over two decades in banking, leadership, and education, I reached a turning point. I realized the real work wasn't just about success on paper—it was about silencing self-doubt, finding your voice, and showing up as the most powerful version of yourself.
                </p>
                <p className="text-white text-lg leading-loose font-light">
                  Now, I help ambitious individuals break free from limiting beliefs, build deep inner confidence, and express themselves with clarity and conviction—on stage, at work, and in life.
                </p>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent animate-fade-in" />
              </div>
              
              <div className="relative p-10 rounded-xl border border-gold/20 bg-navy-light/30 backdrop-blur-sm">
                <p className="text-white text-lg leading-loose font-light">
                  My coaching blends mindset transformation with real-world communication tools—so you don't just think differently, you live differently.
                </p>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent animate-fade-in" />
              </div>

              <div className="relative p-10 rounded-xl border border-gold/20 bg-navy-light/30 backdrop-blur-sm">
                <h3 className="font-serif font-bold text-gold mb-6 text-2xl">Credentials:</h3>
                <ul className="text-white text-lg space-y-3 grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-gold mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    Certified Life Coach
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-gold mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    Public Speaking Trainer
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-gold mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    NLP Practitioner
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-gold mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    Author & Keynote Speaker
                  </li>
                </ul>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent animate-fade-in" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
