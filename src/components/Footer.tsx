
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-gold/20 relative z-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/9d0b6c88-a75a-4ea9-9b78-179fd103e9f9.png" 
                alt="Octavia Pais Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="font-playfair font-bold text-lg gradient-text">
                  Octavia Pais
                </h3>
                <p className="text-sm text-muted-foreground">
                  Life & Speaking Coach
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              "You don't need to be perfect. You just need to begin."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-gold transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-gold transition-colors">
                About
              </Link>
              <Link to="/services" className="block text-sm text-muted-foreground hover:text-gold transition-colors">
                Programs
              </Link>
              <Link to="/success" className="block text-sm text-muted-foreground hover:text-gold transition-colors">
                Success Stories
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-gold transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Connect</h4>
            <div className="space-y-3">
              <a 
                href="tel:+919008808808" 
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-gold transition-colors"
              >
                <span>📞</span>
                <span>+91 90088 08808</span>
              </a>
              <a 
                href="mailto:octaviapais@gmail.com" 
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-gold transition-colors"
              >
                <span>📧</span>
                <span>octaviapais@gmail.com</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a 
                  href="https://www.instagram.com/oct_thelifecoach" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors text-xl"
                >
                  📷
                </a>
                <a 
                  href="https://www.facebook.com/octavia.pais.2025" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors text-xl"
                >
                  📘
                </a>
                <a 
                  href="https://www.linkedin.com/in/octavia-pais-40185280/?originalSubdomain=in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors text-xl"
                >
                  💼
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gold/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Octavia Pais - Mindset & Public Speaking Coach. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Website Crafted with ❤️ by Priyanshu Chowdhury
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
