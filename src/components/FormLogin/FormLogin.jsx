import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {GoogleLogin} from "react-google-login"
import { useForm } from '../../utils/hooks/useForm';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions/login.action';
import Input from '../Input';
import Button from '../Button';
import { apiClient } from '../../store/axiosApi';
//for errors
import ErrorContext from "../Error/ErrorContext.js"
import Error  from '../Error';

export default function FormLogin() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const initialUser = { email: "", password: "" };
  const [formValues, handleInputChange, reset] = useForm(initialUser);
  const {email, password} = formValues;
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient("/signin", {email:email , password:password}, "POST");
      const data = response.data;
      //store the user
      //with the action
      dispatch(loginUser({name:data.name,email:data.email}));
      reset();
      navigate("/dashboard");
    } catch (e) {
      setErrorMessage(e.response.data.message);
    }
  };

  const handleGoogleAuth = async (googleData) => {
    try{
      const {data} = await apiClient("/logingoogle",{token: googleData.tokenId},"POST");
      //once we get the data, we have to store data using dispatch
      dispatch(loginUser({name:data.name,email:data.email}));
      navigate("/dashboard");
    }catch(e){
      setErrorMessage(e.response.data.message);
    }
  }

  const handleToregister= () => {
    navigate("/register")
  }

  const handleToResetPassword= () => {
    navigate("/password-recover")
  }

  return (
    <>
      <ErrorContext.Provider value={{errorMessage,setErrorMessage}}>
        <Error/>
      </ErrorContext.Provider>

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

        <hr className="my-4 border-gray-300 w-full" />

        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_KEY_ID}
          buttonText="Iniciar sesión con Google"
          theme='dark' 
          onSuccess={handleGoogleAuth}
          onFailure={handleGoogleAuth}
          cookiePolicy={'single_host_origin'}
          className="w-full flex justify-center"
        />
        <Button
          name="No tengo una cuenta"
          buttonStyle="w-full block bg-secondary hover:bg-white focus:bg-third focus:text-white font-semibold rounded-lg
      px-4 py-2 mt-4 border border-dark"
          onClick={handleToregister}
        />

        <Button
          name="Recuperar contraseña"
          buttonStyle="w-full block bg-secondary hover:bg-white focus:bg-third focus:text-white font-semibold rounded-lg
      px-4 py-2 mt-4 border border-dark"
          onClick={handleToResetPassword}
        />
      </form>
    </>
  );
}
