//this component should be show all questions that the user solved until now

import { useEffect,useState } from "react"
import { apiClient } from "../../store/axiosApi";

export default function ShowProgress() {

  const [listProgress , setListProgress] = useState([]);
  const handleProgress = async () => {
    try {
      const {data}  = await apiClient("/progress","GET");
      setListProgress(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    handleProgress();
  }, [])

  const arrayProgress = listProgress.map((question)=>(
    <section className="grid grid-cols-4 gap-4 pb-4 align-middle" >
      <div>{question.name}</div>
      <div>{question.course}</div>
      <div>{question.topic}</div>
      <div>{question.difficult}</div>
    </section>
  ))
  return (
    <section className="p-4 bg-third text-white w-3/4 flex flex-col content-center text-center border  rounded-xl">
      <h2 className=" text-2xl  w-full pb-6">Tu progreso</h2>
      <section className="grid grid-cols-4 gap-4 pb-2" >
        <div>Nombre</div>
        <div>Curso</div>
        <div>Tema</div>
        <div>Dificultad</div>
      </section>
      <hr className="mb-2"/>
      {arrayProgress.length === 0?
        <div>No hay progreso</div>
        :
        <>
          {arrayProgress}
        </>
      }
    </section>
  )
}
