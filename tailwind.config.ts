import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation:{
        'spin-slow': 'spin 7s linear infinite'
      },
      colors: {
        gold: "#FFD700",
        brown: "#714C32",
        carbon: "#1C1C1C",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        handlee: ["var(--font-handlee)"],
      },
    },
  },
  plugins: [],
};
export default config;
