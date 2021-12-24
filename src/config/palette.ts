import { PaletteColorOptions, PaletteOptions } from "@mui/material";

// Defined palette: https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=102f41&secondary.color=FFC107

const primary: PaletteColorOptions = {
    main: "#102f41",
    light:"#3c586c",
    dark:"#00051b",
    contrastText: "#ffffff"
};

const secondary: PaletteColorOptions = {
    main: "#ffc107",
    light:"#fff350",
    dark:"#c79100",
    contrastText: "#000000"
};

export const paletteOptions: PaletteOptions = {
    primary,
    secondary,
    background: {default: primary.dark}
}
