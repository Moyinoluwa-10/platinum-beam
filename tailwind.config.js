/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#edbd3d",
        secondary: "#728ad3",
        tertiary: "#344169",
      },
      container: {
        center: true,
      },
      fontFamily: {
        "pt-bold": "PT Sans Bold, sans-serif",
      },
    },
  },
  plugins: [],
};
