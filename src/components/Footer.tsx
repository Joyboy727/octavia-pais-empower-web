
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-gold/20 relative z-10">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <img 
                src="/lovable-uploads/10c64aa3-4a08-47fd-b71f-a056e7fb11ba.png" 
                alt="Octavia Pais Logo" 
                className="h-8 sm:h-10 w-auto clean-logo"
              />
              <div>
                <h3 className="font-playfair font-bold text-base sm:text-lg gradient-text">
                  Octavia Pais
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Life & Speaking Coach
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              "You don't need to be perfect. You just need to begin."
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-gold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-xs sm:text-sm text-muted-foreground hover:text-gold transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-xs sm:text-sm text-muted-foreground hover:text-gold transition-colors">
                About
              </Link>
              <Link to="/services" className="block text-xs sm:text-sm text-muted-foreground hover:text-gold transition-colors">
                Programs
              </Link>
              <Link to="/success" className="block text-xs sm:text-sm text-muted-foreground hover:text-gold transition-colors">
                Success Stories
              </Link>
              <Link to="/contact" className="block text-xs sm:text-sm text-muted-foreground hover:text-gold transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-gold mb-3 sm:mb-4 text-sm sm:text-base">Connect</h4>
            <div className="space-y-2 sm:space-y-3">
              <a 
                href="tel:+917975163696" 
                className="flex items-center justify-center md:justify-start space-x-2 text-xs sm:text-sm text-muted-foreground hover:text-gold transition-colors"
              >
                <span>📞</span>
                <span>7975163696</span>
              </a>
              <a 
                href="mailto:octaviapais@gmail.com" 
                className="flex items-center justify-center md:justify-start space-x-2 text-xs sm:text-sm text-muted-foreground hover:text-gold transition-colors"
              >
                <span>📧</span>
                <span>octaviapais@gmail.com</span>
              </a>
              <div className="flex justify-center md:justify-start space-x-4 pt-2">
                <a 
                  href="https://www.instagram.com/oct_thelifecoach" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors text-lg sm:text-xl"
                >
                  📷
                </a>
                <a 
                  href="https://www.facebook.com/octavia.pais.2025" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors text-lg sm:text-xl"
                >
                  📘
                </a>
                <a 
                  href="https://www.linkedin.com/in/octavia-pais-40185280/?originalSubdomain=in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors text-lg sm:text-xl"
                >
                  💼
                </a>
                <a 
                  href="https://www.youtube.com/@oct.thelifedesigner" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors text-lg sm:text-xl"
                >
                  📺
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gold/20 pt-4 sm:pt-6">
          <div className="flex flex-col items-center space-y-3 sm:space-y-4 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {currentYear} Octavia Pais - Mindset & Public Speaking Coach. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Website Crafted with ❤️ by Priyanshu Chowdhury
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
