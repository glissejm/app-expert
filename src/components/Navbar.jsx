import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-expert.png';

export default function Navbar() {
  return (
    <nav className="bg-third flex justify-between px-8">
      <NavLink className="text-secondary font-black text-xl my-3" to="/">
        <picture>
          <img style={{ width: "130px" }} src={logo} alt="Logo" />
        </picture>
      </NavLink>

      <div className="flex">
        <ul className="flex content-center pr-8 gap-x-3 self-center">
          <li>
            <NavLink
              className="text-secondary  text-xl"
              to="/comprar"
            >
              Comprar
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-secondary  text-xl"
              to="/nosotros"
            >
              Nosotros
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-x-3 self-center">
          <NavLink
            className="px-6 py-2 bg-secondary rounded-full text-primary  h-fit hover:bg-five border-white border text-lg"
            to="/login"
          >
            Ingresar
          </NavLink>
          <NavLink
            className="px-6 py-2 bg-secondary rounded-full text-primary h-fit hover:bg-five border-white border text-lg"
            to="/register"
          >
            Registrar
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
