
const AboutSection = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light parallax-bg" />
      <div className="relative z-10 container mx-auto px-4 mobile-padding text-center">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <p className="text-responsive-lg leading-relaxed font-light text-muted-foreground">
            After years in <span className="text-gold font-medium">banking, education & leadership</span>, 
            I now help people break mental barriers, build true self-belief, and 
            <span className="text-gold font-medium"> show up powerfully</span> in life and work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
