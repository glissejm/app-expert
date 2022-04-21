import React,{useEffect, useState} from 'react';
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
  const [imgRute, setImgRute ] = useState("");
  const handleLogout = async () => {
    try{
      //change cookie with the server help
      apiClient("/logout","GET");
      dispatch(logoutUser());
      navigate("/");
    }catch(e){
      console.log(e);
    }
  };

  const handleImage = async () => {
    const {data} = await apiClient("/password","GET");
    setImgRute(data.imgProfile);
  }
  useEffect(() => {
    handleImage();
  }, [])
  return (
    <nav
      className='flex bg-third justify-between px-16 drop-shadow-md'
      id='navbar'
    >
      <NavLink className='text-secondary pt-2 px-16' to='/dashboard'>
        <picture>
          <img src={Logo} alt='logo-expert' style={{ width: '130px' }} />
        </picture>  
      </NavLink>
      <div className="dropdown inline-block relative">
        <button className="px-16 py-2 bg-third rounded-full text-secondary h-fit hover:text-white hover:border-white  flex justify-around items-center">
          <img src={imgRute} alt="" className='rounded-full mx-2' style={{width: "30px"}}/>
          <span className="mr-1 text-xl">{nameUser}</span>
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
        </button>
        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 text-center w-48 z-40">
          <li>
            <NavLink to='/perfil' className="py-2 px-4 text-white border-2 border-third font-bold bg-third hover:bg-white hover:text-third block whitespace-no-wrap">
              Perfil
            </NavLink>
          </li>
          <li>
            <NavLink to='/progress' className="py-2 px-4 text-white border-2 border-third font-bold bg-third hover:bg-white hover:text-third block whitespace-no-wrap">
              Progreso
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogout} className="py-2 px-4 text-white border-2 border-third font-bold bg-third hover:bg-white w-full  hover:text-third block whitespace-no-wrap rounded-b-lg">
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    </nav >
  );
}
