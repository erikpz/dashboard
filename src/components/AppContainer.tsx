import React, { useState } from "react";
import { Box, Drawer, IconButton, styled } from "@mui/material";
import { DisplaySettings } from "@mui/icons-material";

const RootStyle = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  minHeight: "100%",
  position: "relative",
}));
const ButtonStyle = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  right: 0,
  top: "50%",
  boxShadow: theme.shadows[12],
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
      <Drawer anchor="right" open={open} onClose={handleClose}>
        Drawer
      </Drawer>
      {children}
    </RootStyle>
  );
};
