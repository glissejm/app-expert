import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../auth/authContext';
import types from '../../types/types';
import Input from '../Input';
import Button from './../Button';

export default function FormLogin() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    alert('Hice click');
    const action = {
      type: types.login,
      payload: { name: 'Glisse' },
    };

    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/dashboard';

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <form className="mt-6" action="#" methos="POST">
      <div>
        <Input type="email" name="Ingresar Usuario" />
      </div>
      <div className="mt-4">
        <Input type="password" name="Ingresar Contraseña" />
      </div>

      <div className="mt-4 mb-8 form-check">
        <input
          type="checkbox"
          name="connected"
          className="form-check-input mt-3"
        />
        <label htmlFor="connected" className="form-check-label mx-2 mb-4">
          Mantenerme conectado
        </label>
      </div>

      <Button
        name="Iniciar Sesión"
        buttonStyle="w-full block bg-blueThird hover:bg-darkSecondary focus:bg-blueThird font-semibold rounded-lg
    px-4 py-2 mt-4 border border-dark"
        onClick={handleLogin}
      />

      <hr className="my-6 border-gray-300 w-full" />

      <button
        type="button"
        className="w-full block bg-blueSecondary hover:bg-white focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-2 border border-gray-300"
      >
        <div className="flex items-center justify-center">
          <span className="ml-4">Iniciar sesion con Google</span>
        </div>
      </button>
      <Button
        name="Registrarse"
        buttonStyle="w-full block bg-blueThird hover:bg-darkSecondary focus:bg-blueThird font-semibold rounded-lg
    px-4 py-2 mt-4 border border-dark"
      />
    </form>
  );
}
