/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#060e1a",
        surf: "#0b1628",
        card: "#0d1e3a",
        blue: {
          DEFAULT: "#1a6cde",
          l: "#3d8ef5"
        },
        red: {
          DEFAULT: "#c0182a",
          l: "#e8192f"
        },
        ora: "#f26522",
        t1: "rgba(255, 255, 255, 0.62)",
        t2: "rgba(255, 255, 255, 0.30)",
        div: "rgba(255, 255, 255, 0.07)",
        "div-b": "rgba(29, 108, 222, 0.2)"
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mono: ["DM Mono", "monospace"]
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
