import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../utils/hooks/useForm';
import { useDispatch } from 'react-redux';
import { resetUser } from '../../store/actions/reset.action';
import Input from '../Input';
import Button from '../Button';
import { apiClient } from '../../store/axiosApi';
import { useParams} from 'react-router-dom';
import axios from 'axios';
//for errors
import ErrorContext from "../Error/ErrorContext.js"
import Error  from '../Error';



export default function FormReset() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const initialUser = { password: "", passwordAgain: "" };
    const [formValues, handleInputChange, reset] = useForm(initialUser);
    const {  password, passwordAgain } = formValues;
    const [errorMessage, setErrorMessage] = useState("");
    const { token } = useParams();
  
    const handleReset = async (e) => {
      e.preventDefault();
      try {
        if(password!==passwordAgain){
          setErrorMessage("Las contraseñas no son iguales");
          return;
        }
        
        const response = await axios({
          method: 'PUT',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: '/users/reset-password',
          data: {passwordAgain},
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        //const response = await apiClient("/users/reset-password", {password,passwordAgain}, "PUT");
        const data = response.data;
        //store the user
        //with the action
        //handle navigate to dashboard
        reset();
        navigate("/login");
      } catch (error) {
        setErrorMessage(error.response.data.message);
      }
      
    }

    return (
      <>
        <ErrorContext.Provider value={{errorMessage,setErrorMessage}}>
          <Error/>
        </ErrorContext.Provider>
  
        <form className="mt-6">
            
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
            name="Cambiar contraseña"
            buttonStyle="w-full block text-white hover:text-third bg-third hover:bg-white font-semibold rounded-lg
            px-4 py-2 mt-4 border border-dark"
            onClick={handleReset}
          />
          <hr className="my-6 border-gray-300 w-full" />

        </form>
      </>
    );
  }