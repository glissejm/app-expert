import React from 'react';
import Input from '../Input';
import Button from './../Button';

export default function FormRegister() {
  return (
    <form className="mt-6" action="#" methos="POST">
      <div>
        <Input type="text" name="Nombre" />
      </div>
      <div className="mt-4">
        <Input type="text" name="Usuario" />
      </div>
      <div className="mt-4">
        <Input type="text" name="Contraseña" />
      </div>
      <div className="mt-4 mb-8">
        <Input type="text" name="Repetir Contraseña" />
      </div>
      <Button
        name="Registrarse"
        buttonStyle="w-full block bg-blueThird hover:bg-darkSecondary focus:bg-blueThird font-semibold rounded-lg
    px-4 py-2 mt-4 border border-dark"
      />
      <hr className="my-6 border-gray-300 w-full" />

      <Button
        name="Ya tengo una cuenta"
        buttonStyle="w-full block bg-blueThird hover:bg-darkSecondary focus:bg-blueThird font-semibold rounded-lg
    px-4 py-2 mt-4 border border-dark"
      />
      <button
        type="button"
        className="w-full block mt-4 bg-blueSecondary hover:bg-white focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-2 border border-gray-300"
      >
        <div className="flex items-center justify-center">
          <span className="ml-4">Iniciar sesion con Google</span>
        </div>
      </button>
    </form>
  );
}
