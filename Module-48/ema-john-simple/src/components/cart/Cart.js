import React from 'react';
import './Cart.css';

const Cart = ({cart,clearCart,children}) => {
    let quantity=0;
    let total=0;
    let shipping=0;
    for(const product of cart){
        quantity=quantity + product.quantity;
        total=total + product.price *product.quantity;
    let cost=product.shipping;
        shipping=shipping+cost;
     
    }
    
    
    let taxString=(total * 0.1).toFixed(2)
    let tax=parseFloat(taxString)
    
    const GrandTotal=total+shipping+tax;   
    
    return (
        <div className='cart-body'>
            <h2>Order Summery</h2>
            <h3>Selected Item: {cart.length}</h3>
            <h3>Total Price: ${total}</h3>
            <h3>Total Shipping: ${shipping}</h3>
            <h3>Tax: ${tax}</h3>
            <h2>Grand Total: ${GrandTotal}</h2>
            <button type="submit" onClick={clearCart}>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;