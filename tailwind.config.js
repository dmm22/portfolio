/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#282c34",
        "secondary-bg": "#20252B",
        "primary-text": "#abb2bf",
        notification: "#3579CC",
        "secondary-text": "#818896",
        highlight: "#2a313a",
        selected: "#303842",
      },
    },
  },
  plugins: [],
}
