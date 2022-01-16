import React from "react";
import "./QuestionList.style.css";

export default function QuestionList() {
  return (
    <div className="w-3/4 flex flex-col items-center">
      <h1>Comienza a practicar</h1>
      <div
        className="bg-[#02080F] rounded-xl flex flex-col items-center"
        id="question__box"
      >
        <button
          class="rounded-full flex items-center place-content-around bg-cyan-900"
          id="question"
        >
          <div class="font-bold text-emerald-200">Armando cubos</div>
          <div>Funciones inversas, Álgebra</div>
          <div>Difícil</div>
        </button>
        <button
          class="rounded-full flex items-center place-content-around bg-cyan-900"
          id="question"
        >
          <div class="font-bold text-emerald-200">Armando cubos</div>
          <div>Funciones inversas, Álgebra</div>
          <div>Difícil</div>
        </button>
        <button
          class="rounded-full flex items-center place-content-around bg-cyan-900"
          id="question"
        >
          <div class="font-bold text-emerald-200">Armando cubos</div>
          <div>Funciones inversas, Álgebra</div>
          <div>Difícil</div>
        </button>
        <button
          class="rounded-full flex items-center place-content-around bg-cyan-900"
          id="question"
        >
          <div class="font-bold text-emerald-200">Armando cubos</div>
          <div>Funciones inversas, Álgebra</div>
          <div>Difícil</div>
        </button>
        <button
          class="rounded-full flex items-center place-content-around bg-cyan-900"
          id="question"
        >
          <div class="font-bold text-emerald-200">Armando cubos</div>
          <div>Funciones inversas, Álgebra</div>
          <div>Difícil</div>
        </button>
      </div>
    </div>
  );
}
