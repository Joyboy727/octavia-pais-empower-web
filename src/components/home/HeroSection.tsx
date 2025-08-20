
import { useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src="/DSC_0855.JPG" alt="Octavia" className="w-full h-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy to-transparent" />

      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 text-center z-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-lg font-serif">
          Unlock Your Full Potential
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
          Empowering leaders to achieve extraordinary results and lasting impact.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
