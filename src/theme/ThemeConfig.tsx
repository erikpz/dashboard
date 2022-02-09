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
import { componentsOverride } from "./overrides";

declare module "@mui/material/styles" {
  interface Theme {
    customShadows: any;
    shape: any;
  }
  interface ThemeOptions {
    customShadows?: any;
    shape?: any;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    neutral: string;
  }
  interface Palette {
    gradients: {
      primary: string;
      success: string;
      info: string;
      warning: string;
      error: string;
    };
  }
  interface PaletteOptions {
    gradients?: {
      primary?: string;
      success?: string;
      info?: string;
      warning?: string;
      error?: string;
    };
  }
}

interface IColorModeContext {
  toggleColorMode: () => void;
  setColorMode: (mode: PaletteMode) => void;
}
interface IThemeConfig {
  children: React.ReactNode;
}

export const ColorModeContext = createContext<IColorModeContext>({
  toggleColorMode: () => {},
  setColorMode: () => {},
});

export const ThemeConfig: FC<IThemeConfig> = ({ children }) => {
  const [mode, setmode] = useState<PaletteMode>("light");

  const toggleColorMode = useMemo(
    () => () => {
      setmode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    },
    []
  );

  const setColorMode = useMemo(
    () => (mode: PaletteMode) => {
      setmode(mode);
    },
    []
  );

  const themeOptions = useMemo(
    () => ({
      palette: {
        ...(mode === "light" ? lightPalette : darkPalette),
      },
      typography,
      shape,
      shadows,
      customShadows,
    }),
    [mode]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

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
      <ColorModeContext.Provider value={{ toggleColorMode, setColorMode }}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </StyledEngineProvider>
  );
};
