import { useEffect } from "react";
import { OptimizedHero } from "@/components/optimized/OptimizedHero";
import { OptimizedServiceCard } from "@/components/optimized/OptimizedServiceCard";
import { OptimizedTestimonial } from "@/components/optimized/OptimizedTestimonial";
import { useOptimizedIntersectionObserver } from "@/hooks/useOptimizedIntersectionObserver";
import { createOptimizedScrollHandler, setupLazyLoading } from "@/utils/performanceOptimizations";
import { User, Briefcase, Mic } from "lucide-react";

const Home = () => {
  // Initialize optimized intersection observer
  useOptimizedIntersectionObserver();

  useEffect(() => {
    // Setup lazy loading
    setupLazyLoading();

    // Optimized scroll handler for header
    const handleScroll = createOptimizedScrollHandler(() => {
      const header = document.querySelector('.header');
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBookCall = () => {
    window.open('https://calendly.com/octavia-pais', '_blank');
  };

  return (
    <div className="min-h-screen">
      <OptimizedHero
        title="Own the room. Lead with your voice."
        subtitle="Premium life and speaking coaching for leaders ready to be heard—and remembered."
        ctaText="Book Discovery Call"
        onCtaClick={handleBookCall}
        backgroundImage="/DSC_0855.JPG"
      />

      {/* Services Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Transformative Coaching Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Personalized coaching designed to unlock your potential and achieve lasting results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <OptimizedServiceCard
              icon={<User className="w-8 h-8" />}
              title="Life Coaching"
              description="Clarity, confidence, and direction for personal transformation."
              features={[
                "Personal values alignment",
                "Goal setting and achievement",
                "Mindset transformation",
                "Work-life balance"
              ]}
              ctaText="Learn More"
              onCtaClick={() => console.log('Life coaching clicked')}
            />

            <OptimizedServiceCard
              icon={<Briefcase className="w-8 h-8" />}
              title="Executive & Career"
              description="Leadership development for professionals and executives."
              features={[
                "Leadership presence",
                "Career advancement",
                "Team management",
                "Executive presence"
              ]}
              ctaText="Learn More"
              onCtaClick={() => console.log('Executive coaching clicked')}
            />

            <OptimizedServiceCard
              icon={<Mic className="w-8 h-8" />}
              title="Public Speaking"
              description="Master the art of impactful communication and presentations."
              features={[
                "Speech confidence",
                "Presentation skills",
                "Storytelling mastery",
                "Stage presence"
              ]}
              ctaText="Learn More"
              onCtaClick={() => console.log('Speaking coaching clicked')}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from real people who transformed their lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <OptimizedTestimonial
              quote="Octavia helped me find my voice and confidence. I went from avoiding presentations to leading company-wide meetings with ease."
              author="Sarah Johnson"
              role="Marketing Director"
              company="Tech Solutions Inc"
              rating={5}
            />

            <OptimizedTestimonial
              quote="The life coaching sessions were transformational. I gained clarity on my goals and developed the mindset to achieve them."
              author="Michael Chen"
              role="Entrepreneur"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a discovery call and take the first step toward your goals.
          </p>
          <button 
            className="cta-button bg-white text-primary hover:bg-white/90"
            onClick={handleBookCall}
          >
            Book Your Discovery Call
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
