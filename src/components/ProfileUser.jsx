import React, { useState, useEffect } from 'react';
import { apiClient } from '../store/axiosApi/index';
import { useSelector } from 'react-redux';
import profile from '../assets/profile.svg';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../utils/hooks/useForm';
//for errors
import ErrorContext from "./Error/ErrorContext";
import Error from './Error';
import { loginUser } from '../store/actions/login.action';
import axios from 'axios';

const ProfileUser = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const initialUser = {
    name: auth.name,
    email: auth.email,
    password: "",
    newPassword: "",
    newPassword2: "",
    googlePassword:"",
  };
  const [formValues, handleInputChange] = useForm(initialUser);
  const {email, name, password, newPassword, newPassword2,googlePassword} = formValues;
  const [buttonName, setButtonName] = useState("Cambiar mi contraseña");
  const [changePass, setChangePass] = useState(false);
  const [newPass, setNewPass] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [google, setGoogle] = useState("");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    console.log("here",event.target.files[0]);

    setFile(event.target.files[0]);

  }

  async function handleImageSubmit (e) {
    e.preventDefault();
    const formData = new FormData()
    formData.append('photo', file)
    formData.append('email', email)

    console.log("handleSubmit response",[...formData])
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }

    const url = 'http://localhost:5000/imageUpload';
    axios
      .put(url, formData, config)
      .then(res => {
        alert('Image Uploaded Successfully')
      })
      .catch(err => {
        console.log(err)
      })


  }

  const handleChangeButton = () => {
    setChangePass(!changePass);
    !changePass ? setButtonName("No cambiar mi contraseña") : setButtonName("Cambiar mi contraseña");
    if(newPass===true){
      setNewPass(false);
    }
  }

  const handleVerifyPassword = async () => {
    //call api to verify the password 
    try {
      await apiClient("/password",{password},"POST");
      setNewPass(true);
    } catch (e) {
      setErrorMessage(e.response.data.message);
    }
    //then change the state of show new password input
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      //verify if password and password again are equal
      if(newPassword!==newPassword2){
        setErrorMessage("Las contraseñas no son iguales");
        return;
      }
      let passwordToSend = "";
      if(google==="Google"){
        passwordToSend = googlePassword;
      }else{
        passwordToSend = newPassword;
      }
      const { data } = await apiClient("/password",{name, email,password: passwordToSend},"PUT");
      loginUser(data);
      window.location.reload();
      navigate("/dashboard");
    }catch(error){
      setErrorMessage(error.response.data.message);
    }
  }

  const getInfo = async () => {
    try {
      const response = await apiClient("/password","GET");
      const {message,imgProfile} = response.data;
      setGoogle(message);
      if (imgProfile === "Not found") {
        setImage(profile);
      }else {
        setImage(imgProfile);
      }
    } catch (e) {
      console.log(e.response.data.message)
    }
  }

  useEffect(() => {
    getInfo();
  }, [])

  return (
    <section>
      <div className='min-h-screen flex flex-col justify-center bg-gray-200'>
        <div className='bg-white mx-auto max-w-md py-8 px-10 shadow rounded-lg'>
          <div>
            <h1 className='text-4xl text-center mb-5'>{name}</h1>
          </div>
          <div className='flex justify-center mb-5'>
            <img src={image} alt='' className='w-1/2' />
          </div>
          <form onSubmit={handleSubmit}>
            <ErrorContext.Provider value={{errorMessage,setErrorMessage}}>
              <Error/>
            </ErrorContext.Provider>
            <label>Usuario: </label>
            <input
              type='text'
              className='appearance-none block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none'
              name='name'
              value={name}
              onChange={handleInputChange}
            />
            <label>Email: </label>
            <input
              type='email'
              className='appearance-none block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none'
              name='email'
              value={email}
              onChange={handleInputChange}
            />
            {/* <label>Password: </label>
            <input
              type='password'
              className='appearance-none block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none'
              name='password'
              value={userFiltro.password}
              onChange={inputChange}
            /> */}
            <button type="button" className='inline-block w-full px-8 py-4 leading-none text-white hover:text-third bg-third hover:bg-white font-semibold border border-third rounded shadow mt-5' onClick={handleChangeButton}>{buttonName}</button>
            {changePass? 
              <>
                {google === "Google"? 
                  <>
                    <label>Ingresa tu nueva contraseña: </label>
                    <input
                      type='password'
                      className='appearance-none block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none'
                      name='googlePassword'
                      value={googlePassword}
                      onChange={handleInputChange}
                    />
                  </>
                :
                <>
                  <label>Ingresa tu contraseña actual: </label>
                  <input
                    type='password'
                    className='appearance-none block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none'
                    name='password'
                    value={password}
                    onChange={handleInputChange}
                  />
                  <button type='button' onClick={handleVerifyPassword} disabled={newPass===true} className='disabled:text-slate-500 disabled:border-0 disabled:bg-neutral-200 hover:text-third hover:bg-white inline-block w-full px-8 py-4 leading-none text-white bg-third border border-third font-semibold rounded shadow mt-5'>Verificar</button>
                  {
                    newPass ? 
                    <>
                      <label>Ingresa tu nueva contraseña: </label>
                      <input
                        type='password'
                        className='appearance-none block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none'
                        name='newPassword'
                        value={newPassword}
                        onChange={handleInputChange}
                      />
                      <label>Repetir nueva contraseña: </label>
                      <input
                        type='password'
                        className='appearance-none block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none'
                        name='newPassword2'
                        value={newPassword2}
                        onChange={handleInputChange}
                      />
                    </>
                    :
                    <></>
                  }
                </>
                }
              </>
            :
              <></>
            }
            <button type='submit' className='inline-block w-full px-8 py-4 leading-none text-white bg-third hover:text-third hover:bg-white border border-third font-semibold rounded shadow mt-5'>
              Actualizar
            </button>
          </form>
          <form onSubmit={handleImageSubmit} className="mt-8  rounded shadow border-4 border-third p-3">
            <label htmlFor='file'>Actualizar foto de perfil:</label>
            <input
              type="file"
              accept="image/*"
              name="photo"
              id="file"
              className='mt-3'
              onChange={handleImageChange}
            />
            <button type="submit" value="Enviar foto" className="text-white bg-third hover:text-third hover:bg-white border border-third font-semibold rounded shadow mt-5 px-4">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfileUser;
