import React from 'react'
import Markdown from '../../utils/Markdown'
export default function VideoSolution(){
  return (
    <>
      <div className='bg-third px-3 py-2 text-slate-200 font-bold'>
        <h3>Video Solución</h3>
      </div>
      <div className={'px-3 py-2 text-justify'}>
        <Markdown>
        {`${String.raw`${"Solucion en video, falta agregar el embed y el url en la base de datos"}`}`}
        </Markdown>
      </div>
    </>
  )
}
