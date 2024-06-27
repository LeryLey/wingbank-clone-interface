/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "670px",
      md: "840px",
      lg: "1050px",
      xl: "1280px",
    },
    colors: {
      main: "#a9cf38",
      light: "#eef5d7",
      blue: "#07f",
      blueGray: "#a7cbfe",
      white: "#fff",
      black: "#000",
      transparent: "transparent",
      red: {
        500: "#ef4444",
      },
      gray: {
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
      },
    },
    extend: {},
  },
  plugins: [],
};
