import { useState } from 'react';
import { motion } from 'framer-motion';

interface CalculatorOptions {
  sessions: number;
  support: 'standard' | 'premium';
  materials: boolean;
  duration: number;
}

const PremiumPricingCalculator = () => {
  const [selectedOptions, setSelectedOptions] = useState<CalculatorOptions>({
    sessions: 12,
    support: 'standard',
    materials: false,
    duration: 6,
  });

  const [isCalculating, setIsCalculating] = useState(false);

  const calculateTotal = () => {
    let total = selectedOptions.sessions * 150;
    if (selectedOptions.support === 'premium') total += 500;
    if (selectedOptions.materials) total += 200;
    
    const durationMultiplier = selectedOptions.duration / 6;
    return Math.round(total * durationMultiplier);
  };

  const handleOptionChange = (option: keyof CalculatorOptions, value: any) => {
    setIsCalculating(true);
    setTimeout(() => {
      setSelectedOptions(prev => ({ ...prev, [option]: value }));
      setIsCalculating(false);
    }, 300);
  };

  return (
    <motion.div
      className="premium-pricing-calculator"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Glass Morphism Container */}
      <div className="calculator-glass-container">
        <div className="glass-background" />
        
        <motion.div
          className="calculator-header"
          animate={{ scale: isCalculating ? 1.02 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <motion.h2
            className="calculator-title"
            animate={{ 
              backgroundImage: isCalculating
                ? 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))'
                : 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)))',
              backgroundSize: isCalculating ? '200% 100%' : '100% 100%',
            }}
            transition={{ duration: 0.8, repeat: isCalculating ? Infinity : 0 }}
          >
            Investment Calculator
          </motion.h2>
        </motion.div>

        <div className="calculator-body">
          {/* Sessions Slider */}
          <motion.div
            className="control-group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <label className="control-label">
              <motion.span
                animate={{ color: selectedOptions.sessions > 12 ? 'hsl(var(--primary))' : 'hsl(var(--foreground))' }}
              >
                Number of Sessions
              </motion.span>
              <motion.span
                className="control-value"
                key={selectedOptions.sessions}
                initial={{ scale: 1.2, color: 'hsl(var(--primary))' }}
                animate={{ scale: 1, color: 'hsl(var(--foreground))' }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {selectedOptions.sessions}
              </motion.span>
            </label>
            
            <div className="slider-container">
              <motion.input
                type="range"
                min="4"
                max="24"
                value={selectedOptions.sessions}
                onChange={(e) => handleOptionChange('sessions', parseInt(e.target.value))}
                className="premium-slider"
                whileFocus={{ scale: 1.02 }}
              />
              <div className="slider-track">
                <motion.div
                  className="slider-fill"
                  animate={{
                    width: `${((selectedOptions.sessions - 4) / 20) * 100}%`,
                    background: selectedOptions.sessions > 12
                      ? 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))'
                      : 'linear-gradient(90deg, hsl(var(--muted)), hsl(var(--muted-foreground) / 0.3))',
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Support Level */}
          <motion.div
            className="control-group"
            whileHover={{ scale: 1.02 }}
          >
            <label className="control-label">Support Level</label>
            <div className="support-options">
              {(['standard', 'premium'] as const).map((level) => (
                <motion.button
                  key={level}
                  className={`support-option ${selectedOptions.support === level ? 'active' : ''}`}
                  onClick={() => handleOptionChange('support', level)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    background: selectedOptions.support === level
                      ? 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)'
                      : 'rgba(255,255,255,0.1)',
                    color: selectedOptions.support === level ? 'hsl(var(--primary-foreground))' : 'hsl(var(--foreground))',
                    boxShadow: selectedOptions.support === level
                      ? '0 10px 25px hsl(var(--primary) / 0.3)'
                      : '0 5px 15px rgba(0,0,0,0.1)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="option-title">{level}</span>
                  <span className="option-price">
                    {level === 'premium' ? '+₹500' : 'Included'}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Materials Toggle */}
          <motion.div
            className="control-group"
            whileHover={{ scale: 1.02 }}
          >
            <label className="toggle-label">
              <span>Course Materials</span>
              <motion.div
                className="toggle-switch"
                animate={{
                  background: selectedOptions.materials
                    ? 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)'
                    : 'rgba(200,200,200,0.3)',
                }}
                onClick={() => handleOptionChange('materials', !selectedOptions.materials)}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="toggle-thumb"
                  animate={{
                    x: selectedOptions.materials ? 30 : 0,
                    scale: selectedOptions.materials ? 1.1 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </label>
          </motion.div>
        </div>

        {/* Total Price Display */}
        <motion.div
          className="total-price-container"
          animate={{
            scale: isCalculating ? 1.05 : 1,
            boxShadow: isCalculating
              ? '0 20px 40px hsl(var(--primary) / 0.3)'
              : '0 10px 30px rgba(0,0,0,0.1)',
          }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="price-label">Total Investment</span>
          <motion.span
            className="price-amount"
            key={calculateTotal()}
            initial={{ scale: 1.2, color: 'hsl(var(--primary))' }}
            animate={{ scale: 1, color: 'hsl(var(--foreground))' }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            ₹{calculateTotal().toLocaleString()}
          </motion.span>
          
          <motion.div
            className="price-breakdown"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ delay: 0.3 }}
          >
            <div className="breakdown-item">
              <span>Sessions ({selectedOptions.sessions})</span>
              <span>₹{(selectedOptions.sessions * 150).toLocaleString()}</span>
            </div>
            {selectedOptions.support === 'premium' && (
              <div className="breakdown-item">
                <span>Premium Support</span>
                <span>₹500</span>
              </div>
            )}
            {selectedOptions.materials && (
              <div className="breakdown-item">
                <span>Course Materials</span>
                <span>₹200</span>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="calculator-cta"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
            boxShadow: '0 15px 35px hsl(var(--primary) / 0.4)',
          }}
          transition={{ duration: 0.3 }}
        >
          <span>Get Started Today</span>
          <motion.span
            className="cta-arrow"
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            →
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PremiumPricingCalculator;