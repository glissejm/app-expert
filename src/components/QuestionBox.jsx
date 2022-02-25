import React from 'react';

export default function QuestionBox({ id ,name, topic, difficult }) {
  return (
    <button
      className="rounded-full flex items-center place-content-around  bg-[#072227]"
      id="question"
      type="button"
    >
      <h3 className="font-bold text-[#AEFEFF]">{name}</h3>
      <p className="text-white">{topic}</p>
      <p className="text-white">{difficult}</p>
    </button>
  );
}
