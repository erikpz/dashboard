import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import { DisplaySettings } from "@mui/icons-material";
import { SettingsDrawer } from "./SettingsDrawer";

const RootStyle = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  minHeight: "100%",
  position: "relative",
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
  position: "fixed",
  width: 50,
  minWidth: 50,
  height: 50,
  borderRadius: "50%",
  right: 0,
  top: "20%",
  zIndex: 1000,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.disabled,
  "& svg": {
    transition: "transform 500ms ease",
  },
  "&:hover": {
    color: theme.palette.primary.main,
    "& svg": {
      transform: "scale(1.2)",
    },
  },
}));

export const AppContainer = ({ children }: any) => {
  const [open, setopen] = useState(false);
  const handleOpen = () => setopen(true);
  const handleClose = () => setopen(false);
  return (
    <RootStyle>
      <ButtonStyle onClick={handleOpen}>
        <DisplaySettings />
      </ButtonStyle>
      <SettingsDrawer open={open} onClose={handleClose} />
      {children}
    </RootStyle>
  );
};
