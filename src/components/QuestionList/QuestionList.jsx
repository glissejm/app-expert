import React,{useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { apiClient } from '../../store/axiosApi';
import QuestionBox from '../QuestionBox';

import './QuestionList.style.css';

export default function QuestionList() {
  const [listquestion, setListquestion] = useState([]);

  const query = useSelector(state=>state.query.value); 
  const getQuestions = async (query= "") => {
    try{
      const response = await apiClient(`/dashboard${query}`,"GET");
      const data = response.data;
      setListquestion(data);
    }catch(e){
      console.log(e);
    }
  };

  useEffect(() => {
    getQuestions(query);
  }, [query])



  const listQuestion = listquestion.map((question) => {
    return(
      <QuestionBox
        className="question"
        id={question._id}
        key={question._id}
        name={question.name}
        course={question.course}
        topic={question.topic}
        difficult={question.difficult}
      />
  )
  });
  return (
    <section className="w-3/4 flex flex-col items-center">
      
      <div id="box__color" className="bg-third rounded-xl">
        <div className='flex justify-around text-white font-bold text-lg'> <h3>Nombre</h3> <h3>Curso / Tema</h3> <h3>Dificultad</h3></div>
        <div
          className="bg-third  flex flex-col items-center"
          id="question__box"
        >
          {listquestion.length === 0? 
            <div className='text-white my-4'>No hay preguntas</div>
            :
            <>
              <div className='pb-6'></div>
              {listQuestion}
              <button className="question bg-third border-4 rounded-full text-white hover:text-third hover:bg-white text-center py-2 shadow-lg">Cargar más preguntas</button>
            </>
          }
          
        </div>
      </div>
    </section>
  );
}
