import React, { createContext, FC, useEffect, useMemo, useState } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  PaletteMode,
  StyledEngineProvider,
} from "@mui/material";
import { GlobalStyles } from "./GlobalStyles";
import { createPalette } from "./palette";
import { typography } from "./typography";
import shape from "./shape";
import { createCustomShadows, createShadows } from "./shadows";
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

export type TypeColorMode =
  | "green"
  | "purple"
  | "lightblue"
  | "darkblue"
  | "orange"
  | "red";

interface IThemeModeContext {
  color: TypeColorMode;
  toggleThemeMode: () => void;
  setThemeMode: (mode: PaletteMode) => void;
  setColorMode: (color: TypeColorMode) => void;
  resetTheme: () => void;
}
interface IThemeConfig {
  children: React.ReactNode;
}

export const ThemeModeContext = createContext<IThemeModeContext>({
  color: "lightblue",
  toggleThemeMode: () => {},
  setThemeMode: () => {},
  setColorMode: () => {},
  resetTheme: () => {},
});

export const ThemeConfig: FC<IThemeConfig> = ({ children }) => {
  const [mode, setmode] = useState<PaletteMode>("light");
  const [color, setcolor] = useState<TypeColorMode>("lightblue");

  const toggleThemeMode = useMemo(
    () => () => {
      setmode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    },
    []
  );

  const setThemeMode = useMemo(
    () => (mode: PaletteMode) => {
      setmode(mode);
    },
    []
  );

  const setColorMode = useMemo(
    () => (color: TypeColorMode) => {
      setcolor(color);
    },
    []
  );

  const resetTheme = useMemo(
    () => () => {
      setcolor("lightblue");
      setmode("light");
    },
    []
  );

  const themeOptions = useMemo(
    () => ({
      palette: createPalette(color, mode),
      typography,
      shape,
      customShadows: {},
    }),
    [mode, color]
  );

  const theme: any = createTheme(themeOptions);
  theme.shadows = createShadows(theme);
  theme.customShadows = createCustomShadows(theme);
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
      <ThemeModeContext.Provider
        value={{
          toggleThemeMode,
          setThemeMode,
          setColorMode,
          color,
          resetTheme,
        }}
      >
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </StyledEngineProvider>
  );
};
