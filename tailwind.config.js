/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Peach-Puff": "#F6CDB0",
        "Dark-Brown": "#211313",
        "Light-Gray": "#e0e0e0",
        "Medium-Gray": "#828282",
        "Charcoal-Gray": "#2C2C2C",
      },
      screens: {
        mobile: { min: "344px", max: "639px" }, // Max mobile (screens smaller than 640px)
        tablet: { min: "640px", max: "1024px" }, // Tablet (screens 640px and above)
        smallLaptop: { min: "1025px", max: "1400px" },
      },
    },
  },
  plugins: [],
};
