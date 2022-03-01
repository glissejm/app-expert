import React from 'react';

export default function QuestionBox({name, topic, difficult }) {
  return (
    <button
      className="group question rounded-full flex items-center place-content-around bg-third border-secondary hover:bg-white text-white border py-2 mb-2"
      type="button"
    >
      <h3 className='group-hover:text-third'>{name}</h3>
      <p className='group-hover:text-third'>{topic}</p>
      <section className='flex'>
        <p className="text-white mr-2 group-hover:text-third">{difficult}</p>
        <p className=' text-green-400' >Hecho</p>
      </section>
      

    </button>
  );
}
