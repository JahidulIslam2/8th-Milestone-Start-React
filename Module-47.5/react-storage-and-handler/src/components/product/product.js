import React from 'react';
import './product.css';

const Product = (props) => {

const {index}=props             //distruction

    const forHandler=(id)=>{                //no 1 way data add handler
        console.log(id)
    };

     const secondWayAdd=()=>forHandler(props.id);              /**second way ekta arrow func a handler   function rekhe seta onclick e add korte hobe*/

    return (
        <div>
            
            <div className='card'>
            <h1>Gadgets</h1>
                {/* <h2>Name: {props.Name}, Model: {props.Model}</h2>
                <h3>Price: {props.Price}, brand: {props.brand}</h3> */}
                <h2>
                    id: {props.id},
                    index: {props.index},
                    Activity: {props.Activity},
                    balance: {props.balance},
                    <img src={props.picture} alt="" srcset="" />
                    <button onClick={()=>forHandler(index)}>Click Me</button> 
                    <button onClick={secondWayAdd}>Click Me 2</button> 
                    
                </h2>

            </div>
        </div>
    );
}

export default Product;