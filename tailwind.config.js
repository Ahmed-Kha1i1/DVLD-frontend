/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" }, // max-width 1535px
      xl: { max: "1279px" }, // max-width 1279px
      lg: { max: "1023px" }, // max-width 1023px
      md: { max: "767px" }, // max-width 767px
      sm: { max: "639px" }, // max-width 639px
      xs: { max: "479px" }, // max-width 639px
    },
    extend: {
      colors: {
        primary: "#4F65DF",
        secondary: "#4F89DF",
        mainColor: "#F6F7FB",
        sectionColor: "#FFFFFF",
        HeaderColor: "#E6ECFF",
        onColor: "#4CDA64",
        Lightgray: "#B6B6B6",
        Darkgray: "#797979",
        TextColor: "#1f2937",
      },
      fontFamily: {
        Cairo: "Cairo, sans-serif",
      },
      boxShadow: {
        "custom-blue": "1px 2px 7px 0px rgba(31,116,254,0.75)",
        "custom-gray": "1px 2px 7px 0px rgb(121 85 72 / 16%)",
      },
      gridTemplateColumns: {
        "auto-fill-min-1fr-350": "1fr repeat(auto-fill, minmax(350px, 1fr))",
        "auto-fill-min-1fr-180": "repeat(auto-fill, minmax(180px, 1fr))",
      },
    },
  },
  plugins: [],
};
