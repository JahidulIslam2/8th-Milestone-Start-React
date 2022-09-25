import React, { useEffect, useState } from 'react';
import './Countries.css';
import CountryName from './Country/CountryName';

const Countries = () => {
    const [countries,setCountry] =useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])

    return (
        <div>
            <h1>Country List</h1>
            <p className='title'>How Much Country there: {countries.length}</p>
            {
                countries.map(country => <CountryName country={country}></CountryName>)
            }
            
        </div>
    );
};

export default Countries;