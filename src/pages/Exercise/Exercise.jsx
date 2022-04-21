import React,{useState,useEffect} from "react";
import { useStopwatch } from "react-timer-hook"
import { useParams, useNavigate} from "react-router-dom";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import {apiClient} from "../../store/axiosApi"
import Button from "../../components/Button";
import OptionQuestion from "../../components/OptionsQuestion/OptionQuestion";
import ContentQuestion from "../../components/ContentQuestion";
import SolutionQuestion from "../../components/SolutionQuestion";
import VideoSolution from "../../components/VideoSolution/VideoSolution";
import NavbarClient from "../../components/NavbarClient/NavbarClient";
import './Exercise.style.css';
import "react-reflex/styles.css";

const initialStateQuestion = {
  _id:"",
  name:"",
  course:"",
  topic:"",
  difficult:"",
  questionText:"",
  solutionText:"",
  opciones:[]
}

const Exercise = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(initialStateQuestion);
  //setResizeProps never used
  const resizeProps = () => {};
  const {seconds, minutes, hours, start, reset} = useStopwatch({autoStart: false});

  //get data, all question
  const handleDataQuestion = async () => {
    const response = await apiClient(`/dashboard/${id}`,"GET");
    setData(response.data);
  }
  const handleToDashboard = () => {
    navigate("/dashboard");
  }
  useEffect(() => {
    handleDataQuestion();
  }, []);

  return (
    <>
      <NavbarClient />
      <div className="flex justify-end items-center gap-x-2 py-4 px-6">
        <div className="text-third mr-4  text-xl"><span>{Math.floor(hours/10)}{hours%10}</span>:<span>{Math.floor(minutes/10)}{minutes%10}</span>:<span>{Math.floor(seconds/10)}{seconds%10}</span></div>
        <Button onClick={start} name="Iniciar" buttonStyle="border border-third rounded-full py-1 px-4 bg-third text-white hover:bg-white hover:text-third hover:border-third hover:border" />
        <Button onClick={()=>{reset(0,false)}} name="Detener" buttonStyle="border border-third rounded-full py-1 px-4 bg-third text-white hover:bg-white hover:text-third hover:border-third hover:border" />
        <Button onClick={handleToDashboard} name="Terminar pregunta" buttonStyle="border border-third rounded-full py-1 px-4 bg-third text-white hover:bg-white hover:text-third hover:border-third hover:border" />
      </div>

      <div className="m-0 p-0 h-screen">
        <ReflexContainer className="max-h-full overflow-auto" orientation="vertical">
          <ReflexElement>
            <ReflexContainer orientation="vertical">
              <ReflexElement {...resizeProps}>
                <ReflexContainer orientation="horizontal" className={`drop-shadow-md bg-white col-span-6 resize`}>
                  <ReflexElement {...resizeProps}>
                      <ContentQuestion questionText={data.questionText} name={data.name}/>
                  </ReflexElement>
                  <ReflexSplitter propagate={true} {...resizeProps} />
                  <ReflexElement {...resizeProps}>
                      <SolutionQuestion solutionText={data.solutionText}/>
                  </ReflexElement>
                </ReflexContainer>
              </ReflexElement>
              <ReflexSplitter propagate={true} {...resizeProps} />
              <ReflexElement {...resizeProps}>
              <ReflexContainer orientation="horizontal" className={`drop-shadow-md bg-white col-span-6 resize`}>
                  <ReflexElement {...resizeProps}>
                      <OptionQuestion opciones={data.opciones} id={id}/>
                  </ReflexElement>
                  <ReflexSplitter propagate={true} {...resizeProps} />
                  <ReflexElement {...resizeProps}>
                      <VideoSolution/>
                  </ReflexElement>
                </ReflexContainer>
              </ReflexElement>
            </ReflexContainer>
          </ReflexElement>
        </ReflexContainer>
      </div>
    </>
  );
};

export default Exercise;
