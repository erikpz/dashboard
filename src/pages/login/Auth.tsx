import { Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export const Auth = () => {
  return (
    <div>
      <Typography variant='h1'>Auth Layout</Typography>
      <Outlet />
    </div>
  );
};
