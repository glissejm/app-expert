import React from 'react';
import './Navbar.style.css';
import Logo from '../../assets/logo-expert.png';

export default function Navbar() {
  return (
    <nav className="flex bg-[#072227] justify-around items-center" id="navbar">
      <div>
        <img src={Logo} alt="logo-expert" style={{ width: '160px' }} />
      </div>
      <div className="font-bold text-white text-lg">
        125 ejercicios resueltos
      </div>
      <div className="font-bold text-lg text-white">Hola Jhon!</div>
      <div>
        <input
          type="text"
          className="border-2 rounded-full px-16 py-1.5 border-black"
          placeholder="Buscar pregunta"
          style={{ backgroundColor: '#AEFEFF' }}
        />
      </div>
      <div>
        <button
          className="border-2 rounded-full px-8 py-1.5 border-white font-bold"
          style={{ backgroundColor: '#AEFEFF' }}
          type="button"
        >
          Simulacro
        </button>
      </div>
      <div>
        <button
          className="border-2 rounded-full px-8 py-1.5 border-black font-bold"
          style={{ backgroundColor: '#AEFEFF' }}
          type="button"
        >
          Perfil
        </button>
      </div>
    </nav>
  );
}
