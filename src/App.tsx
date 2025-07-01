
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
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
    // Skip link for accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Feature detection
    const supportsBackdropFilter = CSS.supports('backdrop-filter', 'blur(10px)');
    const supportsGrid = CSS.supports('display', 'grid');
    
    if (!supportsBackdropFilter) {
      document.documentElement.classList.add('no-backdrop-filter');
    }
    if (!supportsGrid) {
      document.documentElement.classList.add('no-grid');
    }

    // Premium scroll animations and parallax
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      
      // Enhanced parallax effect
      parallaxElements.forEach((element, index) => {
        const speed = 0.2 + (index * 0.05);
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });

      // Premium scroll-triggered animations
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      animateElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('smooth-fade', 'visible');
        }
      });

      // Premium navbar background on scroll
      const navbar = document.querySelector('nav');
      if (navbar) {
        if (scrolled > 50) {
          navbar.style.background = 'rgba(11, 20, 38, 0.95)';
          navbar.style.backdropFilter = 'blur(20px)';
          navbar.style.borderBottom = '1px solid rgba(212, 175, 55, 0.2)';
        } else {
          navbar.style.background = 'transparent';
          navbar.style.backdropFilter = 'none';
          navbar.style.borderBottom = 'none';
        }
      }
    };

    // Throttled scroll handler for better performance
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

    // Enhanced smooth scroll behavior
    const smoothScrollTo = (target: HTMLElement, duration: number = 1200) => {
      const targetPosition = target.offsetTop - 80; // Account for navbar
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
      };

      requestAnimationFrame(animation);
    };

    // Add premium scroll listeners
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    // Initialize animations on load
    setTimeout(handleScroll, 100);

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('smooth-fade', 'visible');
        }
      });
    }, observerOptions);

    // Observe all animate-on-scroll elements
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      observer.disconnect();
      // Cleanup skip link
      const existingSkipLink = document.querySelector('.skip-link');
      if (existingSkipLink) {
        existingSkipLink.remove();
      }
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
            <ParticleBackground />
            <Navbar />
            <main id="main-content" className="relative z-10">
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
