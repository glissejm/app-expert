import React, { useEffect, useState } from 'react';
import { apiClient } from '../store/axiosApi/index';
import { useSelector } from 'react-redux';
import profile from '../assets/profile.svg';
import { useNavigate } from 'react-router-dom';

const ProfileUser = () => {
  const [userFiltro, setuserFiltro] = useState({});
  const [changePass, setChangePass] = useState(false);
  const email = useSelector((state) => state.auth.email);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateProfile = {
      name: userFiltro.name,
      email: userFiltro.email,
      password: userFiltro.password,
    };

    await apiClient(`/user/${userFiltro._id}`, updateProfile, 'PUT');
    navigate('/dashboard');
  };

  const inputChange = (e) => {
    setuserFiltro({ ...userFiltro, [e.target.name]: e.target.value });
  };
  const handleUser = async () => {
    const res = await apiClient(`/email/${email}`, 'GET');
    setuserFiltro(res.data);
  }

  useEffect(() => {
    handleUser();
  }, [email]);

  return (
    <section>
      <div className='min-h-screen flex flex-col justify-center bg-four'>
        <div className='bg-white mx-auto max-w-md py-8 px-10 shadow rounded-lg'>
          <div>
            <h1 className='text-4xl text-center mb-5'>{userFiltro.name}</h1>
          </div>
          <div className='flex justify-center'>
            <img src={profile} alt='' className='w-1/2' />
          </div>
          <form onSubmit={handleSubmit}>
            <label>Usuario: </label>
            <input
              type='text'
              className='appearance-none block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none'
              name='name'
              value={userFiltro.name}
              onChange={inputChange}
            />
            <label>Email: </label>
            <input
              type='email'
              className='appearance-none block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none'
              name='email'
              value={userFiltro.email}
              onChange={inputChange}
            />
            {/* <label>Password: </label>
            <input
              type='password'
              className='appearance-none block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none'
              name='password'
              value={userFiltro.password}
              onChange={inputChange}
            /> */}
            <button className='inline-block w-full px-8 py-4 leading-none text-white bg-four hover:bg-third font-semibold rounded shadow mt-5' onClick={()=>{setChangePass(true)}}>Cambiar mi contraseña</button>
            {changePass? 
              <>
                <label>Ingresa tu contraseña actual: </label>
                <input
                  type='password'
                  className='appearance-none block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none'
                  name='password'
                  value={"password"}
                  onChange={inputChange}
                />
                <label>Vuelve a ingresarla: </label>
                <input
                  type='password'
                  className='appearance-none block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none'
                  name='password'
                  value={"password"}
                  onChange={inputChange}
                />
              </>
            :
              <></>
            }
            <button className='inline-block w-full px-8 py-4 leading-none text-white bg-four hover:bg-third font-semibold rounded shadow mt-5'>
              Actualizar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfileUser;
