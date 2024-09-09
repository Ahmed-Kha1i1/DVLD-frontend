/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F65DF",
        secondary: "#4F89DF",
        mainColor: "#F6F7FB",
        sectionColor: "#FFFFFF",
        HeaderColor: "#EFF2FF",
        onColor: "#4CDA64",
        Lightgray: "#B6B6B6",
        Darkgray: "#797979",
        TextColor: "#1f2937"
      }
    }
  },
  plugins: []
};
