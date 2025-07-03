import { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import WhoIHelpSection from "@/components/home/WhoIHelpSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCards from "@/components/TestimonialCards";
import VideoShowcase from "@/components/VideoShowcase";
import CTASection from "@/components/home/CTASection";

const Home = () => {
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

  return (
    <div className="min-h-screen bg-navy">
      <HeroSection />
      <AboutSection />
      <WhoIHelpSection />
      <BenefitsSection />
      <StatsCounter />
      <ProgramsSection />
      <TestimonialCards />
      <CTASection />
    </div>
  );
};

export default Home;
