/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sora_Regular: ["Sora_400Regular"],
        Sora_SemiBold: ["Sora_600SemiBold"],
      },
    },
    colors: {
      primary: "#7B22D3",
      dark: "#313131",
      light: "#FFFFFF",
      "light-secondary": "#F9F9F9",
      "light-gray": "#9B9B9B",
    },
  },
  plugins: [],
};
