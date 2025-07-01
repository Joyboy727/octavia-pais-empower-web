
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent" />
      <div className="relative z-10 container mx-auto px-4 mobile-padding text-center">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <h2 className="font-playfair text-2xl md:text-4xl font-bold mb-6 gradient-text">
            Ready to rewrite your story?
          </h2>
          <p className="text-responsive-lg mb-8 text-muted-foreground">
            Let's begin your transformation journey today.
          </p>
          <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-4 rounded-full text-lg professional-hover subtle-glow">
            Start Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
