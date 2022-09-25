import React, { useEffect, useState } from 'react';
import './Add.css';

const Add = () => {

    useEffect(()=>{
        fetch('myData.json')
        .then(res => res.json())
        .then(data => information(data))
    },[])
    const[details,information]=useState([]);
    console.log(details)
    return (
        <div>
           {
            details.map(detail => <DetailInfo 
                id={detail._id} 
                name={detail.name} 
                gender={detail.gender} 
                company={detail.company}
                email={detail.email}
                phone={detail.phone}
                address={detail.address}
                
                ></DetailInfo>)
           }
        </div>
    );
};


const DetailInfo=(props)=>{
    const id=props.id;


    // add button er jonno 
    const handler=(id)=>{

        let shoppingCart;
        //get Data and set again with new value
        const getQuantity=localStorage.getItem('shopping-Cart');
        if(getQuantity){
            shoppingCart=JSON.parse(getQuantity);
        }
        else{
            shoppingCart={}
        }
        // const quantity=localStorage.getItem(id)
        
        const quantity=shoppingCart[id]
        //first set data
        if(quantity){           
            const newQuantity=quantity +1;
            shoppingCart[id]=newQuantity;
            // const newQuantity= parseInt(quantity)+1;
            //localStorage.setItem(id,newQuantity);       // erpor true pabe then 1 addition korbe

        }
        else{
            shoppingCart[id]=1;
            //localStorage.setItem(shoppingCart,id)              //first null pabe,then value false hobe, value 1 add korbe,

        }
        localStorage.setItem('shopping-Cart',JSON.stringify(shoppingCart))
        
    }
    const removeData=(id)=>{
        const getDataAgain=localStorage.getItem('shopping-Cart');
        
        if(getDataAgain){
            const storageData=JSON.parse(getDataAgain)
            if(id in storageData){
               delete storageData[id];
            localStorage.setItem('shopping-Cart',JSON.stringify(storageData))
               

            }
        }
    }

    const RemoveCart=()=>{
        localStorage.removeItem('shopping-Cart');
    }

    return(
        <div>
            <div className='cart'>
                <h2>id: {props.id}</h2>
                <h2>Name: {props.name}</h2>
                <h2>Gender: {props.gender}</h2>
                <h2>Company: {props.company}</h2>
                <h2>Email: {props.email}</h2>
                <h2>Phone: {props.phone}</h2>
                <h2>Address: {props.address}</h2>
                <button onClick={()=>handler(id)}>Add To Cart</button>
                <button onClick={()=>removeData(id)}>Delete Item</button>
                <h2>
            <button onClick={()=>RemoveCart()}>Reset Data</button>
                </h2>
            </div>
        </div>
    );
}

export {Add,DetailInfo}