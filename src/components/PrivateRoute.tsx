import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = (props: any) => {
  const logged = localStorage.getItem("token");

  if (!logged) {
    return <Navigate to="/auth" />;
  }
  return <Outlet />;
};
