/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007bff", // Custom blue color
      },
      spacing: {
        "half-screen": "calc(50vh - 4rem)", // Custom spacing value
      },
    },
  },
  plugins: [],
};
