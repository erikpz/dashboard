import { alpha, PaletteMode } from "@mui/material";
import { TypeColorMode } from "./ThemeConfig";

const createGradient = (color1: string, color2: string) => {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
};

const PRIMARY_GREEN = {
  lighter: "#C8FACD",
  light: "#5BE584",
  main: "#00AB55",
  dark: "#007B55",
  darker: "#005249",
  contrastText: "#fff",
};

const PRIMARY_LIGHTBLUE = {
  lighter: "#D1FFFC",
  light: "#76F2FF",
  main: "#1CCAFF",
  dark: "#0E77B7",
  darker: "#053D7A",
  contrastText: "#fff",
};

const PRIMARY_DARKBLUE = {
  lighter: "#D1E9FC",
  light: "#76B0F1",
  main: "#2065D1",
  dark: "#103996",
  darker: "#061B64",
  contrastText: "#fff",
};

const PRIMARY_PURPLE = {
  lighter: "#EBD6FD",
  light: "#B985F4",
  main: "#7635dc",
  dark: "#431A9E",
  darker: "#200A69",
  contrastText: "#fff",
};

const PRIMARY_RED = {
  lighter: "#FFE3D5",
  light: "#FFC1AC",
  main: "#FF3030",
  dark: "#B71833",
  darker: "#7A0930",
  contrastText: "#fff",
};

const PRIMARY_ORANGE = {
  lighter: "#FEF4D4",
  light: "#FED680",
  main: "#fda92d",
  dark: "#B66816",
  darker: "#793908",
  contrastText: "#fff",
};

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  400_50: alpha("#C4CDD5", 0.5),
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
  800_80: alpha("#212B36", 0.8),
};

const SECONDARY = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#3366FF",
  dark: "#1939B7",
  darker: "#091A7A",
  contrastText: "#fff",
};

const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: GREY[800],
};

const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const GRADIENTS = {
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

export const paletteBase = {
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  divider: GREY[500_24],
};

export const lightPalette = {
  mode: "light" as PaletteMode,
  common: { black: "#000", white: "#fff" },
  text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
  background: { paper: "#fff", default: "#fff", neutral: GREY[400_50] },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export const darkPalette = {
  mode: "dark" as PaletteMode,
  common: { black: "#000", white: "#fff" },
  text: { primary: "#fff", secondary: GREY[500], disabled: GREY[600] },
  background: { paper: GREY[800], default: GREY[900], neutral: GREY[800_80] },
  action: {
    active: GREY[500],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const createPrimaryColors = (color: TypeColorMode) => {
  switch (color) {
    case "green":
      return PRIMARY_GREEN;
    case "lightblue":
      return PRIMARY_LIGHTBLUE;
    case "orange":
      return PRIMARY_ORANGE;
    case "purple":
      return PRIMARY_PURPLE;
    case "darkblue":
      return PRIMARY_DARKBLUE;
    case "red":
      return PRIMARY_RED;
    default:
      return PRIMARY_LIGHTBLUE;
  }
};

export const createPalette = (color: TypeColorMode, themeMode: PaletteMode) => {
  const primary = createPrimaryColors(color);
  return {
    primary,
    ...paletteBase,
    ...(themeMode === "light" ? lightPalette : darkPalette),
    gradients: {
      primary: createGradient(primary.light, primary.main),
      ...GRADIENTS,
    },
  };
};
