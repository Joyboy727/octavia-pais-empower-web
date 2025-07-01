
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/services' },
    { name: 'Success Stories', path: '/success' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/lovable-uploads/9d0b6c88-a75a-4ea9-9b78-179fd103e9f9.png" 
              alt="Octavia Pais Logo" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <div className="hidden sm:block">
              <h1 className="font-playfair font-bold text-xl text-gold gradient-text">
                Octavia Pais
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">
                Life & Speaking Coach
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative py-2 px-3 text-sm font-medium transition-all duration-300 group ${
                  isActivePath(item.path) 
                    ? 'text-gold' 
                    : 'text-foreground hover:text-gold'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-300 ${
                  isActivePath(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+919008808808" className="magnetic-hover">
              <Button className="bg-gold hover:bg-gold-dark text-black font-semibold px-6 py-2 rounded-full glow-effect">
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
            }`} />
            <span className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`} />
            <span className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
            }`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 pb-2 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 px-4 text-sm font-medium transition-colors duration-300 ${
                  isActivePath(item.path) 
                    ? 'text-gold bg-gold/10 rounded-lg' 
                    : 'text-foreground hover:text-gold'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <a href="tel:+919008808808" className="block">
                <Button className="w-full bg-gold hover:bg-gold-dark text-black font-semibold py-2 rounded-full">
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
