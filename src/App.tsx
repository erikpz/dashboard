import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./pages/components/PrivateRoute";
import { DashboardHome } from "./pages/dashboard/DashboardHome";
import { AuthLayout } from "./pages/login/AuthLayout";
import { SignInPage } from "./pages/login/SignInPage";
import { SignUpPage } from "./pages/login/SignUpPage";
import { ThemeConfig } from "./theme/ThemeConfig";

const App = () => {
  return (
    <ThemeConfig>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<DashboardHome />} />
            <Route path="home" element={<DashboardHome />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
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
