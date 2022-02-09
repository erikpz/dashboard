import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Hidden } from "../../components/Hidden";

const LayoutStyle = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
  width: "100%",
  maxWidth: 464,
  margin: "16px 0 16px 16px",
  borderRadius: theme.shape.borderRadiusMd,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export const AuthLayout = () => {
  return (
    <LayoutStyle>
      <Hidden width="mdDown">
        <ImageContainer>
          <Typography align="center" variant="h3" sx={{ mt: 10, mb: 4, px: 6 }}>
            Hola, Bienvenido
          </Typography>
          <img
            alt="bienvenido"
            src="/static/illustrations/illustration_login.png"
            style={{ maxWidth: 400, margin: "0 auto" }}
          />
        </ImageContainer>
      </Hidden>
      <Outlet />
    </LayoutStyle>
  );
};
