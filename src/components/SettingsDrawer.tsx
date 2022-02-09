import React, { FC, useContext } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import {
  SettingsBackupRestore,
  Close,
  DarkModeTwoTone,
  LightModeTwoTone,
} from "@mui/icons-material";
import { ColorModeContext } from "../theme/ThemeConfig";
import { useTheme } from "@emotion/react";

interface SettingsDrawerProps {
  open: boolean;
  onClose: () => void;
}

const DrawerStyles = styled(Drawer)(({ theme }) => ({
  "& .MuiBackdrop-root": {
    backgroundColor: "transparent",
  },

  "& .MuiDrawer-paper": {
    width: 260,
    backgroundColor: theme.palette.background.neutral,
    backdropFilter: "blur(5px)",
    margin: 20,
    height: "calc(100% - 40px)",
    borderRadius: theme.shape.borderRadiusMd,
  },
}));

const DrawerHeader = styled(Box)(({ theme }: any) => ({
  /*   backgroundColor: "tomato", */
  display: "flex",
  alignItems: "center",
  padding: "16px 8px 20px 20px",
  borderBottom: `1px dashed ${theme.palette.grey[500_24]}`,
}));

const DrawerBody = styled(Box)(({ theme }) => ({
  /*  backgroundColor: "lightblue", */
  width: "100%",
  padding: "24px",
}));

const DrawerButton = styled(Button)(({ theme }: any) => ({
  width: 95,
  height: 70,
  border: `1px solid ${theme.palette.grey[500_24]}`,
  borderRadius: "12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const SettingsDrawer: FC<SettingsDrawerProps> = (props) => {
  const { open, onClose } = props;
  const { setColorMode } = useContext(ColorModeContext);
  const theme: any = useTheme();
  console.log(theme);
  return (
    <DrawerStyles anchor="right" open={open} onClose={onClose} elevation={0}>
      <DrawerHeader>
        <Typography variant="body2">Ajustes</Typography>
        <IconButton sx={{ ml: "auto" }}>
          <SettingsBackupRestore
            sx={{ color: "text.primary" }}
            fontSize="small"
          />
        </IconButton>
        <IconButton onClick={onClose}>
          <Close sx={{ color: "text.primary" }} fontSize="small" />
        </IconButton>
      </DrawerHeader>
      <DrawerBody>
        <Typography variant="body2">Modo</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <DrawerButton onClick={() => setColorMode("dark")}>
            <DarkModeTwoTone
              sx={{ width: "28px", height: "28px" }}
              fontSize="medium"
              color={theme.palette.mode === "dark" ? "primary" : "disabled"}
            />
          </DrawerButton>
          <DrawerButton onClick={() => setColorMode("light")}>
            <LightModeTwoTone
              sx={{ width: "28px", height: "28px" }}
              color={theme.palette.mode === "light" ? "primary" : "disabled"}
            />
          </DrawerButton>
        </Box>
      </DrawerBody>
    </DrawerStyles>
  );
};
