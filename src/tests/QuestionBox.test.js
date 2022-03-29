import React from "react";
//pruebas con dom
import "@testing-library/jest-dom/extend-expect";

//podemos renderizar un componente y ver que cosa se ha renderizado
import { render } from "@testing-library/react";

//componente sobre el que se hace la prueba
import QuestionBox from "../components/QuestionBox";

//we need router dom for this test
import { MemoryRouter } from "react-router-dom";

test("render content", () => {
  const props = {
    name: "Nueva pregunta",
    course: "Nuevo curso",
    topic: "topico nuevo",
    difficult: "Dificultad nueva",
    id: "12345leonardoid#",
  };

  const component = render(
    <MemoryRouter>
      <QuestionBox
        name={props.name}
        course={props.course}
        topic={props.topic}
        difficult={props.difficult}
        id={props.id}
      />
    </MemoryRouter>
  );

  expect(component.container).toHaveTextContent(props.name);
});
