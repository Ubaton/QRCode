/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: "Nunito",
    },
    extend: {
      colors: {
        DarkMode: {
          background: "#00111C",
          cards: "#001523",
          border: "#001A2C",
          footer: "#002137",
          text: "#00253E",
          border2: "#002945",
          hyerperlink: "#002E4E",
          radio: "#003356",
          buttons: "#003A61",
          btext: "#00406C",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // ...
  ],
};
