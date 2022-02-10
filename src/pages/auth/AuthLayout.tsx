import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Box, Link as LinkMui } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Hidden } from "../../components/Hidden";

const LayoutStyle = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  minHeight: "100%",
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
  const location = useLocation();
  console.log(location);
  const getDataSection = () => {
    if (location.pathname.includes("sign-in")) {
      return {
        title: "Hola, bienvenido",
        text: "¿No tienes una cuenta? ",
        textLink: "Regístrate",
        link: "/auth/sign-up",
        imageSrc: "/static/illustrations/illustration_login.png",
      };
    } else if (location.pathname.includes("sign-up")) {
      return {
        title: "Únete a nosotros",
        text: "¿Ya tienes una cuenta? ",
        textLink: "Inicia sesión",
        link: "/auth/sign-in",
        imageSrc: "/static/illustrations/illustration_register.png",
      };
    } else {
      return {
        title: "",
        text: "",
        textLink: "",
        link: "/",
        imageSrc: "",
      };
    }
  };
  return (
    <LayoutStyle>
      {!location.pathname.includes("forgot-password") && (
        <>
          <HeaderStyle>
            <img
              style={{ width: "70px", height: "70px" }}
              src="/static/illustrations/logo.png"
              alt="logo"
            />
            <Hidden width="smDown">
              <Typography variant="body2">
                {getDataSection().text}
                <LinkMui
                  component={Link}
                  to={getDataSection().link}
                  variant="body2"
                  align="right"
                  sx={{ color: "primary.main" }}
                  underline="none"
                >
                  {getDataSection().textLink}
                </LinkMui>
              </Typography>
            </Hidden>
          </HeaderStyle>
          <Hidden width="mdDown">
            <ImageContainer>
              <Typography variant="h3" sx={{ mt: 10, mb: 8, px: 6 }}>
                {getDataSection().title}
              </Typography>
              <img
                alt="bienvenido"
                src={getDataSection().imageSrc}
                style={{ maxWidth: 380, margin: "0 auto" }}
              />
            </ImageContainer>
          </Hidden>
        </>
      )}

      <Outlet />
    </LayoutStyle>
  );
};
