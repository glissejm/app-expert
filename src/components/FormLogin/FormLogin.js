import React from 'react';
import ButtonLogin from './../ButtonLogin';
import InputLogin from './../InputLogin';

export default function FormLogin() {
  return (
        
    <form class="mt-6" action="#" methos="POST">
        
        <div>
            <InputLogin type="email" name="Ingresar Usuario" />
        </div>
        <div class="mt-4">
            <InputLogin type="password" name="Ingresar Contraseña" />    
        </div>

        <div class="mb-8 form-check">
            <input type="checkbox" 
                    name="connected" 
                    class="form-check-input mt-3" />
            <label for="connected" class="form-check-label mx-2">Mantenerme conectado</label>
        </div>

        <ButtonLogin name="Iniciar Sesión" />

        <hr class="my-6 border-gray-300 w-full" />

        <button type="button" class="w-full block bg-blueSecondary hover:bg-white focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-2 border border-gray-300">
            <div class="flex items-center justify-center">
                <span class="ml-4">
                Iniciar sesion con Google
                </span>
            </div>
        </button>
        <ButtonLogin name="Registrarse" />
        
    </form>
  );
}
