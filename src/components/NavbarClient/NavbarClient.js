import React from 'react';
import Logo from '../../assets/logo-expert.png';
import Button from '../Button';
import './Navbar.style.css';

export default function NavbarClient() {
  return (
    <nav className="flex bg-[#072227] justify-around items-center" id="navbar">
      <img src={Logo} alt="logo-expert" style={{ width: '160px' }} />
      <p className="font-bold text-white text-lg">125 ejercicios resueltos</p>
      <p className="font-bold text-lg text-white">Hola Jhon!</p>
      <input
        type="text"
        className="border-2 rounded-full px-16 py-1.5 border-black"
        placeholder="Buscar pregunta"
        style={{ backgroundColor: '#AEFEFF' }}
      />
      <Button
        name={'Simulacro'}
        buttonStyle="px-6 py-2 bg-lightSecondary rounded-full text-primary font-bold h-fit hover:bg-darkSecondary border-white border-2"
      />
      <Button
        name={'Perfil'}
        buttonStyle="px-6 py-2 bg-lightSecondary rounded-full text-primary font-bold h-fit hover:bg-darkSecondary border-white border-2"
      />
    </nav>
  );
}
