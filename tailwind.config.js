/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Peach-Puff": "#F6CDB0",
        "Dark-Brown": "#211313",
      },
      screens: {
        mobile: { max: "639px" }, // Max mobile (screens smaller than 640px)
        tablet: { min: "640px", max: "1024px" }, // Tablet (screens 640px and above)
      },
    },
  },
  plugins: [],
};
