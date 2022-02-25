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
    <nav className="flex bg-[#072227] justify-around items-center" id="navbar">
      <NavLink
        className="text-lightSecondary font-black text-xl"
        to="/dashboard"
      >
        <img src={Logo} alt="logo-expert" style={{ width: "160px" }} />
      </NavLink>
      <p className="font-bold text-white text-lg">125 ejercicios resueltos</p>
      <p className="font-bold text-lg text-white">Hola {userName}!</p>
      <input
        type="text"
        className="border-2 rounded-full px-16 py-1.5 border-black"
        placeholder="Buscar pregunta"
        style={{ backgroundColor: "#AEFEFF" }}
      />
      <NavLink to="/simulacro">
        <Button
          name="Simulacro"
          buttonStyle="px-6 py-2 bg-lightSecondary rounded-full text-primary font-bold h-fit hover:bg-darkSecondary border-white border-2"
        />
      </NavLink>

      <Button
        name="Perfil"
        buttonStyle="px-6 py-2 bg-lightSecondary rounded-full text-primary font-bold h-fit hover:bg-darkSecondary border-white border-2"
      />
      <Button
        name="Cerrar sesión"
        buttonStyle="px-6 py-2 bg-lightSecondary rounded-full text-primary font-bold h-fit hover:bg-darkSecondary border-white border-2"
        onClick={handleLogout}
      />
    </nav>
  );
}
