/** @type {import('tailwindcss').Config} */
import { placeholder } from './node_modules/@babel/types/lib/index-legacy.d';

module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      accent: "#f59e42",
      black: "#000000",
      gray: "#2a2c33",
      link: "##007acc",
      placeholder: "#A0A0A0",
      primary: "#101633",
      transparent: "transparent",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        nunito: ["NunitoSans_400Regular"],
        "nunito-bold": ["NunitoSans_700Bold"],
      },
    },
  },
  plugins: [],
}