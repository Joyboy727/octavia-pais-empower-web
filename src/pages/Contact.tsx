
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactMethods = [
    {
      icon: "📞",
      title: "Call Directly",
      description: "Ready to talk? Give me a call",
      contact: "+91 79751 63696",
      action: "tel:+917975163696",
      color: "text-green-400"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      description: "Quick message or call via WhatsApp", 
      contact: "+91 79751 63696",
      action: "https://wa.me/917975163696",
      color: "text-green-400"
    },
    {
      icon: "📧",
      title: "Email",
      description: "Send me a detailed message",
      contact: "octaviapais@gmail.com",
      action: "mailto:octaviapais@gmail.com",
      color: "text-blue-400"
    }
  ];

  const socialLinks = [
    {
      platform: "Instagram",
      handle: "@oct_thelifecoach",
      url: "https://www.instagram.com/oct_thelifecoach",
      icon: "📷",
      color: "text-pink-400"
    },
    {
      platform: "Facebook", 
      handle: "Octavia Pais",
      url: "https://www.facebook.com/octavia.pais.2025",
      icon: "📘",
      color: "text-blue-400"
    },
    {
      platform: "LinkedIn",
      handle: "Octavia Pais",
      url: "https://www.linkedin.com/in/octavia-pais-40185280/?originalSubdomain=in",
      icon: "💼",
      color: "text-blue-300"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black parallax-bg" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-8 animate-scale-in">
            <span className="gradient-text">Ready to Start?</span>
            <br />
            <span className="text-white">Let's Talk.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Your transformation journey begins with a conversation. 
            Let's discuss how I can help you break through and reach your potential.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-center mb-16 gradient-text animate-on-scroll">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title}
                className="bg-card/50 border-gold/20 hover:border-gold/50 transition-all duration-300 text-center card-3d animate-on-scroll group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">
                    {method.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-gold mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {method.description}
                  </p>
                  <a 
                    href={method.action}
                    className={`${method.color} font-semibold hover:text-gold transition-colors duration-300`}
                  >
                    {method.contact}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <div className="animate-on-scroll">
              <Card className="bg-card/50 border-gold/20 hover:border-gold/50 transition-all duration-300 glow-effect">
                <CardHeader>
                  <CardTitle className="font-playfair text-3xl font-bold gradient-text">
                    Send Me a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gold">Name *</label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          className="bg-background/50 border-gold/20 focus:border-gold"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gold">Email *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                          className="bg-background/50 border-gold/20 focus:border-gold"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gold">Phone</label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+91 your number"
                          className="bg-background/50 border-gold/20 focus:border-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gold">Interested In</label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger className="bg-background/50 border-gold/20 focus:border-gold">
                            <SelectValue placeholder="Select a program" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-gold/20">
                            <SelectItem value="breakthrough">The Breakthrough Blueprint</SelectItem>
                            <SelectItem value="bootcamp">Unstoppable Momentum Bootcamp</SelectItem>
                            <SelectItem value="evolution">The Evolution Experience</SelectItem>
                            <SelectItem value="speaking">Speak With Impact</SelectItem>
                            <SelectItem value="consultation">Free Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gold">Message *</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell me about your current challenges and what you'd like to achieve..."
                        rows={5}
                        className="bg-background/50 border-gold/20 focus:border-gold resize-none"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gold hover:bg-gold-dark text-black font-bold py-3 rounded-full text-lg magnetic-hover glow-effect"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              {/* Quick Contact */}
              <Card className="bg-card/50 border-gold/20">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl font-bold text-gold">
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gold/10 transition-colors duration-300">
                    <span className="text-2xl">📞</span>
                    <div>
                      <div className="font-semibold">Call or WhatsApp</div>
                      <a href="tel:+917975163696" className="text-gold hover:text-gold-light">
                        +91 79751 63696
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gold/10 transition-colors duration-300">
                    <span className="text-2xl">📧</span>
                    <div>
                      <div className="font-semibold">Email</div>
                      <a href="mailto:octaviapais@gmail.com" className="text-gold hover:text-gold-light">
                        octaviapais@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gold/10 transition-colors duration-300">
                    <span className="text-2xl">📍</span>
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className="text-muted-foreground">Bangalore, India</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-card/50 border-gold/20">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl font-bold text-gold">
                    Follow My Journey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gold/10 transition-colors duration-300 group"
                      >
                        <span className="text-2xl group-hover:animate-bounce">{social.icon}</span>
                        <div>
                          <div className="font-semibold">{social.platform}</div>
                          <div className={`${social.color} group-hover:text-gold transition-colors`}>
                            {social.handle}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-gradient-to-br from-gold/20 to-gold/10 border-gold/50">
                <CardContent className="p-8 text-center">
                  <h3 className="font-playfair text-2xl font-bold mb-4 gradient-text">
                    Ready for Immediate Action?
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    Don't wait. Your breakthrough conversation is just one call away.
                  </p>
                  <a href="tel:+917975163696">
                    <Button className="bg-gold hover:bg-gold-dark text-black font-bold px-8 py-3 rounded-full magnetic-hover glow-effect">
                      Call Octavia Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
