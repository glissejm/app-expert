import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from '../pages/Error/Error404';
import Comprar from '../pages/Landing/Comprar';
import Home from '../pages/Landing/Home';
import Nosotros from '../pages/Landing/Nosotros';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function AppRouter() {
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
