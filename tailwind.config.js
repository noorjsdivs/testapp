/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffcf6d",
      },
      fontFamily: {
        bodyFont: "Poppins",
        titleFont: "Inter",
      },
      borderWidth: {
        2: "1px",
      },
    },
  },
  plugins: [],
};
