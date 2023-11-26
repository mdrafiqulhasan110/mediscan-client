/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5cd6b2",
        secondary: "#323c4c",
      },
    },
  },
  plugins: [require("daisyui")],
};
