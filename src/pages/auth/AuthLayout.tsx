import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Box, Link as LinkMui } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { Hidden } from "../../components/Hidden";

const LayoutStyle = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  position: "relative",
}));

const HeaderStyle = styled(Box)(({ theme }) => ({
  /* backgroundColor: "lightblue", */
  width: "calc(100% - 32px)",
  position: "absolute",
  top: 0,
  left: 0,
  margin: 16,
  padding: 16,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    margin: 0,
  },
  [theme.breakpoints.down(524)]: {
    padding: 8,
  },
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
      <HeaderStyle>
        <img
          style={{ width: "70px", height: "70px" }}
          src="/static/illustrations/logo.png"
          alt="logo"
        />
        <Hidden width="smDown">
          <Typography variant="body2">
            ¿No tienes una cuenta?{" "}
            <LinkMui
              component={Link}
              to="/auth/sign-up"
              variant="body2"
              align="right"
              sx={{ color: "primary.main" }}
              underline="none"
            >
              Regístrate.
            </LinkMui>
          </Typography>
        </Hidden>
      </HeaderStyle>
      <Hidden width="mdDown">
        <ImageContainer>
          <Typography variant="h3" sx={{ mt: 10, mb: 8, px: 6 }}>
            Hola, Bienvenido
          </Typography>
          <img
            alt="bienvenido"
            src="/static/illustrations/illustration_login.png"
            style={{ maxWidth: 380, margin: "0 auto" }}
          />
        </ImageContainer>
      </Hidden>
      <Outlet />
    </LayoutStyle>
  );
};
