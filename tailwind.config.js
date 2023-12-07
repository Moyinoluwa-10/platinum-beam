/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#edbd3d",
        secondary: "#344169",
      },
      fontFamily: {
        lato: "Lato, sans-serif",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};

