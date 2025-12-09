import { StyleSheet } from "react-native";

export const lightColorPalette = {
  primary: "#80A1BA",
  secondary: "#91C4C3",
  background: "#FFF7DD",
  text: "#333333",
  border: "#ffffff",
  accent: "#134686",
  lightGray: "#d3d3d3",
  darkGray: "#7f8c8d",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightColorPalette.background,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    width: "100%",
    alignItems: "center",
    height: "85%",
    paddingTop: 15,
  },
});
