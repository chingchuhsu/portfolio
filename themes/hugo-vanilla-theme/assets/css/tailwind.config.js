const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      height: {
        gsxl: "840px",
        gslg: "696px",
        gsmd: "552px"
      }
    }
  },
  variants: {},
  plugins: []
}
