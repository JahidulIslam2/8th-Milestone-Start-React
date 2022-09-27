import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Product.css";


const Product = (props) => {
    const {product,addToCart}=props
    const {category,name,seller,price,ratings,img}=product
    return (
        <div>
            <div className='cart'>
                <img src={img} alt="" srcset="" />
            <div>
                <p className='name'>{name}</p>
                <p className='price'>Price:$ {price}</p>
                <p className='category'>Category: {category}</p>

                <p className='Company'><small>Company: {seller}</small></p>
                <p className='rating'><small>Rating: {ratings}</small></p>
                </div>
            <button onClick={()=>addToCart(product)} className='btn-add' type="submit"> 
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            </div>
        </div>
    );
};

export default Product;