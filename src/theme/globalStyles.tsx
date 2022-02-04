import { alpha } from "@mui/system";
import { GlobalStyles as GlobalStylesExtended, useTheme } from "@mui/material";

export const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <GlobalStylesExtended
      styles={{
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          width: "100%",
          height: "100%",
          MozTextSizeAdjust: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          width: "100%",
          height: "100%",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            width: 8,
            height: 6,
            backgroundColor: theme.palette.divider,
          },
          "&::-webkit-scrollbar-thumb, & ::-webkit-scrollbar-thumb": {
            border: "none",
            borderRadius: 8,
            backgroundColor: alpha(theme.palette.grey[600], 0.48),
          },
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        textarea: {
          "&::-webkit-input-placeholder": {
            color: theme.palette.text.disabled,
          },
          "&::-moz-placeholder": {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
          "&:-ms-input-placeholder": { color: theme.palette.text.disabled },
          "&::placeholder": { color: theme.palette.text.disabled },
        },
        a: {
          color: theme.palette.primary.main,
        },
        img: {
          display: "block",
          maxWidth: "100%",
        },

        // Lazy Load Img
        ".blur-up": {
          WebkitFilter: "blur(5px)",
          filter: "blur(5px)",
          transition: "filter 400ms, -webkit-filter 400ms",
        },
        ".blur-up.lazyloaded ": {
          WebkitFilter: "blur(0)",
          filter: "blur(0)",
        },
      }}
    />
  );
};
