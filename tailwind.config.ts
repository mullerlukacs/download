import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { 50: "#eff6ff", 500: "#2563eb", 600: "#1d4ed8", 900: "#1e3a8a" }
      },
      boxShadow: { glow: "0 24px 80px rgba(37, 99, 235, 0.22)" }
    }
  },
  plugins: []
};
export default config;
