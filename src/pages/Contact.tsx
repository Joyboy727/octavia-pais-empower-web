import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// Define animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 12 
    } 
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 80, 
      damping: 12 
    } 
  },
  hover: { 
    y: -10, 
    boxShadow: "0 20px 25px -5px rgba(212, 175, 55, 0.1), 0 10px 10px -5px rgba(212, 175, 55, 0.04)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

const formItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    } 
  }
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 200, 
      damping: 10 
    } 
  },
  hover: { 
    scale: 1.05,
    boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: { 
    scale: 0.95,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: -30 },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: { 
      type: "spring", 
      stiffness: 200, 
      damping: 10 
    } 
  },
  hover: { 
    scale: 1.2,
    rotate: 5,
    transition: { type: "spring", stiffness: 300, damping: 8 }
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  // We'll use Framer Motion's useInView instead of IntersectionObserver
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  
  const methodsRef = useRef(null);
  const methodsInView = useInView(methodsRef, { once: true, margin: "-100px" });
  
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px" });

  const handleButtonClick = (buttonText: string) => {
    const bookingButtons = ["Join The Bootcamp", "Apply Now", "Book Your Spot", "Book Free Clarity Call", "Start Your Transformation", "Send Message"];
    const callButtons = ["Call Now", "Call Now (desktop)", "Call Now (mobile)", "Call Octavia Now"];
    
    if (bookingButtons.includes(buttonText)) {
      window.open("https://calendly.com/octaviathelifecoach/30min", "_blank");
    } else if (callButtons.includes(buttonText)) {
      window.location.href = "tel:+917975163696";
    }
  };

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

    // Redirect to Calendly instead of just showing success toast
    window.open("https://calendly.com/octaviathelifecoach/30min", "_blank");

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
      contact: "octaviathelifecoach@gmail.com",
      action: "mailto:octaviathelifecoach@gmail.com",
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
    },
    {
      platform: "YouTube",
      handle: "octavia pais",
      url: "https://www.youtube.com/@oct.thelifedesigner",
      icon: "📺",
      color: "text-red-400"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="py-24 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black parallax-bg"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                className="font-playfair text-5xl md:text-7xl font-bold mb-8"
                variants={itemVariants}
              >
                <motion.span 
                  className="gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 12,
                    delay: 0.2 
                  }}
                >
                  Ready to Start?
                </motion.span>
                <br />
                <motion.span 
                  className="text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 12,
                    delay: 0.4 
                  }}
                >
                  Let's Talk.
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl"
                variants={itemVariants}
                transition={{ delay: 0.6 }}
              >
                Your transformation journey begins with a conversation. 
                Let's discuss how I can help you break through and reach your potential.
              </motion.p>
            </motion.div>
            
            {/* Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img 
                  src="/DSC_0970.JPG"
                  alt="Octavia Pais - Professional Contact"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Contact Methods */}
      <motion.section 
        ref={methodsRef}
        className="py-24 bg-black/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="font-playfair text-4xl md:text-6xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 12 
            }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                variants={cardVariants}
                custom={index}
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/50 border-gold/20 hover:border-gold/50 transition-all duration-300 text-center card-3d h-full">
                  <CardContent className="p-8">
                    <motion.div 
                      className="text-4xl mb-4"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      {method.icon}
                    </motion.div>
                    <motion.h3 
                      className="font-playfair text-xl font-bold text-gold mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                    >
                      {method.title}
                    </motion.h3>
                    <motion.p 
                      className="text-muted-foreground mb-4 text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                    >
                      {method.description}
                    </motion.p>
                    <motion.a 
                      href={method.action}
                      className={`${method.color} font-semibold hover:text-gold transition-colors duration-300`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {method.contact}
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section 
        ref={formRef}
        className="py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 border-gold/20 hover:border-gold/50 transition-all duration-300 glow-effect">
                <CardHeader>
                  <motion.div variants={itemVariants}>
                    <CardTitle className="font-playfair text-3xl font-bold gradient-text">
                      LET'S CONNECT
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    variants={containerVariants}
                  >
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={formItemVariants}>
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
                    </motion.div>

                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={formItemVariants}>
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
                    </motion.div>

                    <motion.div className="space-y-2" variants={formItemVariants}>
                      <label className="text-sm font-medium text-gold">Message *</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell me about your current challenges and what you'd like to achieve..."
                        rows={5}
                        className="bg-background/50 border-gold/20 focus:border-gold resize-none"
                        required
                      />
                    </motion.div>

                    <motion.div 
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-gold hover:bg-gold-dark text-black font-bold py-3 rounded-full text-lg magnetic-hover glow-effect"
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </motion.form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Quick Contact */}
              <motion.div variants={itemVariants}>
                <Card className="bg-card/50 border-gold/20">
                  <CardHeader>
                    <CardTitle className="font-playfair text-2xl font-bold text-gold">
                      Quick Contact
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div 
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gold/10 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-2xl">📞</span>
                      <div>
                        <div className="font-semibold">Call or WhatsApp</div>
                        <a href="tel:+917975163696" className="text-gold hover:text-gold-light">
                          +91 79751 63696
                        </a>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gold/10 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-2xl">📧</span>
                      <div>
                        <div className="font-semibold">Email</div>
                        <a href="mailto:octaviathelifecoach@gmail.com" className="text-gold hover:text-gold-light">
                          octaviathelifecoach@gmail.com
                        </a>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gold/10 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-2xl">📍</span>
                      <div>
                        <div className="font-semibold">Location</div>
                        <div className="text-muted-foreground">Bangalore, India</div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Social Media */}
              <motion.div variants={itemVariants}>
                <Card className="bg-card/50 border-gold/20">
                  <CardHeader>
                    <CardTitle className="font-playfair text-2xl font-bold text-gold">
                      Follow My Journey
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.div 
                      className="space-y-4"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gold/10 transition-colors duration-300 group"
                          variants={itemVariants}
                          custom={index}
                          whileHover={{ x: 5 }}
                        >
                          <motion.span 
                            className="text-2xl group-hover:animate-bounce"
                            variants={iconVariants}
                            whileHover="hover"
                          >
                            {social.icon}
                          </motion.span>
                          <div>
                            <div className="font-semibold">{social.platform}</div>
                            <div className={`${social.color} group-hover:text-gold transition-colors`}>
                              {social.handle}
                            </div>
                          </div>
                        </motion.a>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Call to Action */}
              <motion.div 
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="bg-gradient-to-br from-gold/20 to-gold/10 border-gold/50">
                  <CardContent className="p-8 text-center">
                    <motion.h3 
                      className="font-playfair text-2xl font-bold mb-4 gradient-text"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      Ready for Immediate Action?
                    </motion.h3>
                    <motion.p 
                      className="mb-6 text-muted-foreground"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      Don't wait. Your breakthrough conversation is just one call away.
                    </motion.p>
                    <motion.div
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Button 
                        className="bg-gold hover:bg-gold-dark text-black font-bold px-8 py-3 rounded-full magnetic-hover glow-effect"
                        onClick={() => handleButtonClick("Call Octavia Now")}
                      >
                        Call Octavia Now
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Additional Images Section */}
      <motion.section 
        className="py-16 bg-black/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.h3 
            className="font-playfair text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Connect With Confidence
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {["/lovable-uploads/9209b4c3-05d0-445e-9f8b-a4e0c5223a55.png", 
              "/lovable-uploads/2d18e1ff-d45f-4703-8b10-a717eafe7e54.png", 
              "/lovable-uploads/f6d5f540-86a6-40e7-99d8-b4f7ed405c38.png"].map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={image}
                  alt={`Octavia Pais - Professional Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;