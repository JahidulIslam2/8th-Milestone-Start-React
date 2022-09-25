import { useState } from 'react';
import './App.css';
import Countries from './component/countries/Countries';
// import { useEffect, useState } from "react";


function App(){
  const [step,setStep] =useState(0);
setStep(step+1)

  return(
    <div className='App'>
      <button onClick={step}>Step Plus</button>
      <Countries></Countries>
    </div>
  );
}




// function App() {
//   return (
//     <div className="App">
// <RestCountries></RestCountries>
//     </div>
//   );
// }


// function RestCountries(props){
//   const [Countries,setCounttries]=useState([])

//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCounttries(data))
//   });
//   console.log(Countries)
//   return(
//         <div>
//           <h1>rest Countries</h1>
//           <h2>Countries: {Countries.length}</h2>
//           {
//             Countries.map(country => <Country Name={country.name.common} Capital={country.capital}></Country>)
//           }
//         </div>
//   );
// }

// function Country(props){
//     return(
//       <div>
//         <h1>Name:- {props.Name}, Capital:- {props.Capital}</h1>
//       </div>
//     )
// }



export default App;
