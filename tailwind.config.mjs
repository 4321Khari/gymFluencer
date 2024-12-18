/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Orbitron", "sans-serif"], // Set Orbitron as the default sans font
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-70% - 20px))" },
        },
        "reverse-infinite-scroll": {
          "0%": { transform: "translateX(-100%)" }, // Start from left
          "100%": { transform: "translateX(calc(10% - 20px))" }, // End towards right
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
        "reverse-infinite-scroll":
          "reverse-infinite-scroll 20s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
