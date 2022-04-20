import React from 'react';
import ideas from '../assets/ideas.jpg';
import student from '../assets/student.jpg';
import think from '../assets/think.jpg';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function Presentation() {
  const navigate = useNavigate();
  return (
    <>
      <article className="grid grid-cols-12 grid-rows-1 py-5 px-3 md:lg-0 md:lg-0">
        <div className="flex flex-col justify-center items-center col-span-12 md:col-span-7">
          <h1 className="text-5xl font-bold text-center mb-4 xl:text-7xl">
            La era de la preparación universitaria online
          </h1>
          <p className="text-base text-center md:text-lg xl:text-2xl">
            Las mejores formas de resolver exámenes de admisión, disponible para
            ti a toda hora.
          </p>
          <p className="text-base text-center md:text-lg xl:text-2xl">
            La forma más rápida y segura de ingresar a la universidad.
          </p>
          <Button
            name="Compra un plan"
            buttonStyle="px-6 py-2 bg-third rounded-full text-white font-bold h-fit hover:text-third hover:bg-white border-2 w-fit border-third mt-4"
            onClick={()=>{navigate("/comprar")}}
          />
        </div>
        <figure className="flex justify-center col-span-12 md:col-span-5">
          <img className="w-10/12" src={student} alt="" />
        </figure>
      </article>
      <article className="grid grid-cols-12 grid-rows-1 mb-10 xl:mb-14">
        <figure className="col-span-12 md:col-span-6 flex flex-col justify-center items-center p-3 xl:p-0">
          <img className="w-8/12 md:w-3/12 mb-6" src={think} alt="" />
          <figcaption className="font-bold text-xl xl:text-2xl">
            Más de 2000 preguntas resueltas para ti
          </figcaption>
        </figure>
        <figure className="col-span-12 md:col-span-6 flex flex-col justify-center items-center">
          <img
            className="w-8/12 md:w-3/12 mt-6 order-1 md:order-2"
            src={ideas}
            alt=""
          />
          <figcaption className="font-bold text-xl xl:text-2xl order-2 md:order-1">
            Simulacros de admisión personalizables
          </figcaption>
        </figure>
      </article>
    </>
  );
}
