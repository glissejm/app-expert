import React from "react";
import LogoPapel from "../../assets/hoja_papel.png";
import Logo1 from "../../assets/Logo1.png";

function Login() {
  return (
    <div>
      <div class="flex flex-col md:flex-row h-screen items-center">
        <div class="h-screen hidden lg:block bg-primaryC  md:w-1/2 xl:w-5/12 ">
            <div class="grid place-items-center h-screen">
                <div  >
                    <img src={Logo1} width="500" alt="" />
                    <h1 class="text-xl font-bold pt-8" >La forma mas rapida y segura de ingresar a la universidad</h1>
                </div>
            </div>
        </div>

        <div class=" bg-blueDark w-full flex flex-col md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-7/12 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center  pb-48">
            <div class=" absolute top-0 ">
                <img src={LogoPapel} width="300" alt="" />
            </div>
            <div class="w-5/6 mt-5 pt-40" >
                <div class=" bg-white w-full h-90 py-8 px-8   ">
                    <div class="pb-10 px-10 border-4 border-dark">
                        <h1 class="text-xl pt-5 md:text-2xl font-bold leading-tight mt-12 flex justify-center"> Bienvenido</h1>
    
                        <form class="mt-6" action="#" methos="POST">
                            <div>
                                <input type="email" 
                                        placeholder="Ingresar usuario" 
                                        class=" bg-grayC w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                            </div>
                            <div class="mt-4">
                                <input type="password" 
                                        placeholder="Ingresar contraseña" 
                                        class=" bg-grayC w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                            </div>
                            <div class="mb-4 form-check">
                                <input type="checkbox" 
                                        name="connected" 
                                        class="form-check-input mt-3" />
                                <label for="connected" class="form-check-label mx-2">Mantenerme conectado</label>
                            </div>
                            <button type="submit" class="w-full block bg-primaryC hover:bg-primaryC focus:bg-primaryC font-semibold rounded-lg
                        px-4 py-2 mt-6 border border-dark">Iniciar Sesion</button>
        
        
                            <hr class="my-6 border-gray-300 w-full" />
        
                            <button type="button" class="w-full block bg-blueC hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-2 border border-gray-300">
                                <div class="flex items-center justify-center">
                                    <span class="ml-4">
                                    Iniciar sesion con Google
                                    </span>
                                </div>
                            </button>
                            <button type="submit" class="w-full block bg-primaryC hover:bg-primaryC focus:bg-primaryC font-semibold rounded-lg
                        px-4 py-2 mt-4 border border-dark">Registrarse</button>
                            
                        </form>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
  </div>
  );
}

export default Login;
