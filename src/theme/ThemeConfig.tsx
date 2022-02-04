import React, { createContext, FC, useEffect, useMemo, useState } from "react";
import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  responsiveFontSizes,
  ThemeProvider,
  PaletteMode,
} from "@mui/material";
import { globalStyles } from "./globalStyles";
import { lightPalette, darkPalette } from "./palette";

const FONT_FAMILY = '"Lato", sans-serif';

const typography = {
  fontFamily: FONT_FAMILY,
};

interface IColorModeContext {
  toggleColorMode: () => void;
}
interface IThemeConfig {
  children: React.ReactNode;
}

export const ColorModeContext = createContext<IColorModeContext>({
  toggleColorMode: () => {},
});

export const ThemeConfig: FC<IThemeConfig> = ({ children }) => {
  const [mode, setmode] = useState<PaletteMode>("light");

  const toggleColorMode = useMemo(
    () => () => {
      setmode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    },
    []
  );

  let theme = useMemo(() => {
    return responsiveFontSizes(
      createTheme({
        palette: {
          mode: mode ?? "light",
          ...(mode === "light" ? lightPalette : darkPalette),
        },
        typography,
        components: {
          MuiCssBaseline: {
            styleOverrides: `
              * {
                transition: background-color 500ms;
              }
            `,
          },
        },
      })
    );
  }, [mode]);

  useEffect(() => {
    if (!localStorage.getItem("themeMode")) {
      localStorage.setItem("themeMode", "light");
    } else {
      setmode((localStorage.getItem("themeMode") as PaletteMode) ?? "light");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={(theme) => globalStyles(theme)} />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
