import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export default function Navbar() {
  return (
    <nav className="bg-darkPrimary flex justify-between px-8">
      <NavLink className="text-lightSecondary font-black text-xl" to="/">
        <picture>
          <img className="w-2/12" src={logo} alt="Logo" />
        </picture>
      </NavLink>

      <div className="flex">
        <ul className="flex content-center pr-8 gap-x-3 self-center">
          <li>
            <NavLink
              className="text-lightSecondary font-black text-xl"
              to="/comprar"
            >
              Comprar
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-lightSecondary font-black text-xl"
              to="/nosotros"
            >
              Nosotros
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-x-3 self-center">
          <NavLink
            className="px-6 py-2 bg-lightSecondary rounded-full text-primary font-bold h-fit hover:bg-darkSecondary border-white border-2"
            to="/login"
          >
            Ingresar
          </NavLink>
          <NavLink
            className="px-6 py-2 bg-lightSecondary rounded-full text-primary font-bold h-fit hover:bg-darkSecondary border-white border-2"
            to="/register"
          >
            Registrar
          </NavLink>
        </div>
      </div>
    </nav>
  );
}