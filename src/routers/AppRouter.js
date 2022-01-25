import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error404 from '../pages/Error/Error404';
import Home from '../pages/Landing/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function AppRouter() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path='/login'
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path='/register'
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route
        path='/*'
        element={
          <PrivateRoute>
            <DashboardRoutes />
          </PrivateRoute>
        }
      />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}
