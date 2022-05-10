import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
        primary: "#3be6b8",
        secondary: "#247a9c",
        alert: "#cf4747",
        dark: "#36313D",
        light: "#e8e8e8"
    },
    fonts: ["Segoe UI", "Tahoma", "sans-serif"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
});
  

export default theme;
  