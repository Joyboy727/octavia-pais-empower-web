
import { Instagram, Facebook, Linkedin, Mail, Phone, Youtube } from 'lucide-react';

interface SocialMediaIconsProps {
  variant?: 'horizontal' | 'vertical';
  size?: number;
  className?: string;
}

const SocialMediaIcons = ({ variant = 'horizontal', size = 24, className = '' }: SocialMediaIconsProps) => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/oct_thelifecoach',
      icon: Instagram,
      color: '#E4405F',
      hoverClass: 'hover:text-instagram'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/octavia.pais.2025',
      icon: Facebook,
      color: '#1877F2',
      hoverClass: 'hover:text-facebook'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/octavia-pais-40185280/',
      icon: Linkedin,
      color: '#0A66C2',
      hoverClass: 'hover:text-linkedin'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@oct.thelifedesigner',
      icon: Youtube,
      color: '#FF0000',
      hoverClass: 'hover:text-red-500'
    },
    {
      name: 'Email',
      url: 'mailto:octaviapais@gmail.com',
      icon: Mail,
      color: '#FFD700',
      hoverClass: 'hover:text-gold'
    },
    {
      name: 'Phone',
      url: 'tel:+917975163696',
      icon: Phone,
      color: '#25D366',
      hoverClass: 'hover:text-green-500'
    }
  ];

  const containerClass = variant === 'horizontal' 
    ? 'flex flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center'
    : 'flex flex-col gap-3 items-center';

  return (
    <div className={`${containerClass} ${className}`}>
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target={social.url.startsWith('http') ? '_blank' : '_self'}
            rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="social-icon group relative"
            aria-label={`Connect on ${social.name}`}
          >
            <IconComponent 
              size={size} 
              className={`transition-all duration-300 ${social.hoverClass} group-hover:scale-110`}
            />
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {social.name}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaIcons;
