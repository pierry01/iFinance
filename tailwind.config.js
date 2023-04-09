const forms = require("@tailwindcss/forms");
const typography = require("@tailwindcss/typography");

module.exports = {
  content: ["./app/**/*.{html,js,jsx,css,scss,erb}"],
  plugins: [forms, typography],
};
