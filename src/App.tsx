import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./pages/components/PrivateRoute";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Auth } from "./pages/login/AuthLayout";
import { SignInPage } from "./pages/login/SignInPage";
import { SignUpPage } from "./pages/login/SignUpPage";
import { ThemeConfig } from "./theme/ThemeConfig";

const App = () => {
  return (
    <ThemeConfig>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="home" element={<p>DASH HOME</p>} />
              <Route path="details" element={<p>DASH DETAILS</p>} />
            </Route>
          </Route>
          <Route path="*" element={<p>Not Found</p>} />
          <Route path="/auth" element={<Auth />}>
            <Route index element={<SignInPage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
          </Route>
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </ThemeConfig>
  );
};

export default App;
