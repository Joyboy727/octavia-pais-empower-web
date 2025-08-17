import React from 'react';

interface OptimizedTestimonialProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating?: number;
}

export const OptimizedTestimonial: React.FC<OptimizedTestimonialProps> = ({
  quote,
  author,
  role,
  company,
  rating = 5
}) => {
  return (
    <div className="testimonial">
      {rating && (
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-lg ${
                i < rating ? 'text-accent' : 'text-muted-foreground'
              }`}
            >
              ★
            </span>
          ))}
        </div>
      )}
      
      <blockquote className="testimonial-quote">
        "{quote}"
      </blockquote>
      
      <div className="testimonial-author">
        <div className="font-semibold">{author}</div>
        <div className="text-sm text-muted-foreground">
          {role}{company && ` at ${company}`}
        </div>
      </div>
    </div>
  );
};