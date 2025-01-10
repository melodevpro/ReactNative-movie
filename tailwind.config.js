/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-extrabold": ["Rubik-ExtraBold", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-semibold": ["Rubik-SemiBold", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
      },
      colors: {
        "primary": {
          100: "#191D31",
          200: "#0061FF0A",
          300: "#0061FF1A",
        },
        accent: {
          100: "#FBFBFB",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8c8e98",
          200: "666876",
          300: "#191d31",
        },
        danger: "#F75555",
      }
    },
  },
  plugins: [],
}
