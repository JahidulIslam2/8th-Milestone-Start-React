import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css';
import Cart from '../cart/Cart';
import { addToDb, deleteShoppingCart, getStoredCart} from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';


const Shop = () => {

        const products=useLoaderData();
        const [cart,setCart]=useState([])

        const clearCart=()=>{
            setCart([]);
            deleteShoppingCart();
        }

        // get data from storage 
        useEffect(()=>{
            const storedCart=getStoredCart()
            const savedCart=[]; 
            for(const id in storedCart){
                const addProduct=products.find(product => product.id === id);
                if(addProduct){
                    const quantity=storedCart[id];
                    addProduct.quantity=quantity;
                    savedCart.push(addProduct)
                }
            }
            setCart(savedCart);
        },[products])
      
        const addToCart=(selectedProduct)=>{
            const exists=cart.find(product => product.id === selectedProduct.id)
            let newCart =[];
            if(!exists){
                selectedProduct.quantity =1
                newCart=[...cart,selectedProduct]
            }
            else{
                const rest=cart.filter(product => product.id === selectedProduct.id);
                exists.quantity =exists.quantity+1 ;
                newCart=[...rest,exists];
            }
            setCart(newCart)
            addToDb(selectedProduct.id)
        }
    
    return (
        
        <div className='container'>
            <div className='cart-container'>
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        addToCart={addToCart}></Product>)
                }
            </div>
            <div  className='order-summery'>
            <Cart cart={cart} clearCart={clearCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;