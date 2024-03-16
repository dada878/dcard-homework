import type { Config } from "tailwindcss";

const config: Config = {
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
    },
    backgroundColor: {
      "primary": "#3f3cbb",
      "middle": "#1F305B",
      "secondary": "#152140",
      "secondary-hover": "#1e2c4f",
      "light": "#31416A",
      "white": "#ffffff",
      "green": "#316A4F",
      "green-hover": "#467c64",
      "blue": "#31416A",
      "blue-hover": "#3c4f7e",
      "red": "#5C2F2F",
      "red-hover": "#703d3d",
      "gray": "#6C7693",
    },
    textColor: {
      "primary": "#ffffff",
      "secondary": "#BBBBBB",
      "secondary-dark" : "#6C7693",
      "hover": "#3f3cbb",
    },
    borderColor: {
      "primary": "#ffffff",
      "secondary": "#BBBBBB",
      "transparent": "transparent"
    }
  },
  plugins: [],
};
export default config;
