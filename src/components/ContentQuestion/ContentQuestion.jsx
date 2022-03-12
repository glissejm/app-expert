import React from 'react'
import Markdown from '../../utils/Markdown'

export default function ContentQuestion({name,questionText}){
  return (
    <>
      <div className='bg-third px-3 py-2 text-slate-200 font-bold'>
        <h3>{name}</h3>
      </div>
      <div className={'px-3 py-2 text-justify'}>
        <Markdown>
        {`${String.raw`${questionText}`}`}
        </Markdown>
      </div>
    </>
  )
}
