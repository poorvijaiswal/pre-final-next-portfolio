import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)']
      },
      colors: {
        color:
        {
          "dark-layer-1": "rgb(40,40,40)",
          "dark-layer-2": "rgb(26,26,26)",
          "dark-label-2": "rgba(239, 241, 246, 0.75)",
          "dark-divider-border-2": "rgb(61, 61, 61)",
          "dark-fill-2": "hsla(0,0%,100%,.14)",
          "dark-fill-3": "hsla(0,0%,100%,.1)",
          "dark-gray-6": "rgb(138, 138, 138)",
          "dark-gray-7": "rgb(179, 179, 179)",
          "gray-8": "rgb(38, 38, 38)",
          "dark-gray-8": "rgb(219, 219, 219)",
          "brand-orange": "rgb(255 161 22)",
          "brand-orange-s": "rgb(193, 122, 15)",
          "dark-yellow": "rgb(255 192 30)",
          "dark-pink": "rgb(255 55 95)",
          "olive": "rgb(0, 184, 163)",
          "dark-green-s": "rgb(44 187 93)",
          "dark-blue-s": "rgb(10 132 255)",
        },
        sidebar: {
          "active": "#6b32ec",
          "background": "#f5f5ff",
          "iconColor": "#636c80",
        },
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
      },
      boxShadow: {
        'glass-inset': 'inset 0 17px 5px -9px rgba(254,254,91,0.05)',
        'glass-sm': '2px 0px 5px 2px rgba(254,254,91,0.3)'
      },
      backgroundImage: {
        'firefly-radial': "radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217,217,217, 0) 100%)"
      },


      keyframes: {
        'spin-reverse': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(-360deg)'
          }
        }
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite'
      }
    },
  },
  plugins: [],
};
export default config;
