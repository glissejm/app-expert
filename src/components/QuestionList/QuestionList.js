import React from 'react';
import './QuestionList.style.css';

const Questions = [
  {
    id: 1,
    name: 'Ecuación 2',
    topic: 'Funciones, Álgebra',
    difficult: 'Difícil',
  },
  {
    id: 2,
    name: 'Prima invertido',
    topic: 'Primas y rectas, Geometría',
    difficult: 'Fácil',
  },
  {
    id: 3,
    name: 'Armando cubos',
    topic: 'Funciones inversas, Álgebra',
    difficult: 'Difícil',
  },
  {
    id: 4,
    name: 'Armando cubos',
    topic: 'Funciones inversas, Álgebra',
    difficult: 'Difícil',
  },
  {
    id: 5,
    name: 'Armando cubos',
    topic: 'Funciones inversas, Álgebra',
    difficult: 'Difícil',
  },
  {
    id: 6,
    name: 'Armando cubos',
    topic: 'Funciones inversas, Álgebra',
    difficult: 'Difícil',
  },
  {
    id: 7,
    name: 'Armando cubos',
    topic: 'Funciones inversas, Álgebra',
    difficult: 'Difícil',
  },
  {
    id: 8,
    name: 'Armando cubos',
    topic: 'Funciones inversas, Álgebra',
    difficult: 'Difícil',
  },
  {
    id: 9,
    name: 'Armando cubos',
    topic: 'Funciones inversas, Álgebra',
    difficult: 'Difícil',
  },
  {
    id: 10,
    name: 'Armando cubos',
    topic: 'Funciones inversas, Álgebra',
    difficult: 'Difícil',
  },
  {
    id: 11,
    name: 'Armando cubos',
    topic: 'Funciones inversas, Álgebra',
    difficult: 'Difícil',
  },
  {
    id: 12,
    name: 'Armando cubos',
    topic: 'Funciones inversas, Álgebra',
    difficult: 'Difícil',
  },
  {
    id: 13,
    name: 'Armando cubos',
    topic: 'Funciones inversas, Álgebra',
    difficult: 'Difícil',
  },
  {
    id: 14,
    name: 'Armando cubos',
    topic: 'Funciones inversas, Álgebra',
    difficult: 'Difícil',
  },
  {
    id: 15,
    name: 'Armando cubos',
    topic: 'Funciones inversas, Álgebra',
    difficult: 'Difícil',
  },
  {
    id: 16,
    name: 'Armando cubos',
    topic: 'Funciones inversas, Álgebra',
    difficult: 'Difícil',
  },
  {
    id: 17,
    name: 'Armando cubos',
    topic: 'Funciones inversas, Álgebra',
    difficult: 'Difícil',
  },
  {
    id: 18,
    name: 'Armando cubos',
    topic: 'Funciones inversas, Álgebra',
    difficult: 'Difícil',
  },
  {
    id: 19,
    name: 'Armando cubos',
    topic: 'Funciones inversas, Álgebra',
    difficult: 'Difícil',
  },
  {
    id: 19,
    name: 'Recta dorada',
    topic: 'Geometría',
    difficult: 'Medio',
  },
];

const listQuestion = Questions.map((question) => (
  <button
    className="rounded-full flex items-center place-content-around  bg-[#072227]"
    id="question"
    type="button"
    key={question.id}
  >
    <h3 className="font-bold text-[#AEFEFF]">{question.name}</h3>
    <p className="text-white">{question.topic}</p>
    <p className="text-white">{question.difficult}</p>
  </button>
));

export default function QuestionList() {
  return (
    <section className="w-3/4 flex flex-col items-center">
      <div id="box__color" className="bg-[#02080F] rounded-xl">
        <div
          className="bg-[#02080F]  flex flex-col items-center"
          id="question__box"
        >
          {listQuestion}
        </div>
      </div>
    </section>
  );
}
