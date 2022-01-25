import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Landing/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

export default function HomeRoutes() {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='home' element={<Home />} />
    </Routes>
  );
}
