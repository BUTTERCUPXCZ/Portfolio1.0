/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['Archivo', 'sans-serif'],
      },
      colors: {
        paper: '#F2EEE3',
        ink: '#1C1A15',
        accent: '#E04E0F',
        muted: '#564F3E',
        line: 'rgba(28, 26, 21, 0.25)',
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
}
