
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				gold: {
					DEFAULT: '#D4AF37',
					light: '#F4E68B',
					dark: '#B8941F'
				},
				navy: {
					DEFAULT: '#0B1426',
					light: '#1A2332',
					dark: '#070D1A'
				},
				// Social media brand colors
				instagram: '#E4405F',
				facebook: '#1877F2',
				linkedin: '#0A66C2',
				twitter: '#1DA1F2'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'smooth-fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'elegant-scale': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'subtle-slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(15px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'gentle-float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-8px)'
					}
				},
				'premium-bounce': {
					'0%, 20%, 53%, 80%, 100%': {
						transform: 'translate3d(0,0,0)'
					},
					'40%, 43%': {
						transform: 'translate3d(0, -15px, 0)'
					},
					'70%': {
						transform: 'translate3d(0, -7px, 0)'
					},
					'90%': {
						transform: 'translate3d(0, -2px, 0)'
					}
				},
				'animate-pulse-subtle': {
					'0%, 100%': {
						opacity: '1',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.9',
						transform: 'scale(1.02)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'smooth-fade-in': 'smooth-fade-in 0.6s ease-out',
				'elegant-scale': 'elegant-scale 0.5s ease-out',
				'subtle-slide-up': 'subtle-slide-up 0.4s ease-out',
				'gentle-float': 'gentle-float 4s ease-in-out infinite',
				'premium-bounce': 'premium-bounce 1s ease-in-out',
				'pulse-subtle': 'animate-pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F4E68B 100%)',
				'navy-gradient': 'linear-gradient(135deg, #0B1426 0%, #1A2332 100%)',
				'premium-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F4E68B 50%, #FFD700 100%)'
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem'
			},
			backdropBlur: {
				xs: '2px',
			},
			boxShadow: {
				'premium': '0 25px 50px -12px rgba(212, 175, 55, 0.25)',
				'premium-lg': '0 35px 60px -12px rgba(212, 175, 55, 0.35)',
				'glow': '0 0 20px rgba(212, 175, 55, 0.5)',
				'glow-lg': '0 0 40px rgba(212, 175, 55, 0.6)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
