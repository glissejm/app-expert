import React , {useState}from 'react'
import Markdown from '../../utils/Markdown'
import "./SolutionQuestion.style.css"

export default function SolutionQuestion({solutionText}) {
  const [active, setActive] = useState({blur: "blur-sm",value:"Mostrar solución"});
  const handleBlur = () =>{
    active.blur==="" ? setActive({blur:"blur-sm",value:"Mostrar solución"}): setActive({blur:"",value:"Ocultar solución"});
  }

  return (
    <>
      <div className='bg-third px-3 py-2 flex justify-between text-slate-200 font-bold'>
        <h3>Nuestra solución</h3>
        <button onClick={handleBlur}>{active.value}</button>
      </div>
      <div className={`px-3 py-2 text-justify flex-col ${active.blur}`} id="marks">
        <Markdown>
        {`${String.raw`${solutionText}`}`}
        </Markdown>
      </div>
    </>
  )
}
