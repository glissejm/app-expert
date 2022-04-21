import React,{useState,useEffect} from 'react';
import { apiClient } from '../store/axiosApi';
import { Link } from 'react-router-dom';
export default function QuestionBox({name, course, topic, difficult,id}) {
  const [done, setDone] = useState(false);


  const handleProgress = async () => {
    const {data} = await apiClient("/idprogress","GET");
    const complete = data.find((e) =>  e===id);
    if(complete){
      setDone(true);
    }
  }

  

  useEffect(() => {
    handleProgress();
  }, [])
  return (
      <Link className="group question rounded-full grid grid-cols-4 gap-4 text-center  bg-third border-white hover:bg-white text-white border py-6 px-4 mb-6" to={{pathname: `${id}`}}>
        <h3 className='group-hover:text-third'>{name}</h3>
        <p className='group-hover:text-third text-sm col-span-2'><span>{course}</span> / <span>{topic}</span></p>
        <span className='inline-grid grid-cols-2'>
          <p className="text-white mr-2 group-hover:text-third">{difficult}</p>
          {done ===true?
            <p className=' text-green-400' >Resuelto</p>
            :
            <p className='text-red'>Sin resolver</p>
          }
        </span>
      </Link>
  );
}