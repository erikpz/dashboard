import React, { useState } from "react";
import {
  Box,
  Button,
  styled,
  Typography,
  TextField,
  IconButton,
  Link as LinkMui,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

const FormContainer = styled(Box)(({ theme }) => ({
  padding: "150px 0",
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));

const Form = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 500,
  padding: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export const SignInPage = () => {
  const [showPass, setshowPass] = useState(false);
  const handleShowPass = () => setshowPass(!showPass);
  return (
    <FormContainer>
      <Form>
        <Typography variant="h4">Iniciar sesión</Typography>
        <Typography variant="body1" color="GrayText" sx={{ my: 1 }}>
          Ingresa tus credenciales
        </Typography>
        <TextField label="Correo electrónico" sx={{ mt: 3 }} />
        <TextField
          label="Contraseña"
          type={showPass ? "text" : "password"}
          sx={{ mt: 3 }}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleShowPass}>
                {showPass ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
        />
        <LinkMui
          component={Link}
          to="/auth/forgot-password"
          variant="body2"
          align="right"
          sx={{ color: "primary.main", mt: 2 }}
          underline="none"
        >
          ¿Olvidaste tu contraseña?
        </LinkMui>
        <Button variant="contained" sx={{ height: 60, my: 3 }}>
          Iniciar Sesión
        </Button>
      </Form>
    </FormContainer>
  );
};
