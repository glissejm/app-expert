import React from 'react';
import logo from '../assets/logo.jpg';
import Button from './Button';

export default function Navbar() {
  return (
    <nav className="bg-darkPrimary flex justify-between px-8">
      <picture>
        <img className="w-2/12" src={logo} alt="" />
      </picture>
      <div className="flex">
        <ul className="flex content-center pr-8 gap-x-3 self-center">
          <li>
            <a className="text-lightSecondary font-black text-xl" href="">
              Comprar
            </a>
          </li>
          <li>
            <a className="text-lightSecondary font-black text-xl" href="">
              Nosotros
            </a>
          </li>
        </ul>
        <div className="flex gap-x-3 self-center">
          <Button name="Ingresar" />
          <Button name="Registrar" />
        </div>
      </div>
    </nav>
  );
}
