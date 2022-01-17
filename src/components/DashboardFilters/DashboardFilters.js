import React from 'react';
import './DashboardFilters.style.css';

export default function DashboardFilters() {
  return (
    <div className=" container flex flex-col w-1/4" id="dashboard__filters">
      <div className="flex flex-col h-1/2 items-center justify-around p-2">
        <div className="text-3xl font-bold">Filtrar por cursos</div>
        <div className="text-xl form-check">
          <label htmlFor="defaultCheck1">
            {' '}
            <input
              className="form-check-input h-4 w-4 border border-white checked:bg-[#072227] checked:border-[#072227]"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />{' '}
            Trigonometría
          </label>
        </div>
        <div className="text-xl">
          <label htmlFor="defaultCheck2">
            {' '}
            <input
              className="form-check-input h-4 w-4 border border-black m-2"
              type="checkbox"
              value=""
              id="defaultCheck2"
            />
            Álgebra
          </label>
        </div>

        <div className="text-xl">
          <label htmlFor="defaultCheck3">
            {' '}
            <input
              className="form-check-input h-4 w-4 border border-black m-2"
              type="checkbox"
              value=""
              id="defaultCheck3"
            />
            Geometría
          </label>
        </div>
        <div className="text-xl">
          <label htmlFor="defaultCheck4">
            {' '}
            <input
              className="form-check-input h-4 w-4 border border-black m-2"
              type="checkbox"
              value=""
              id="defaultCheck4"
            />
            Razonamiento matemático
          </label>
        </div>
      </div>
      <div className="flex flex-col h-1/2 items-center justify-around pb-8">
        <div className="text-3xl font-bold">Filtrar por dificultad</div>
        <div className="text-xl">
          <label htmlFor="defaultCheck5">
            {' '}
            <input
              className="form-check-input h-4 w-4 border border-black m-2"
              type="checkbox"
              value=""
              id="defaultCheck5"
            />
            Fácil
          </label>
        </div>
        <div className="text-xl">
          <label htmlFor="defaultCheck6">
            {' '}
            <input
              className="form-check-input h-4 w-4 border border-black m-2"
              type="checkbox"
              value=""
              id="defaultCheck6"
            />
            Medio
          </label>
        </div>
        <div className="text-xl">
          <label htmlFor="defaultCheck7">
            {' '}
            <input
              className="form-check-input h-4 w-4 border border-black m-2"
              type="checkbox"
              value=""
              id="defaultCheck7"
            />
            Difícil
          </label>
        </div>
      </div>
    </div>
  );
}
