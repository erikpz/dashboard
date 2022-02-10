import React, { useState } from "react";
import {
  Box,
  Button,
  styled,
  Typography,
  TextField,
  IconButton,
  Link as LinkMui,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Hidden } from "../../components/Hidden";

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

export const SignUpPage = () => {
  const [showPass, setshowPass] = useState(false);
  const handleShowPass = () => setshowPass(!showPass);
  return (
    <FormContainer>
      <Form>
        <Typography variant="h4"> Regístrate</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ my: 1 }}>
          Ingresa tus datos.
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Nombre(s)" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Apellidos" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Correo electrónico" /* sx={{ width: "100%" }} */
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Contraseña"
              type={showPass ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleShowPass}>
                    {showPass ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Button variant="contained" sx={{ height: 60, my: 3 }}>
          Registrarse
        </Button>
        <Hidden width="smUp">
          <Typography variant="body2" align="center">
            Ya tienes una cuenta?{" "}
            <LinkMui
              component={Link}
              to="/auth/sign-in"
              variant="body2"
              align="right"
              sx={{ color: "primary.main" }}
              underline="none"
            >
              Inicia Sesión
            </LinkMui>
          </Typography>
        </Hidden>
      </Form>
    </FormContainer>
  );
};
