import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/actions/logout.action.js';

import Logo from "../../assets/logo-expert.png";
import Button from "../Button";
import "./Navbar.style.css";
import { apiClient } from "../../store/axiosApi/index.js";

export default function NavbarClient() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try{
      //change cookie with the server help
      const response = apiClient("/logout","GET");
      console.log(response);
      dispatch(logoutUser());
      navigate("/");
    }catch(e){
      console.log(e);
    }
  };

  return (
    <nav
      className='flex bg-third justify-around items-center drop-shadow-md'
      id='navbar'
    >
      <NavLink className='text-secondary font-black text-xl' to='/dashboard'>
        <img src={Logo} alt='logo-expert' style={{ width: '130px' }} />
      </NavLink>
      <input
        type='text'
        className='min-w-[25%] rounded-full px-4 py-1.5 bg-slate-200 border border-white placeholder-slate-900'
        placeholder='Buscar pregunta'
      />
      <NavLink to='/simulacro'>
        <Button
          name='Simulacro'
          buttonStyle='px-6 py-2 bg-third rounded-full text-secondary h-fit hover:text-white hover:border-white text-xl font-bold'
        />
      </NavLink>

      <NavLink to='/perfil'>
        <Button
          name='Perfil'
          buttonStyle='px-6 py-2 bg-third rounded-full text-secondary h-fit hover:text-white hover:border-white border-2 border-secondary'
        />
      </NavLink>
      <Button
        name='Cerrar sesión'
        buttonStyle='px-6 py-2 bg-third rounded-full text-secondary h-fit hover:text-white hover:border-white text-xl font-bold'
        onClick={handleLogout}
      />
    </nav>
  );
}
