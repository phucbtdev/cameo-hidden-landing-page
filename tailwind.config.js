// tailwind.config.js (hoặc tailwind.config.mjs)
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'], // Dùng font-sans của Tailwind sẽ là Quicksand
      },
    },
  },
}
