/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        valentine: {
          // Primary pinks
          'pink-light': '#fce7f3',
          'pink': '#f9a8d4',
          'pink-dark': '#ec4899',
          // Romantic reds
          'red-light': '#fecaca',
          'red': '#ef4444',
          'red-dark': '#b91c1c',
          // Rose shades
          'rose-light': '#ffe4e6',
          'rose': '#f43f5e',
          'rose-dark': '#be123c',
          // Warm neutrals
          'cream': '#fef7f0',
          'blush': '#fff1f2',
          'warm-white': '#fffbf9',
          // Accent colors
          'gold': '#d97706',
          'burgundy': '#881337',
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'valentine-gradient': 'linear-gradient(135deg, #fce7f3 0%, #ffe4e6 50%, #fff1f2 100%)',
        'love-gradient': 'linear-gradient(180deg, #f9a8d4 0%, #f43f5e 100%)',
        'heart-pattern': "url('/assets/heart-pattern.svg')",
      },
      boxShadow: {
        'valentine': '0 4px 14px 0 rgba(244, 63, 94, 0.25)',
        'valentine-lg': '0 10px 40px 0 rgba(244, 63, 94, 0.3)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-heart': 'pulse-heart 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-heart': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        }
      }
    },
  },
  plugins: [],
};
