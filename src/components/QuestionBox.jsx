import React from 'react';
import { Link } from 'react-router-dom';
export default function QuestionBox({name, course, topic, difficult,id}) {
  return (
      <Link className="group question rounded-full flex items-center place-content-around bg-third border-secondary hover:bg-white text-white border py-2 mb-2" to={{pathname: `${id}`}}>
        <h3 className='group-hover:text-third'>{name}</h3>
        <p className='group-hover:text-third text-sm'><span>{course}</span> / <span>{topic}</span></p>
        <section className='flex'>
          <p className="text-white mr-2 group-hover:text-third">{difficult}</p>
          <p className=' text-green-400' >Hecho</p>
        </section>
      </Link>
  );
}
