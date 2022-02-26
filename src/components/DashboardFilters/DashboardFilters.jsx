import React from "react";
import "./DashboardFilters.style.css";

export default function DashboardFilters() {
  return (
    <section
      className="flex flex-col w-1/4 items-center justify-start"
    >
      <button className=" bg-[#02080F] py-2 px-6 rounded-2xl text-[#AEFEFF]">Limpiar filtros</button>
      <div class="flex flex-col items-center my-6 mx-24 py-6 px-6 bg-[#02080F] rounded-2xl">
        <div className="text-white text-xl mb-2 text-center">Filtrar por curso</div>
        <div>
          <div className="form-check">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#AEFEFF] bg-[#02080F] checked:bg-[#AEFEFF] checked:border-[#AEFEFF] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="geometria" name="filterCourse" id="scf1"/>
            <label className="form-check-label inline-block text-[#AEFEFF]" for="scf1">
              Geometría
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#AEFEFF] bg-[#02080F] checked:bg-[#AEFEFF] checked:border-[#AEFEFF] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="algebra" name="filterCourse" id="scf2"/>
            <label className="form-check-label inline-block text-[#AEFEFF]" for="scf2">
              Álgebra
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#AEFEFF] bg-[#02080F] checked:bg-[#AEFEFF] checked:border-[#AEFEFF] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="trigonometria" name="filterCourse" id="scf3"/>
            <label className="form-check-label inline-block text-[#AEFEFF]" for="scf3">
              Trigonometría
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#AEFEFF] bg-[#02080F] checked:bg-[#AEFEFF] checked:border-[#AEFEFF] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="aritmetica" name="filterCourse" id="scf4"/>
            <label className="form-check-label inline-block text-[#AEFEFF]" for="scf4">
              Aritmética
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#AEFEFF] bg-[#02080F] checked:bg-[#AEFEFF] checked:border-[#AEFEFF] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="rm" name="filterCourse" id="scf5"/>
            <label className="form-check-label inline-block text-[#AEFEFF]" for="scf5">
              R. Matemático
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#AEFEFF] bg-[#02080F] checked:bg-[#AEFEFF] checked:border-[#AEFEFF] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="quimica" name="filterCourse" id="scf6"/>
            <label className="form-check-label inline-block text-[#AEFEFF]" for="scf6">
              Química
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#AEFEFF] bg-[#02080F] checked:bg-[#AEFEFF] checked:border-[#AEFEFF] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="fisica" name="filterCourse" id="scf7"/>
            <label className="form-check-label inline-block text-[#AEFEFF]" for="scf7">
              Física
            </label>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center mx-24 py-6 px-6 bg-[#02080F] rounded-2xl">
        <div className="text-white text-xl mb-3 text-center">Filtrar por dificultad</div>
        <div>
          <div className="form-check">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#AEFEFF] bg-[#02080F] checked:bg-[#AEFEFF] checked:border-[#AEFEFF] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="Fácil" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label className="form-check-label inline-block text-[#AEFEFF]" for="flexRadioDefault1">
              Fácil
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#AEFEFF] bg-[#02080F] checked:bg-[#AEFEFF] checked:border-[#AEFEFF] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="Medio" name="flexRadioDefault" id="flexRadioDefault2"/>
            <label className="form-check-label inline-block text-[#AEFEFF]" for="flexRadioDefault2">
              Medio
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#AEFEFF] bg-[#02080F] checked:bg-[#AEFEFF] checked:border-[#AEFEFF] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="Difícil" name="flexRadioDefault" id="flexRadioDefault3"/>
            <label className="form-check-label inline-block text-[#AEFEFF]" for="flexRadioDefault3">
              Difícil
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
