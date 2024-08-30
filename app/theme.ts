import { createTheme, MantineColorsTuple } from "@mantine/core";

const getToupleColor = (color: string): MantineColorsTuple =>
  Array(10).fill(color) as [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];

export const nordTheme = createTheme({
  //   colorScheme: "dark",
  colors: {
    nord: [
      "#2E3440",
      "#3B4252",
      "#434C5E",
      "#4C566A",
      "#D8DEE9",
      "#E5E9F0",
      "#ECEFF4",
      "#8FBCBB",
      "#88C0D0",
      "#81A1C1",
      "#5E81AC",
      "#BF616A",
      "#D08770",
      "#EBCB8B",
      "#A3BE8C",
      "#B48EAD",
    ],
    nordPrimary: getToupleColor("#5E81AC"),
    nord0: getToupleColor("#2E3440"),
    nord1: getToupleColor("#3B4252"),
    nord2: getToupleColor("#434C5E"),
    nord3: getToupleColor("#4C566A"),
    nord4: getToupleColor("#D8DEE9"),
    nord5: getToupleColor("#E5E9F0"),
    nord6: getToupleColor("#ECEFF4"),
    nord7: getToupleColor("#8FBCBB"),
    nord8: getToupleColor("#88C0D0"),
    nord9: getToupleColor("#81A1C1"),
    nord10: getToupleColor("#5E81AC"),
    nord11: getToupleColor("#BF616A"),
    nord12: getToupleColor("#D08770"),
    nord13: getToupleColor("#EBCB8B"),
    nord14: getToupleColor("#A3BE8C"),
    nord15: getToupleColor("#B48EAD"),
  }, // Usa el objeto transformado
  primaryColor: "nordPrimary",
  components: {
    Text: {
      defaultProps: {
        color: "nord2",
      },
    },
    Title: {
      defaultProps: {
        color: "nord0",
      },
    },
  },
  other: {
    bodyBackground: "#D8DEE9", // Aquí defines el color de fondo
  },
});
