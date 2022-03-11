import React, { useState } from "react";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import Button from "../../components/Button";
import CoursesDetail from "../../components/CoursesDetail";
import NavbarClient from "../../components/NavbarClient/NavbarClient";
import "react-reflex/styles.css";

const Exercise = () => {
  const [resizeProps, setResizeProps] = useState(() => { });

  return (
    <>
      <NavbarClient />
      <div className="flex justify-end items-center gap-x-2 py-4 px-6">
        <h2 className="text-third mr-4  text-xl">5:30</h2>
        <Button name="Iniciar / Detener" buttonStyle="border border-third rounded-full py-1 px-4 bg-secondary text-third hover:bg-white" />
        <Button name="Siguiente pregunta" buttonStyle="border border-third rounded-full py-1 px-4 bg-secondary text-third hover:bg-white" />
        <Button name="Finalizar" buttonStyle="border border-third rounded-full py-1 px-4 bg-secondary text-third hover:bg-white" />
      </div>

      <div className="m-0 p-0 h-screen">
        <ReflexContainer className="max-h-full overflow-auto" orientation="vertical">
          <ReflexElement>
            <ReflexContainer orientation="vertical">
              <ReflexElement {...resizeProps}>
                <ReflexContainer orientation="horizontal" className={`drop-shadow-md border-2 bg-slate-200 border-third rounded-lg col-span-6 resize`}>
                  <ReflexElement {...resizeProps}>
                      <CoursesDetail
                        title="Geometría - Hallando la recta"
                        content="Se tiene un triángulo cuyos vértices son: A(-2,1) B(4,7) C(6,-3). Halla la ecuación de la recta que pasa por el vértice A y es paralela al lado BC."
                      />
                  </ReflexElement>
                  <ReflexSplitter propagate={true} {...resizeProps} />
                  <ReflexElement {...resizeProps}>
                      <CoursesDetail
                        title="Nuestra solución"
                        content="Se tiene un triángulo cuyos vértices son: A(-2,1) B(4,7) C(6,-3). Halla la ecuación de la recta que pasa por el vértice A y es paralela al lado BC."
                      />
                  </ReflexElement>
                </ReflexContainer>
              </ReflexElement>
              <ReflexSplitter {...resizeProps} />
              <ReflexElement {...resizeProps}>
              <ReflexContainer orientation="horizontal" className={`drop-shadow-md border-2 bg-slate-200 border-third rounded-lg col-span-6 resize`}>
                  <ReflexElement {...resizeProps}>
                      <CoursesDetail
                        title="Nuestra respuesta"
                        content="Se tiene un triángulo cuyos vértices son: A(-2,1) B(4,7) C(6,-3). Halla la ecuación de la recta que pasa por el vértice A y es paralela al lado BC."
                        contentStyle="blur-sm"
                      />
                  </ReflexElement>
                  <ReflexSplitter propagate={true} {...resizeProps} />
                  <ReflexElement {...resizeProps}>
                      <CoursesDetail
                        title="Video solución"
                      />
                  </ReflexElement>
                </ReflexContainer>
              </ReflexElement>
            </ReflexContainer>
          </ReflexElement>
        </ReflexContainer>
      </div>
    </>
  );
};

export default Exercise;
