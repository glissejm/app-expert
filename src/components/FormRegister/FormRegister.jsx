import React from 'react';
import { useForm } from "../../utils/hooks/useForm";
import Input from '../Input';
import Button from '../Button';

export default function FormRegister() {
  const initialUser = { name: "", email: "", password: "",passwordAgain: "" };
  const [formValues, handleInputChange, reset] = useForm(initialUser);
  const { name, email, password,passwordAgain } = formValues;

  const handleForm = (e) => {
    e.preventDefault();
    //handle redux thunk
    
    reset();
  }
  return (
    <form className="mt-6" action="#" methos="POST">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Nombre de usuario"
          autoComplete="on"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="on"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Input
          type="password"
          name="passwordAgain"
          placeholder="Repetir contraseña"
          autoComplete="off"
          value={passwordAgain}
          onChange={handleInputChange}
        />
      </div>
      <Button
        name="Registrarse"
        onClick={handleForm}
      />
      <hr className="my-6 border-gray-300 w-full" />

      <Button
        name="Ya tengo una cuenta"
      />
      <button
        type="submit"
        className="w-full block mt-4 bg-blueSecondary hover:bg-white focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-2 border border-gray-300"
      >
        <div className="flex items-center justify-center">
          <span className="ml-4">Iniciar sesion con Google</span>
        </div>
      </button>
    </form>
  );
}
