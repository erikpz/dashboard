import React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  Stack,
  Link,
  Container,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { Hidden } from "../../components/Hidden";

const LayoutStyle = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  /* [theme.breakpoints.up('md')]: {
    display: 'flex'
  } */
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
  /* backgroundImage:theme.palette.gradients.primary, */
  width: "100%",
  maxWidth: 464,
  margin: "16px 0 16px 16px",
  borderRadius: theme.shape.borderRadiusMd,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const FormContainer = styled(Box)(({ theme }) => ({
  /* backgroundColor: "lightyellow", */
  padding: "150px 0",
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));

const Form = styled(Box)(({ theme }) => ({
  /*  backgroundColor: "lightblue", */
  width: "100%",
  maxWidth: 500,
  padding: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export const AuthLayout = () => {
  return (
    <LayoutStyle>
      <Hidden width="mdDown">
        <ImageContainer>
          <Typography variant="h4" sx={{ mt: 10, mb: 4, px: 6 }}>
            Hola, Bienvenido
          </Typography>
          <img
            alt="bienvenido"
            src="/static/illustrations/illustration_login.png"
          />
        </ImageContainer>
      </Hidden>
      <FormContainer>
        <Form>
          <Typography variant="h5">Iniciar sesión</Typography>
          <Typography variant="body1" color="GrayText">
            Ingresa tus credenciales
          </Typography>
          <TextField placeholder="Correo electrónico" sx={{ mt: 3 }} />
          <TextField placeholder="Contraseña" sx={{ mt: 3 }} />
          <Button variant="contained" sx={{ height: 63, my: 3 }}>
            Iniciar Sesión
          </Button>
        </Form>
      </FormContainer>
    </LayoutStyle>
  );
};
