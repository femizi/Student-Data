module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:
      {
        '20/80': '20% 80%',
        '40/60': '40% 60%',
      }
    },
  },
  plugins: [],
}
