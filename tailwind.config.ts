
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
				vscode: {
					bg: '#1E1E1E',
					sidebar: '#252526',
					active: '#1c2130',
					hover: '#2A2D2E',
					blue: '#007ACC',
					lightBlue: '#4D4D4D',
					text: '#CCCCCC',
					comments: '#6A9955',
					variables: '#9CDCFE',
					strings: '#CE9178',
					functions: '#DCDCAA',
					keywords: '#569CD6',
					classes: '#4EC9B0',
					methods: '#DCDCAA',
					numbers: '#B5CEA8',
					operators: '#D4D4D4',
					parameters: '#9CDCFE',
					types: '#569CD6',
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
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
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
				typing: {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				blink: {
					'0%, 100%': { borderColor: 'transparent' },
					'50%': { borderColor: 'hsl(var(--primary))' }
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				shimmer: {
					'0%': { backgroundPosition: '-1000px 0' },
					'100%': { backgroundPosition: '1000px 0' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				ripple: {
					'0%': { transform: 'scale(0)', opacity: '1' },
					'100%': { transform: 'scale(4)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				typing: 'typing 3.5s steps(40, end), blink .75s step-end infinite',
				fadeIn: 'fadeIn 0.5s ease-out forwards',
				pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				shimmer: 'shimmer 2s linear infinite',
				float: 'float 3s ease-in-out infinite',
				ripple: 'ripple 1s linear'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-subtle': 'linear-gradient(to right, #1E1E1E, #252526, #1E1E1E)',
				'code-gradient': 'linear-gradient(60deg, rgba(36, 37, 47, 0.8) 0%, rgba(18, 20, 30, 0.8) 100%)',
			},
			boxShadow: {
				'vscode': '0 4px 14px 0 rgba(0, 0, 0, 0.25)',
				'vscode-sm': '0 2px 8px 0 rgba(0, 0, 0, 0.15)',
				'glow': '0 0 15px rgba(0, 122, 204, 0.5)',
			},
			textShadow: {
				'sm': '0 1px 2px rgba(0, 0, 0, 0.1)',
				'md': '0 2px 4px rgba(0, 0, 0, 0.12)',
				'lg': '0 8px 16px rgba(0, 0, 0, 0.15)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
