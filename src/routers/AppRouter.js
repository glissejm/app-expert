import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "../pages/Error/Error404";
import Comprar from "../pages/Landing/Comprar";
import Home from "../pages/Landing/Home";
import Nosotros from "../pages/Landing/Nosotros";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { loginUser } from "../store/actions/login.action";
import { logoutUser } from "../store/actions/logout.action";
import { apiClient } from "../store/axiosApi";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {
  const dispatch = useDispatch();
  //first time to verify token
  const handleTokenVerify = async () => {
    try {
      const { data } = await apiClient("/verify", "GET");
      if (data.message === "continue") {
        dispatch(loginUser({ name: data.name, email: data.email }));
      }
    } catch (e) {
      console.log(e.response.data.message);
      dispatch(logoutUser());
    }
  };

  useEffect(() => {
    handleTokenVerify();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path="/comprar" element={<Comprar />} />
        <Route path="/nosotros" element={<Nosotros />} />
        {/* In this route define the component for users registered */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
