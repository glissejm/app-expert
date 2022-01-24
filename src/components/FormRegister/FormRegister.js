import React from 'react';
import ButtonLogin from './../ButtonLogin';
import InputLogin from './../InputLogin';

export default function FormRegister() {
  return (
        
    <form class="mt-6" action="#" methos="POST">
        
        <div>
            <InputLogin type="text" name="Nombre" />
        </div>
        <div class="mt-4">
            <InputLogin type="text" name="Usuario" />    
        </div>
        <div class="mt-4">
            <InputLogin type="text" name="Contraseña" />    
        </div>
        <div class="mt-4 mb-8">
            <InputLogin type="text" name="Repetir Contraseña" />    
        </div>

        <ButtonLogin name="Registrarse" />

        <hr class="my-6 border-gray-300 w-full" />

        <ButtonLogin name="Ya tengo una cuenta" />

        <button type="button" class="w-full block mt-4 bg-blueSecondary hover:bg-white focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-2 border border-gray-300">
            <div class="flex items-center justify-center">
                <span class="ml-4">
                Iniciar sesion con Google
                </span>
            </div>
        </button>
        
        
    </form>
  );
}
