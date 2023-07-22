/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBrightness: {
        25: ".25",
        175: "1.75",
      },
    },
    fontFamily: {
      twit: ["Blackout"],
      twitnor: ["Blackin"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};

