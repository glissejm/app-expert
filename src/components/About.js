import React from 'react';
import about from '../assets/about.svg';

const About = () => {
  return (
    <>
      <article className='grid grid-cols-12 grid-rows-1 py-5 px-3 md:lg-0 md:lg-0'>
        <div className='flex flex-col justify-center items-center col-span-12 md:col-span-7'>
          <h1 className='text-5xl font-bold text-center mb-4 xl:text-7xl'>
            Nosotros
          </h1>
          <p className='text-base text-center md:text-lg xl:text-2xl'>
            Las mejores formas de resolver exámenes de admisión, disponible para
            ti a toda hora.
          </p>
          <p className='text-base text-center md:text-lg xl:text-2xl'>
            La forma más rápida y segura de ingresar a la universidad.
          </p>
        </div>
        <figure className='flex justify-center col-span-12 md:col-span-5'>
          <img className='w-10/12' src={about} alt='' />
        </figure>
      </article>
    </>
  );
};

export default About;
