import React, { useState } from "react";
import { Box, IconButton, styled } from "@mui/material";
import { DisplaySettings } from "@mui/icons-material";
import { SettingsDrawer } from "./SettingsDrawer";

const RootStyle = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  minHeight: "100%",
  position: "relative",
}));
const ButtonStyle = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  right: 0,
  top: "20%",
  backgroundColor: theme.palette.background.default,
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
