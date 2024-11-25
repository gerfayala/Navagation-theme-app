/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        secondary: "#991B1B",
        tertiary: "#276749",
      },
      fontFamily: {
        "work-black": ["WorkSans-Black", "sans-serif"],
        "work-light": ["WorkSans-Light", "sans-serif"],
        "work-bold": ["WorkSans-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
