/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lmain: "#F0F0F0",
        lbutton: "#F95738",
        dmain: "#C83209",
        dbutton: "#455A6E",
      },
      fontFamily: {
        menu: "Roboto Slab",
        forum: ["Forum", "cursive"],
      },
      backgroundImage: {
        menu: "url('../assets/images/background_test.jpg')",
        header: "url('../assets/images/header-background.jpg')",
      },
    },
  },
  plugins: [],
};
