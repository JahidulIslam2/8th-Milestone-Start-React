import React from 'react';
import Multiply, { Add, Substruct } from '../../utilities/calculate';
import './AnotherItem.css';
// import Multiply from '../../utilities/calculate';


const AnotherItem = () => {
    const num1=20;
    const num2=50;
    const total=Multiply(num1,num2)
    const add=Add(num1,num2)
    const substruct=Substruct(num1,num2)
    return (
        <div>
           <h2>{total}</h2>
           <h3>Addition {add}</h3>
           <h2>Subs {substruct}</h2>
        </div>
    );
};

export default AnotherItem;