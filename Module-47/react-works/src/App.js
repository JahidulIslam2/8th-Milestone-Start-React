import './App.css';
import { useState } from "react";
import Step from './component/StepCount/Step';
function App() {
  const[step,setStep]=useState(0)
  const stepCounter=()=>setStep(step+1)
  return (
    <div className="App">
      <h1>{step}</h1>
      <Step Step={step}></Step>
    <button onClick={stepCounter}>Step Plus</button>      
      <Step Step={step}></Step>
    </div>
  );
}

export default App;
