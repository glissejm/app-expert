import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Exercise from "../pages/Exercise/Exercise";
import Profile from "../pages/Landing/Profile";
import Progress from "../pages/Progress/Progress.jsx";

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="simulacro" element={<Exercise />} />
      <Route path="dashboard/:id" element={<Exercise />} />
      <Route path="perfil" element={<Profile />} />
      <Route path="progress" element={<Progress />} />
    </Routes>
  );
}
