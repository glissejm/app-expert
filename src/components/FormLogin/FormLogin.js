import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import ButtonLogin from './../ButtonLogin';
import InputLogin from './../InputLogin';

export default function FormLogin() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
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
    <form className='mt-6' action='#' methos='POST'>
      <div>
        <InputLogin type='email' name='Ingresar Usuario' />
      </div>
      <div className='mt-4'>
        <InputLogin type='password' name='Ingresar Contraseña' />
      </div>

      <div className='mb-8 form-check'>
        <input
          type='checkbox'
          name='connected'
          className='form-check-input mt-3'
        />
        <label for='connected' className='form-check-label mx-2'>
          Mantenerme conectado
        </label>
      </div>

      <ButtonLogin name='Iniciar Sesión' />

      <hr className='my-6 border-gray-300 w-full' />

      <button
        type='button'
        className='w-full block bg-blueSecondary hover:bg-white focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-2 border border-gray-300'
      >
        <div className='flex items-center justify-center'>
          <span className='ml-4'>Iniciar sesion con Google</span>
        </div>
      </button>
      <ButtonLogin name='Registrarse' handleLogin={handleLogin} />
    </form>
  );
}
