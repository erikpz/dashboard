import { Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React, { useContext } from "react";
import { ColorModeContext } from "../../theme/ThemeConfig";

export const SignInPage = () => {
  const theme = useTheme();
  const mod = useContext(ColorModeContext)
  const handleClick = async () => {
    const res = await fetch(
      "https://notes-api-gamma.vercel.app/api/auth/login",
      {
        method: "POST",
      }
    );
    const resjson = await res.json();
    console.log(res);
    console.log(resjson);
  };

  console.log(theme);

  return (
    <Box
      sx={(theme: any) => ({
        backgroundImage: theme.palette.gradients.primary,
      })}
    >
      <button onClick={handleClick}>Fetch</button>
      <button onClick={()=>mod.toggleColorMode()}>theme</button>
    </Box>
  );
};
