import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {logoutUser} from "../../store/actions/logout.action.js"

import Logo from "../../assets/logo-expert.png";
import Button from "../Button";
import "./Navbar.style.css";

export default function NavbarClient() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(state=>state.auth.name);
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <nav className="flex bg-third justify-around items-center" id="navbar">
      <NavLink
        className="text-secondary font-black text-xl"
        to="/dashboard"
      >
        <img src={Logo} alt="logo-expert" style={{ width: "130px" }} />
      </NavLink>
      <p className=" text-white text-lg">125 ejercicios resueltos</p>
      <p className=" text-lg text-white">Hola {userName}!</p>
      <input
        type="text"
        className="rounded-full px-16 py-1.5 bg-slate-200 border border-white placeholder-slate-900"
        placeholder="Buscar pregunta"
      />
      <NavLink to="/simulacro">
        <Button
          name="Simulacro"
          buttonStyle="px-6 py-2 bg-third rounded-full text-secondary h-fit hover:text-white hover:border-white border-2 border-secondary"
        />
      </NavLink>

      <Button
        name="Perfil"
        buttonStyle="px-6 py-2 bg-third rounded-full text-secondary h-fit hover:text-white hover:border-white border-2 border-secondary"
      />
      <Button
        name="Cerrar sesión"
        buttonStyle="px-6 py-2 bg-third rounded-full text-secondary h-fit hover:text-pink hover:border-pink border-2 border-secondary"
        onClick={handleLogout}
      />
    </nav>
  );
}
