import React from 'react';
import Button from '../../components/Button';
import CoursesDetail from '../../components/CoursesDetail';
import NavbarClient from '../../components/NavbarClient/NavbarClient';

export default function Exercise() {
  return (
    <>
      <NavbarClient />
      <div className="flex justify-end gap-x-2 py-4 px-6">
        <Button
          name="5:30"
          buttonStyle="bg-transparent border border-black hover:bg-transparent"
        />
        <Button name="Iniciar/Detener" buttonStyle="border border-black" />
        <Button name="Finalizar" buttonStyle="border border-black" />
      </div>
      <section className="grid grid-cols-12 grid-rows-2 gap-4 px-6 py-5">
        <CoursesDetail
          title="Geometría - Hallando la recta"
          content="Se tiene un triángulo cuyos vértices son: A(-2,1) B(4,7) C(6,-3). Halla la ecuación de la recta que pasa por el vértice A y es paralela al lado BC."
          windowStyle="col-span-6 resize overflow-auto h-80"
        />
        <CoursesDetail
          title="Nuestra solución"
          content="Se tiene un triángulo cuyos vértices son: A(-2,1) B(4,7) C(6,-3). Halla la ecuación de la recta que pasa por el vértice A y es paralela al lado BC."
          windowStyle="col-span-6 resize overflow-auto"
        />
        <CoursesDetail
          title="Nuestra respuesta"
          content="Se tiene un triángulo cuyos vértices son: A(-2,1) B(4,7) C(6,-3). Halla la ecuación de la recta que pasa por el vértice A y es paralela al lado BC."
          windowStyle="col-span-6 resize overflow-auto"
          contentStyle="blur-sm"
        />
        <CoursesDetail
          title="Video solución"
          windowStyle="col-span-6 resize overflow-auto"
        />
      </section>
    </>
  );
}
