import React from "react";
import { Box, Button, styled, Typography, TextField } from "@mui/material";

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

export const SignInPage = () => {
  return (
    <FormContainer>
      <Form>
        <Typography variant="h5">Iniciar sesión</Typography>
        <Typography variant="body2" color="GrayText" sx={{ my: 1 }}>
          Ingresa tus credenciales
        </Typography>
        <TextField placeholder="Correo electrónico" sx={{ mt: 3 }} />
        <TextField placeholder="Contraseña" sx={{ mt: 3 }} />
        <Button variant="contained" sx={{ height: 60, my: 3 }}>
          Iniciar Sesión
        </Button>
      </Form>
    </FormContainer>
  );
};
