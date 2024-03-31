import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "screen-inner": "calc(100vh - 5rem)",
      },
      colors: {
        "green": "#316A4F",
        "green-hover": "#467c64",
        "red": "#5C2F2F",
        "red-hover": "#703d3d",
        "gray": "#6C7693",
        "mirage": {
          "100": "#b6dcf9",
          "200": "#87C6FF",
          "300": "#72bbff",
          "400": "#5eb0fd",
          "500": "#4eaaff",
          "600": "#405079",
          "700": "#31416A",
          "800": "#1F305B",
          "900": "#152140",
          "1000": "#0C1222",
        },
      },
      textColor: {
        "primary": "#ffffff",
        "secondary": "#BBBBBB",
        "secondary-light": "#585858",
        "secondary-dark": "#6C7693",
        "hover": "#3f3cbb",
      },
    },
    borderColor: {
      "primary": "#ffffff",
      "secondary": "#BBBBBB",
      "transparent": "transparent",
      "secondary-light": "#585858",
      "black": "#000000",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
