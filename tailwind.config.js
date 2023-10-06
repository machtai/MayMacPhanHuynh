const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#191717",
        headingColor: "#081e21",
        smarllTextColor: "#193256",
        textStrongColor:"#18519B"
      }
    },
  },
  plugins: [],
});
