import React from 'react';

export default function Navbar() {
  return (
    <nav className="py-4 bg-primary2">
      <div>Logo</div>
      <div>
        <ul>
          <li>
            <a href="">Comprar</a>
          </li>
          <li>
            <a href="">Nosotros</a>
          </li>
        </ul>
        <button type="submit">Ingresar</button>
        <button type="submit">Registrar</button>
      </div>
    </nav>
  );
}
