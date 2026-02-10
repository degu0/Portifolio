export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        floatSlow: "float 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
