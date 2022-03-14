import { useEffect } from "react";
import nprogress from "nprogress";
import { useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";

export const useBarProgress = () => {
  const { pathname } = useLocation();
  const theme = useTheme();
  useEffect(() => {}, [theme.palette.primary.main]);
  useEffect(() => {
    const template = `<div class="bar" role="bar" style="background:${theme.palette.primary.main}"><div class="peg"></div></div>`;
    nprogress.configure({
      template,
    });
    nprogress.start();
     nprogress.done();
  }, [pathname, theme]);
};
