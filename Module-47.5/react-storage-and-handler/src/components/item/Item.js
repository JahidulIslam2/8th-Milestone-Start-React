import React from 'react';
import './Item.css';
import Multiply, { Devid } from '../../utilities/calculate';

const Item = () => {
    const first=5;
    const second=10;
    const recieve=Multiply(first,second);
    const Devided=Devid(first,second);
    return (
        <div>
            <h2>Multiply Count</h2>
            <h1>{recieve}</h1>
            <h1>Devid {Devided}</h1>
        </div>
    );
};

export default Item;