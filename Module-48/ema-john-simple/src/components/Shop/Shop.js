import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css';
import Cart from '../cart/Cart';
import { addToDb, getStoredCart} from '../../utilities/fakedb';


const Shop = () => {

        const [products,setProducts]=useState([])
        const [cart,setCart]=useState([])

        useEffect(()=>{
            fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        },[])
        // get data from storage 
 
        useEffect(()=>{
            const storedCart=getStoredCart()
            const savedCart=[];
            for(const id in storedCart){
                const addProduct=products.find(product => product.id ===id);
                if(addProduct){
                    const quantity=storedCart[id];
                    addProduct.quantity=quantity;
                    savedCart.push(addProduct)
                }
            }
            setCart(savedCart);
        },[products])
      
        const addToCart=(selectedProduct)=>{
            const exists=cart.find(product => product.id ===selectedProduct.id)
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
        
        <div className='shop'>
            <div className='cart-container'>
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        addToCart={addToCart}></Product>)
                }
            </div>
            <div  className='order-summery'>
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;