import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeQuery } from '../../store/actions/query.action';
import "./DashboardFilters.style.css";

export default function DashboardFilters() {
  const dispatch = useDispatch();
  const [course, setCourse] = useState("");
  const [difficult, setDifficult] = useState("");

  const handleCourseChange = (e) => {
    setCourse(e.target.value);  
  }

  const handleDifficultChange = (e) => {
    setDifficult(e.target.value)
  }
  const handleValue = () => {
    let query="";
    //pass the query in the string form
    if(course!=="" && difficult!==""){
      query = "/?course="+course+"&difficult="+difficult;
    }else if(difficult==="" && course!==""){
      query = "/?course="+course;
    }else if(course==="" && difficult!==""){
      query = "/?difficult="+difficult;
    }
    //change the query to update the list of questions
    dispatch(changeQuery({value: query}));
  }

  const handleResetFilter = () => {
    setCourse("");
    setDifficult("");
  }
  useEffect(() => {
    handleValue();
  }, [course,difficult])
  return (
    <section
      className="flex flex-col w-1/4 items-center justify-start"
    >
      <div className="flex flex-col items-center my-6 mx-24 py-6 px-6 bg-third rounded-2xl">
        <div className="text-white text-xl mb-2 text-center">Filtrar por curso</div>
        <div>
          <div className="form-check">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-secondary bg-third checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="geometria" name="filterCourse" checked={course==="geometria"} id="scf1" onChange={handleCourseChange}/>
            <label className="form-check-label inline-block text-secondary" htmlFor="scf1">
              Geometría
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-secondary bg-third checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="algebra" name="filterCourse" checked={course==="algebra"} id="scf2" onChange={handleCourseChange}/>
            <label className="form-check-label inline-block text-secondary" htmlFor="scf2">
              Álgebra
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-secondary bg-third checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="trigonometria" name="filterCourse" checked={course==="trigonometria"} id="scf3" onChange={handleCourseChange}/>
            <label className="form-check-label inline-block text-secondary" htmlFor="scf3">
              Trigonometría
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-secondary bg-third checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="aritmetica" name="filterCourse" checked={course==="aritmetica"} id="scf4" onChange={handleCourseChange}/>
            <label className="form-check-label inline-block text-secondary" htmlFor="scf4">
              Aritmética
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-secondary bg-third checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="rm" name="filterCourse" checked={course==="rm"} id="scf5" onChange={handleCourseChange}/>
            <label className="form-check-label inline-block text-secondary" htmlFor="scf5">
              R. Matemático
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-secondary bg-third checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="quimica" name="filterCourse" checked={course==="quimica"} id="scf6" onChange={handleCourseChange}/>
            <label className="form-check-label inline-block text-secondary" htmlFor="scf6">
              Química
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-secondary bg-third checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="fisica" name="filterCourse"checked={course==="fisica"} id="scf7" onChange={handleCourseChange}/>
            <label className="form-check-label inline-block text-secondary" htmlFor="scf7">
              Física
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mx-24 py-6 px-6 bg-third rounded-2xl">
        <div className="text-white text-xl mb-3 text-center">Filtrar por dificultad</div>
        <div>
          <div className="form-check">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-secondary bg-third checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="facil" name="filterDifficult" checked={difficult==="facil"} onChange={handleDifficultChange} id="flexRadioDefault1"/>
            <label className="form-check-label inline-block text-secondary" htmlFor="flexRadioDefault1">
              Fácil
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-secondary bg-third checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="medio" name="filterDifficult" checked={difficult==="medio"} onChange={handleDifficultChange} id="flexRadioDefault2"/>
            <label className="form-check-label inline-block text-secondary" htmlFor="flexRadioDefault2">
              Medio
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="dificil" name="filterDifficult" checked={difficult==="dificil"} onChange={handleDifficultChange} id="flexRadioDefault3"/>
            <label className="form-check-label inline-block text-secondary" htmlFor="flexRadioDefault3">
              Difícil
            </label>
          </div>
        </div>
      </div>
      <button onClick={handleResetFilter} className="mt-4 py-2 px-6 rounded-2xl text-white border-2 border-third font-bold bg-third hover:bg-white hover:text-third">Limpiar filtros</button>
    </section>
  );
}
