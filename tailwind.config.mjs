/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'pf-bg': '#F0EBE3',
        'pf-text': '#1A1A1A',
        'pf-accent': '#7A6C5D',
        'pf-accent-light': '#9B8E7E',
        'pf-muted': '#B8B2A8',
        'pf-border': '#E5E2DC',
        'pf-surface': '#F0EDE8',
        // category accents
        'whisky': '#C9A96B',
        'cigar': '#8B6347',
        'espresso': '#6B4226',
        'places': '#7A6C5D',
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        brutal: '-0.04em',
        'tight-brutal': '-0.02em',
      },
      lineHeight: {
        brutal: '0.9',
        'tight-display': '0.95',
        display: '1.05',
      },
    },
  },
  plugins: [],
};
