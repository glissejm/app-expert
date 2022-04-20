import React from 'react';
import description from '../assets/description.jpg';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function Description() {
  const navigate = useNavigate();
  return (
    <>
      <article className="flex flex-col justify-center items-center py-12 xl:py-20 bg-stone-100">
        <h2 className="px-3 xl:px-96 font-bold text-center mb-6 text-2xl xl:text-4xl">
          Un entorno perfecto creado para que aprendas a tu ritmo.
        </h2>
        <figure className="w-full">
          <img className="h-96 w-full object-cover" src={description} alt="" />
        </figure>
        <h2 className="px-3 xl:px-0 font-bold text-center pt-6 text-4xl xl:text-6xl">
          ¿Por qué Ex-pert?
        </h2>
        <p className="px-3 xl:px-96 text-center py-4 xl:py-10 xl:text-2xl">
          Sabemos que podemos olvidar lo que aprendemos, aprender las mejores y
          más rápidas formas de resolver problemas es algo que lleva práctica,
          por eso te traemos las mejores soluciones siempre disponibles para ti.
        </p>
        <Button
          name="Registrarse"
          buttonStyle="px-6 py-2 bg-third rounded-full text-white font-bold h-fit hover:bg-white hover:text-third  border-2 w-fit border-black mt-4"
          onClick={()=>{navigate("/register")}}
        />
      </article>
    </>
  );
}
