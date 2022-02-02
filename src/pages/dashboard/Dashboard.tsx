import React from "react";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div>
      DASH LAYOUT
      <Outlet />
    </div>
  );
};

/* <Routes>
  <Route element={<PrivateRoute />}>
    <Route path="/" element={<Navigate to="home" />} />
    <Route path="home" element={<p>DASH HOME</p>} />
    <Route path="details" element={<p>DASH DETAILS</p>} />
  </Route>
  <Route path="*" element={<p>Not Found</p>} />
</Routes>; */
