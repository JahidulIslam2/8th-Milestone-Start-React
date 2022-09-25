import './App.css';
import {Add } from './components-2/addDataLs/Add';
// import Products from './components/products/products';
// import Item from './components/item/Item';
// import AnotherItem from './components/ItemAnother/AnotherItem';



function App() {
  return (
    <div className="App">
      <Add></Add>
     {/* <Products></Products> */}
      {/* <Item></Item>
      <AnotherItem/>
       */}
    </div>
  );
}


// Reduce
//reduce use for sum array or array inner price 

const UseReduce=()=>{
  
  const arr=[
    {name:'eggs',price:10},
    {name:'eggs',price:15},
    {name:'eggs',price:20}
  ];
  
  const sumPrice=(previous,current)=>previous + current.price
  const total=arr.reduce(sumPrice,0)
  return(
        <p>sum: {total}</p>
    );
}


export default App;
