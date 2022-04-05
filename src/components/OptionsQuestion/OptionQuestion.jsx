import React, {useState} from 'react'
import Markdown from '../../utils/Markdown'

export default function OptionQuestion({opciones}) {
  const [selected, setSelected] = useState("");
  const [answer, setAnswer] = useState(false);
  const initialValidate = {show: false, value: "Validar mi respuesta con el juez"};
  const [validate, setValidate] = useState(initialValidate); 
  const handleOption = (correct) => {
    correct ? setAnswer(true): setAnswer(false);
  }

  const resetSelected = () =>{
    setSelected("");
    setValidate(initialValidate);
  }
  const handleJudge = () => {
    validate.show===false? setValidate({show:true, value:"Ocultar el juez"}): setValidate(initialValidate);
  }
  //listo of options to rendered
  const optionsObj = opciones.map((option)=>{
  return(
  <div key={option._id} className="form-check flex items-center">
    <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-third bg-white checked:bg-green-400 checked:border-green-900 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value={option.name} checked={selected===option.name} onChange={(e) => {setSelected(e.target.value);handleOption(option.correct)}} name="selected" id={option._id} />
    <label className="form-check-label inline-block" htmlFor={option._id}>
      <div className='flex justify-center items-center text-xl m-2'>
        <p className='mr-4'>{option.name}) </p>
        <Markdown>{`${String.raw`${option.value}`}`}</Markdown>
      </div>
    </label>
  </div>)})

  return (
    <>
      <div className='bg-third px-3 py-2 text-slate-200 font-bold flex justify-between'>
        <h3>Opciones</h3>
        {selected!==""?
        <button onClick={resetSelected}>Limpiar mi elección</button>
        :
        <></> 
        }
        {validate.show ? 
        <>
          {
            answer ?
            <h3 className='text-green-400'>Respuesta Correcta</h3>
          :
            <h3 className=' text-rose-500'>Respuesta Incorrecta</h3>
          }
        </>
        :
        <></>
        }
        <button className='disabled:text-slate-500 text-green-500' onClick={handleJudge} disabled={selected===""}>{validate.value}</button>
      </div>
      <div className={'px-3 py-4 flex flex-col items-center'}>
        {optionsObj}
      </div>
    </>
  )
}
