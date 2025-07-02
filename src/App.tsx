
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EnhancedParticleBackground from "./components/EnhancedParticleBackground";
import AnimatedBackground from "./components/AnimatedBackground";
import PerformanceMonitor from "./components/PerformanceMonitor";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Success from "./pages/Success";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Premium performance optimizations
    const supportsBackdropFilter = CSS.supports('backdrop-filter', 'blur(10px)');
    const supportsGrid = CSS.supports('display', 'grid');
    
    if (!supportsBackdropFilter) {
      document.documentElement.classList.add('no-backdrop-filter');
    }
    if (!supportsGrid) {
      document.documentElement.classList.add('no-grid');
    }

    // Premium scroll handler with optimized performance
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      // Smooth parallax for performance
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      parallaxElements.forEach((element, index) => {
        const speed = 0.15 + (index * 0.03);
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });

      // Premium scroll animations
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      animateElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 80;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('premium-fade-in', 'visible');
        }
      });

      // Premium navbar transformation
      const navbar = document.querySelector('nav');
      if (navbar) {
        if (scrolled > 30) {
          navbar.style.background = 'rgba(11, 20, 38, 0.95)';
          navbar.style.backdropFilter = 'blur(20px)';
          navbar.style.borderBottom = '1px solid rgba(212, 175, 55, 0.15)';
          navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
          navbar.style.background = 'transparent';
          navbar.style.backdropFilter = 'none';
          navbar.style.borderBottom = 'none';
          navbar.style.boxShadow = 'none';
        }
      }
    };

    // Optimized scroll performance
    let ticking = false;
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    // Initialize premium animations
    setTimeout(handleScroll, 50);

    // Premium Intersection Observer
    const observerOptions = {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('premium-fade-in', 'visible');
        }
      });
    }, observerOptions);

    // Observe elements with slight delay for smooth loading
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      observer.disconnect();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <PerformanceMonitor />
        <BrowserRouter>
          <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
            <AnimatedBackground />
            <EnhancedParticleBackground />
            <Navbar />
            <main className="relative z-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/success" element={<Success />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
