
const WhoIHelpSection = () => {
  return (
    <section className="py-16 bg-navy-light/30">
      <div className="container mx-auto px-4 mobile-padding">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-block bg-gold text-navy font-bold text-4xl md:text-6xl rounded-full w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-6 subtle-pulse-glow">
            16+
          </div>
          <h2 className="font-playfair text-2xl md:text-4xl font-bold mb-6 gradient-text">
            Years Helping People Transform
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {['stuck', 'overwhelmed', 'overthinking', 'ready for action'].map((word, index) => (
              <span 
                key={word}
                className="bg-gold/20 text-gold px-4 py-2 rounded-full text-sm md:text-base font-medium professional-animation"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIHelpSection;
