import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../utils/hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLoginUser } from '../../store/actions/login.action';
import Input from '../Input';
import Button from '../Button';



export default function FormLogin() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const initialUser = { email: "", password: "" };
  const [formValues, handleInputChange, reset] = useForm(initialUser);
  const {email, password} = formValues;

  const handleLogin = () => {
   //handle redux thunk
   dispatch(startLoginUser({email, password}));
   
   reset();
   navigate("/dashboard");
  };
  const handleToregister= () => {
    navigate("/register")
  }
  return (
    <form className="mt-6">
      <Input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="on"
          value={email}
          onChange={handleInputChange}
        />
      <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
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
        buttonStyle="w-full block bg-secondary hover:bg-white focus:bg-third focus:text-white font-semibold rounded-lg
    px-4 py-2 mt-4 border border-dark"
        onClick={handleLogin}
      />

      <hr className="my-6 border-gray-300 w-full" />

      <button
        type="button"
        className="w-full block  bg-blue-600 hover:bg-white focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-2 border border-gray-300"
      >
        <div className="flex items-center justify-center">
          <span className="ml-4">Iniciar sesion con Google</span>
        </div>
      </button>
      <Button
        name="No tengo una cuenta"
        buttonStyle="w-full block bg-secondary hover:bg-white focus:bg-third focus:text-white font-semibold rounded-lg
    px-4 py-2 mt-4 border border-dark"
        onClick={handleToregister}
      />
    </form>
  );
}
