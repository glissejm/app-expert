import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../utils/hooks/useForm';
import { useDispatch } from 'react-redux';
import { recoverUser } from '../../store/actions/recover.action';
import Input from '../Input';
import Button from '../Button';
import { apiClient } from '../../store/axiosApi';
//for errors
import ErrorContext from "../Error/ErrorContext.js"
import Error  from '../Error';



export default function FormRecover() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const initialUser = { email: "" };
    const [formValues, handleInputChange, reset] = useForm(initialUser);
    const { email } = formValues;
    const [errorMessage, setErrorMessage] = useState("");
    
  
    const handleRecover = async (e) => {
      e.preventDefault();
      try {
        const response = await apiClient("/users/recovery-password", {email}, "POST");
        
        const data = response.data;
        //store the user
        //with the action
        dispatch(recoverUser(data));
        //handle navigate to dashboard
        reset();
        //navigate("/users/recovery-password");
      } catch (error) {
        setErrorMessage(error.response.data.message);
      }
      
    }

    const handleTologin = () => {
        navigate("/login")
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
              placeholder="Ingresar Email"
              autoComplete="on"
              value={email}
              onChange={handleInputChange}
            />

          <Button
            name="Recuperar contraseña"
            buttonStyle="w-full block bg-secondary hover:bg-white focus:bg-third focus:text-white font-semibold rounded-lg
            px-4 py-2 mt-4 border border-dark"
            onClick={handleRecover}
          />
          <hr className="my-6 border-gray-300 w-full" />
  
          <Button
            name="Ya tengo una cuenta"
            buttonStyle="w-full block bg-secondary hover:bg-white focus:bg-third focus:text-white font-semibold rounded-lg
            px-4 py-2 mt-4 border border-dark"
            onClick={handleTologin}
          />
        </form>
      </>
    );
  }