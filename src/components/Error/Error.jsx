import React,{useContext} from 'react'
import ErrorContext from './ErrorContext'

export const Error = () => {
  const {errorMessage,setErrorMessage} = useContext(ErrorContext);

  return (
    <>
    {errorMessage===""? <></> : <section className='bg-red rounded-md flex flex-row justify-center'>
        <p className='text-white text-justify p-4'>{errorMessage}</p>
        <button className='text-xl font-bold text-white mr-4 ml-2' onClick={()=>{setErrorMessage("")}}>X</button>
      </section>}
    </>  
  )
}
