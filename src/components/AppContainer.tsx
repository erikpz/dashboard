import { Box, styled } from "@mui/material";
import React from "react";

const RootStyle = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  minHeight: "100%",
}));

export const AppContainer = ({ children }: any) => {
  return <RootStyle>{children}</RootStyle>;
};
