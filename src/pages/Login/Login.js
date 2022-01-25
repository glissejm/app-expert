import React from 'react';
import LogoPapel from '../../assets/hoja_papel.png';
import Logo1 from '../../assets/Logo1.png';
import FormLogin from '../../components/FormLogin/FormLogin';

function Login() {
  return (
    <div>
      <div class="flex flex-col md:flex-row h-screen items-center">
        <div class="h-screen hidden lg:block bg-blueThird  md:w-1/2 xl:w-5/12 ">
          <div class="grid place-items-center h-screen">
            <div>
              <img src={Logo1} width="500" alt="" />
              <h1 class="text-xl font-bold pt-8">
                La forma mas rapida y segura de ingresar a la universidad
              </h1>
            </div>
          </div>
        </div>

        <div
          class=" bg-bluePrimary w-full flex flex-col md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-7/12 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center  pb-48"
        >
          <div class=" absolute top-0 ">
            <img src={LogoPapel} width="300" class="pb-40" alt="" />
          </div>
          <div class="w-5/6 mt-5 pt-40">
            <div class=" bg-white w-full h-90 py-8 px-8   ">
              <div class="pb-10 px-10 border-4 border-dark">
                <h1 class="text-xl pt-5 md:text-2xl font-bold leading-tight mt-12 flex justify-center">
                  {' '}
                  Bienvenido
                </h1>
                <FormLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
