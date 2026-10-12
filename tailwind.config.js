/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#17221d',
        sage: '#d9f5e6',
        electric: '#b9f552',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(23, 34, 29, 0.10)',
      },
    },
  },
  plugins: [],
}
