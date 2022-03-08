import React,{useState, useEffect} from 'react';
import { apiClient } from '../../store/axiosApi';
import './QuestionList.style.css';
import QuestionBox from '../QuestionBox';

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
    id: 20,
    name: 'Recta dorada',
    topic: 'Geometría',
    difficult: 'Medio',
  },
];

export default function QuestionList() {
  const [listquestion, setListquestion] = useState([]);
  const getQuestions = async () => {
    const response = await apiClient("/dashboard","GET");
    const data = response.data;
    setListquestion(data);
  }
  useEffect(() => {
    getQuestions();
  }, [])

  const listQuestion = listquestion.map((question) => (
    <QuestionBox
      className="question"
      key={question.id}
      name={question.name}
      topic={question.topic}
      difficult={question.difficult}
    />
  ));
  return (
    <section className="w-3/4 flex flex-col items-center">
      
      <div id="box__color" className="bg-third rounded-xl">
        <div className='flex justify-around text-white font-bold text-lg'> <h3>Nombre</h3> <h3>Tema / Curso</h3> <h3>Dificultad</h3></div>
        <div
          className="bg-third  flex flex-col items-center"
          id="question__box"
        >
          {listQuestion}
          <button className="question bg-third border rounded-full text-secondary hover:text-third hover:bg-white text-center py-2">Cargar más preguntas</button>
        </div>
      </div>
    </section>
  );
}
