/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        baseViolet: "#8E6CEF",
        baseGray: {
          light: "#F4F4F4",
          dark: "#8E8E8E",
          tabs: "#939393",
        },
        baseBlack: "#272727",
        baseRed: "#FA3636",
        baseYellow: "#FFB632",
      },
      fontFamily: {
        PoppinsBlack: ["Poppins-Black", "sans-serif"],
        PoppinsBold: ["Poppins-Bold", "sans-serif"],
        PoppinsExtraBold: ["Poppins-ExtraBold", "sans-serif"],
        PoppinsExtraLight: ["Poppins-ExtraLight", "sans-serif"],
        PoppinsLight: ["Poppins-Light", "sans-serif"],
        PoppinsMedium: ["Poppins-Medium", "sans-serif"],
        PoppinsRegular: ["Poppins-Regular", "sans-serif"],
        PoppinsSemiBold: ["Poppins-SemiBold", "sans-serif"],
        PoppinsThin: ["Poppins-Thin", "sans-serif"],
        badScript: ["BadScript-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
