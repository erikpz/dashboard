import React from "react";
import { Outlet } from "react-router-dom";

export const Auth = () => {
  return (
    <div>
      <h1>Auth Layout</h1>
      <Outlet />
    </div>
  );
};
