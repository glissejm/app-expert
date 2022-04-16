import React,{useState} from 'react';
import {GoogleLogin} from "react-google-login"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from "../../utils/hooks/useForm";
import { registerUser } from '../../store/actions/register.action';
import {apiClient} from "../../store/axiosApi"
import Input from '../Input';
import Button from '../Button';
import ErrorContext from '../Error/ErrorContext';
import Error from '../Error';

export default function FormRegister() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const initialUser = { name: "", email: "", password: "",passwordAgain: "" };
  const [formValues, handleInputChange, reset] = useForm(initialUser);
  const { name, email, password,passwordAgain } = formValues;
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if(password!==passwordAgain){
        setErrorMessage("Las contraseñas no son iguales");
        return;
      }
      const response = await apiClient("/signup", {name,email,password}, "POST");
      const data = response.data;
      //store the user
      //with the action
      dispatch(registerUser(data));
      //handle navigate to dashboard
      reset();
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
    
  }
  const handleTologin = () => {
    navigate("/login")
  }
  const handleGoogleAuth = async (googleData) => {
    try{
      const {data} = await apiClient("/registergoogle",{token: googleData.tokenId},"POST");
      //once we get the data, we have to store data using dispatch
      dispatch(registerUser({name:data.name,email:data.email}));
      //handle navigate to dashboard
      navigate("/dashboard");
    }catch(e){
      setErrorMessage(e.response.data.message);
    }
  }
  return (
    <>
      <ErrorContext.Provider value={{errorMessage,setErrorMessage}}>
        <Error/>
      </ErrorContext.Provider>

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
          buttonStyle="w-full block bg-third text-white hover:bg-white hover:text-third focus:bg-third focus:text-white font-semibold rounded-lg
          px-4 py-2 mt-4 border border-dark"
          onClick={handleRegister}
        />
        <hr className="my-6 border-gray-300 w-full" />

        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_KEY_ID}
          buttonText="Registrarme con Google"
          theme='dark' 
          onSuccess={handleGoogleAuth}
          onFailure={handleGoogleAuth}
          cookiePolicy={'single_host_origin'}
          className="w-full flex justify-center"
        />
        <Button
          name="Ya tengo una cuenta"
          buttonStyle="w-full block bg-third text-white hover:bg-white hover:text-third focus:bg-third focus:text-white font-semibold rounded-lg
          px-4 py-2 mt-4 border border-dark"
          onClick={handleTologin}
        />
      </form>
    </>
  );
}
