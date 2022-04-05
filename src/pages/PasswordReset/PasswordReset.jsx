import React from 'react';
import Logo from '../../assets/Logo1.png';
import FormReset from '../../components/FormReset/FormReset';

function PasswordReset() {
  return (
    <div>
      <div className="flex flex-col md:flex-row h-screen items-center">
        <div className="h-screen hidden lg:block bg-secondary  md:w-1/2 xl:w-5/12 ">
          <div className="grid place-items-center h-screen">
            <div>
              <img src={Logo} width="500" alt="Logo" />
              <h1 className="text-xl text-center font-bold pt-8 text-third">
                La forma mas rapida y segura de ingresar a la universidad
              </h1>
            </div>
          </div>
        </div>

        <div
          className=" bg-third w-full flex-col md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-7/12 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center  pb-48"
        >
          <div className="w-5/6 mt-5 pt-40">
            <div className=" bg-white w-full h-90 py-8 px-8   ">
              <div className="pb-10 px-10 border-4 border-dark">
                <h1 className="text-xl pt-5 md:text-2xl font-bold leading-tight mt-12 flex justify-center">
                  {' '}
                  Bienvenido
                </h1>
                <FormReset />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;