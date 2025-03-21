import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "border-spin": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        "bounce-high": {
          "0%": {
            transform: "translateY(-75%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(75%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
          "100%": {
            transform: "translateY(-75%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
      }
      },
      boxShadow: {
        "3d": "2px 2px 0 0 var(--tw-shadow-color)",
      },
      backgroundImage: {
        avatar: "url('/file.png')",
      },
      animation: {
        "bounce-high": "bounce-high 1s infinite",
        "spin-slow": "spin 7s linear infinite",
        "border-spin":"border-spin 7s linear infinite"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
      },
    },
  },
  plugins: [],
};
export default config;
