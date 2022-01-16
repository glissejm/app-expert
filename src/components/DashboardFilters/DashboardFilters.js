import React from "react";
import "./DashboardFilters.style.css";
export default function DashboardFilters() {
  return (
    <div className=" container flex flex-col w-1/4" id="dashboard__filters">
      <div className="flex flex-col h-1/2 items-center justify-around p-2">
        <h1>Filtrar por cursos</h1>
        <div>
          <input type="checkbox" value="" id="defaultCheck1" />
          <label for="defaultCheck1">Trigonometría</label>
        </div>
        <div>
          <input type="checkbox" value="" id="defaultCheck2" />
          <label for="defaultCheck2">Álgebra</label>
        </div>

        <div>
          <input type="checkbox" value="" id="defaultCheck3" />
          <label for="defaultCheck3">Geometría</label>
        </div>
        <div>
          <input type="checkbox" value="" id="defaultCheck4" />
          <label for="defaultCheck4">Razonamiento matemático</label>
        </div>
      </div>
      <div className="flex flex-col h-1/2 items-center justify-around pb-8">
        <h2>Filtrar por dificultad</h2>
        <div>
          <input type="checkbox" value="" id="defaultCheck5" />
          <label for="defaultCheck5">Fácil</label>
        </div>
        <div>
          <input type="checkbox" value="" id="defaultCheck6" />
          <label for="defaultCheck6">Medio</label>
        </div>
        <div>
          <input type="checkbox" value="" id="defaultCheck7" />
          <label for="defaultCheck7">Difícil</label>
        </div>
      </div>
    </div>
  );
}
