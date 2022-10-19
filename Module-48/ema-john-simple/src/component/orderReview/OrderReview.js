import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderReview.css';
const OrderReview = ({ product,removeHandler }) => {
    const { img, name, price, quantity, shipping,id } = product;
    return (
        <div className='order-review'>
            <div>
                <img src={img} alt="" srcset="" />
            </div>
            <div className="oReview-details">

                <div className='detail'>
                    <p className='name'>{name}</p>
                    <p>Price: <span>${price}</span></p>
                    <p>Quantity: {quantity}</p>
                    <p>Shipping Fee: <span> ${shipping}</span></p>
                </div>
                <div className='btn-container'>
                    <button className='btn' onClick={()=>removeHandler(id)}><FontAwesomeIcon className='btn-icon' icon={faTrash}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;