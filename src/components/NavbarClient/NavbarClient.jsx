import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/actions/logout.action.js';

import Logo from "../../assets/logo-expert.png";
import "./Navbar.style.css";
import { apiClient } from "../../store/axiosApi/index.js";

export default function NavbarClient() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const nameUser = useSelector((state) => state.auth.name);
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
      className='flex bg-third justify-around items-center drop-shadow-md sticky top-0 z-40'
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
      <div className="dropdown inline-block relative">
        <button className="px-6 py-2 bg-third rounded-full text-secondary h-fit hover:text-white hover:border-white  flex justify-around items-center">
          <span className="mr-1 text-xl">{nameUser}</span>
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
        </button>
        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 text-center">
          <li>
            <NavLink to='/perfil' className="py-2 px-4 text-white border-2 border-third font-bold bg-third hover:bg-white hover:text-third block whitespace-no-wrap">
              Perfil
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogout} className="py-2 px-4 text-white border-2 border-third font-bold bg-third hover:bg-white hover:text-third block whitespace-no-wrap rounded-b-lg">
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    </nav >
  );
}
