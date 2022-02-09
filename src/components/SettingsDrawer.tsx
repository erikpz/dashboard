import React, { FC } from "react";
import { Drawer, styled } from "@mui/material";

interface SettingsDrawerProps {
  open: boolean;
  onClose: () => void;
}

const DrawerStyles = styled(Drawer)(({ theme }) => ({
  "& .MuiBackdrop-root": {
    backgroundColor: "transparent",
  },

  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.background.neutral,
    opacity: 1,
    margin: 20,
    height: "calc(100% - 40px)",
    borderRadius: theme.shape.borderRadiusMd,
  },
}));

export const SettingsDrawer: FC<SettingsDrawerProps> = (props) => {
  const { open, onClose } = props;
  return (
    <DrawerStyles anchor="right" open={open} onClose={onClose} elevation={8}>
      Drwr
    </DrawerStyles>
  );
};
