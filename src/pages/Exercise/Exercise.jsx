import React from "react";
import Button from "../../components/Button";
import CoursesDetail from "../../components/CoursesDetail";
import NavbarClient from "../../components/NavbarClient/NavbarClient";

export default function Exercise() {
  return (
    <>
      <NavbarClient />
      <div className="flex justify-end items-center gap-x-2 py-4 px-6">
        <h2 className="text-third mr-4  text-xl">5:30</h2>
        <Button name="Iniciar / Detener" buttonStyle="border border-black rounded-full py-1 px-4 bg-third text-secondary hover:bg-primary" />
        <Button name="Finalizar" buttonStyle="border border-black rounded-full py-1 px-4 bg-third text-secondary hover:bg-primary" />
      </div>
      <section className="grid grid-cols-12 grid-rows-2 gap-4 px-6 pt-1">
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
