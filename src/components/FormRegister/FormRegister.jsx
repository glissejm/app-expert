import React from 'react';
import { useForm } from "../../utils/hooks/useForm";
import Input from '../Input';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startRegisterUser } from '../../store/actions/register.action';


export default function FormRegister() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const initialUser = { name: "", email: "", password: "",passwordAgain: "" };
  const [formValues, handleInputChange, reset] = useForm(initialUser);
  const { name, email, password,passwordAgain } = formValues;

  const handleForm = (e) => {
    e.preventDefault();
    //handle redux thunk
    dispatch(startRegisterUser({name,email,password}));
    //handle navigate to dashboard
    reset();
    navigate("/dashboard");
  }
  const handleTologin = () => {
    navigate("/login")
  }
  return (
    <form className="mt-6">
        <Input
          type="text"
          name="name"
          placeholder="Nombre de usuario"
          autoComplete="on"
          value={name}
          onChange={handleInputChange}
        />
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
        <Input
          type="password"
          name="passwordAgain"
          placeholder="Repetir contraseña"
          autoComplete="off"
          value={passwordAgain}
          onChange={handleInputChange}
        />
      <Button
        name="Registrarse"
        buttonStyle="w-full block bg-secondary hover:bg-white focus:bg-third focus:text-white font-semibold rounded-lg
        px-4 py-2 mt-4 border border-dark"
        onClick={handleForm}
      />
      <hr className="my-6 border-gray-300 w-full" />

      <Button
        name="Ya tengo una cuenta"
        buttonStyle="w-full block bg-secondary hover:bg-white focus:bg-third focus:text-white font-semibold rounded-lg
        px-4 py-2 mt-4 border border-dark"
        onClick={handleTologin}
      />
      <button
        type="button"
        className="w-full block mt-4 bg-blue-600 hover:bg-white focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-2 border border-gray-300"
      >
        <div className="flex items-center justify-center">
          <span className="ml-4">Iniciar sesion con Google</span>
        </div>
      </button>
    </form>
  );
}
