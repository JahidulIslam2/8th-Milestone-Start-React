import React from 'react';
import './CountryName.css';

const CountryName = (props) => {
    console.log(props.country)
    const {name,cca2,capital,flags} =props.country
    return (
        <div className='container-main'>
             <h3>Country Name: {name.common}</h3>
             <h3>Short name: {cca2}</h3>
             <h4>Capital: {capital}</h4>
             <img src={flags.png} alt="" srcset="" />
        </div>
    );
};

export default CountryName;