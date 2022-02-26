import React from 'react';

export default function QuestionBox({name, topic, difficult }) {
  return (
    <button
      className="question rounded-full flex items-center place-content-around  bg-[#072227]"
      type="button"
    >
      <h3 className="text-[#AEFEFF]">{name}</h3>
      <p className="text-white">{topic}</p>
      <p className="text-white">{difficult}</p>
    </button>
  );
}
