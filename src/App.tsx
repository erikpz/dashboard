import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { PrivateRoute } from "./components/PrivateRoute";
import { DashboardLayout } from "./pages/dashboard/DashboardLayout";
import { AuthLayout } from "./pages/auth/AuthLayout";
import { SignInPage } from "./pages/auth/SignInPage";
import { SignUpPage } from "./pages/auth/SignUpPage";
import { ThemeConfig } from "./theme/ThemeConfig";
import { AppContainer } from "./components/AppContainer";
import { ForgotPasswordPage } from "./pages/auth/ForgotPasswordPage";
import { useBarProgress } from "./hooks/useBarProgress";

const AppContent = () => {
  useBarProgress();
  return (
    <>
      <ScrollToTop />
      <AppContainer>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route path="home" element={<p>DASH HOME</p>} />
              <Route path="details" element={<p>DASH DETAILS</p>} />
            </Route>
          </Route>
          <Route path="auth" element={<AuthLayout />}>
            <Route index element={<Navigate to="sign-in" />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
          </Route>
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </AppContainer>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ThemeConfig>
        <AppContent />
      </ThemeConfig>
    </BrowserRouter>
  );
};

export default App;
