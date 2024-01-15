/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#edbd3d",
        secondary: "#728ad3",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};

