// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg-main)',
        card: 'var(--bg-card)',
        accent: 'var(--accent)',
      },
    }
  },
  plugins: [],
}
