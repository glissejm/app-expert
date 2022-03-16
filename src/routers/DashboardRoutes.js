import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Exercise from '../pages/Exercise/Exercise';
import Profile from '../pages/Landing/Profile';

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='simulacro' element={<Exercise />} />
      <Route path='dashboard/:id' element={<Exercise />} />
      <Route path='perfil' element={<Profile />} />
    </Routes>
  );
}
