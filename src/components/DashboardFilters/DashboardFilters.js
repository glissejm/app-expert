import React from 'react';
import './DashboardFilters.style.css';

export default function DashboardFilters() {
  return (
    <section
      className="flex flex-col w-1/4 items-center justify-start"
      id="dashboard__filters"
    >
      <form className="flex flex-col h-2/5 items-center justify-around px-8 mb-4 bg-[#02080F] rounded-xl">
        <h2 className="text-3xl font-bold text-[#AEFEFF]">
          Filtrar por cursos
        </h2>
        <select name="courses" id="courses" form="coursesform" multiple>
          <option value="algebra">Álgebra</option>
          <option value="geometria">Geometría</option>
          <option value="trigonometria">Trigonometría</option>
          <option value="raz-mate">Razonamiento matemático</option>
        </select>
      </form>
      <form className="flex flex-col h-2/5 items-center justify-around px-8 bg-[#02080F] rounded-xl">
        <h2 className="text-3xl font-bold text-[#AEFEFF]">
          Filtrar por cursos
        </h2>
        <select name="dificult" id="courses" form="dificultform" multiple>
          <option value="facil">Fácil</option>
          <option value="medio">Medio</option>
          <option value="dificil">Difícil</option>
        </select>
      </form>
    </section>
  );
}
