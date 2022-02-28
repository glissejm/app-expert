import React from 'react';

export default function QuestionBox({name, topic, difficult }) {
  return (
    <button
      className="question rounded-full flex items-center place-content-around bg-third border-secondary hover:border-orange text-white hover:text-orange border"
      type="button"
    >
      <h3>{name}</h3>
      <p>{topic}</p>
      <p className="text-orange">{difficult}</p>
    </button>
  );
}
