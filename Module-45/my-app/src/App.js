import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
function App() {
  const exesories=[
    {Name:"Dell", Ram:"8Gb",Harddisk:"1Tb",Price:"75000"},
    {Name:"Ashus", Ram:"8Gb",Harddisk:"1Tb",Price:"69000"},
    {Name:"Lenovo", Ram:"8Gb",Harddisk:"1Tb",Price:"60000"},
    {Name:"Hp", Ram:"4Gb",Harddisk:"500Gb",Price:"45000"},
    {Name:"Walton", Ram:"4Gb",Harddisk:"500Gb",Price:"40000"},
  ];

  return (

    <div className="App">
      {/* <Card></Card> */}
      <ExternalUser></ExternalUser>
    </div>
  );
}

function ExternalUser(){
    const [users, setUser] = useState([]);
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data => setUser(data))
    },[]);
  return(
      <div>
        <h2>External User</h2>
        
        {
          users.map(user => <User name={user.name} UserName={user.username} email={user.email} phone={user.phone}></User>)
        }
      </div>
  )
}

function User(props){
  return(
    <div>
      <h3>Name: {props.name} UserName: {props.username} email: {props.email} Phone: {props.phone}</h3>
    </div>
  )
  
}

function Card(props){
  // const [count, setCount] = useState(0);

  // const IncreaseCount =() =>{setCount(count+1)}
  // const decreaseCount =() => (setCount(count-1))
  //return //(
    // <div>
    //   <h1>Count: {count}</h1>
    // <button onClick={IncreaseCount}>Increase</button>
    // <button onClick={decreaseCount}>Decrease</button>
    // </div>
  //)


}

export default App;



// { <h2 className="Container">{props.Name}, {props.Ram}, {props.Harddisk}, {props.Price}</h2> }

// {
//   exesories.map(product => <Card Name={product.Name} Ram={product.Ram} Harddisk={product.Harddisk} Price={product.Price} ></Card>)
// }