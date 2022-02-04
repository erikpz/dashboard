import React, { createContext, FC, useEffect, useMemo, useState } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  PaletteMode,
  StyledEngineProvider,
} from "@mui/material";
import { GlobalStyles } from "./GlobalStyles";
import { lightPalette, darkPalette } from "./palette";
import { typography } from "./typography";
import shape from "./shape";
import shadows, { customShadows } from "./shadows";

declare module "@mui/material/styles" {
  interface ThemeOptions {
    customShadows?: any;
  }
}

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
    return createTheme({
      palette: {
        mode: mode ?? "light",
        ...(mode === "light" ? lightPalette : darkPalette),
      },
      typography,
      shape,
      shadows,
      customShadows,
      components: {
        /*  MuiCssBaseline: {
          styleOverrides: `
              * {
                transition: background-color 100ms;
              }
            `,
        }, */
      },
    });
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
    <StyledEngineProvider injectFirst>
      <ColorModeContext.Provider value={{ toggleColorMode }}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </StyledEngineProvider>
  );
};
