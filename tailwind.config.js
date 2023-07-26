/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: "Nunito",
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"),
    // ...
  ],
};
