/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "4F65DF",
        secondary: "4F89DF",
        mainColor: "F6F7FB",
        sectionColor: "FFFFFF",
        HeadTextColor: "B6B6B6",
        TextColor: "797979",
        HeaderColor: "EFF2FF",
        onColor: "4CDA64"
      }
    }
  },
  plugins: []
};
