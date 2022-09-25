import React, { useEffect, useState,} from 'react';
import Product from '../product/product';
// import Product from '../product/product';

const Products = () => {

    // const Accessories=[
    //     {Name:'Headphone', Model:'y1m', Price:400,Brand:'Samsung'},
    //     {Name:'Airpods', Model:'Aripod15', Price:15000, Brand:'Apple'},
    //     {Name:'Buds+', Model:'Hz5', Price:8000, Brand:'Samsung'},
    //     {Name:'Buds mini', Model:'HZ2', Price:3000, Brand:'Samsung'},
    //     {Name:'mi buds', Model:'F5', Price:2000, Brand:'Xiaomi'},
    // ]

    useEffect(()=>{
        fetch('myData.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[]);

    const[data,setData]=useState([])
    console.log(data)
    return (
        <div>
        {
           data.map(dataIs => <Product id={dataIs.id} index={dataIs.index} Activity={dataIs.isActive} balance={dataIs.balance} picture={dataIs.picture}></Product>)
        }
        </div>
    );
};

export default Products;