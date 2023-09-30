const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4D7B97",
        buttonColor: "#24A0ED",
        "buttonColor-hover": "#1A8CD3",
        "buttonColor-active": "#0F5F91",
        "button-laporan": "#F74119",
        "button-ditindaklanjuti": "#EBAE36",
        "button-selesai": "#2DC220",
        header0: "#0E0E0E",
        header1: "#202020",
        header2: "#2A2A2A",
        paragraf: "#4C4C4C",
        hint: "#757575",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
});
