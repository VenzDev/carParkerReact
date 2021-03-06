import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  color: {
    blueDark: "#0080ff",
    blueLight: "#00d3ff",
    lightAqua: "#edf7ff",
    white: "white",
    warning: "#ffc800",
    error: "#d60000",
    darkError: "#ab0000",
  },
  gradient: {
    toBottom: "linear-gradient(to bottom, #0080ff, #0098ff, #00aeff, #00c1ff, #00d3ff)",
    toRight: "linear-gradient(to right, #0080ff, #0098ff, #00aeff, #00c1ff, #00d3ff)",
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
