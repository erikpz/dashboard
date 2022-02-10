import React, { useState } from "react";
import { Box, Button, styled, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

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

export const ForgotPasswordPage = () => {
  const [send, setsend] = useState(false);
  const navigate = useNavigate();
  const handleReset = () => {
    setsend(true);
  };
  return (
    <FormContainer>
      <Form>
        {!send ? (
          <>
            <Typography variant="h3">¿Olvidaste tu contraseña?</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
              Ingresa el correo electrónico asociado a tu cuenta y te enviaremos
              un link para resstablecer tu contraseña.
            </Typography>
            <TextField label="Correo electrónico" sx={{ mt: 2 }} />
            <Button
              variant="contained"
              sx={{ height: 56, mt: 2, mb: 1 }}
              onClick={handleReset}
            >
              Restablecer contraseña
            </Button>
            <Button sx={{ height: 56 }} onClick={() => navigate("/auth")}>
              Regresar
            </Button>
          </>
        ) : (
          <>
            <img
              style={{ width: 200, margin: "20px auto" }}
              src="/static/illustrations/email_send.png"
              alt="email-send"
            />
            <Typography variant="h3" align="center">
              Petición enviada
            </Typography>
            <Typography
              variant="body2"
              align="center"
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Hemos enviado un correo de confirmación a email@email.com
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary">
              Por favor revisa tu correo.
            </Typography>
            <Button
              variant="contained"
              sx={{
                display: "block",
                height: 56,
                maxWidth: 120,
                margin: "30px auto",
              }}
              onClick={() => navigate("/auth")}
            >
              Regresar
            </Button>
          </>
        )}
      </Form>
    </FormContainer>
  );
};
