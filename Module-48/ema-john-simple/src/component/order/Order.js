import React, {useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../../components/cart/Cart';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import OrderReview from '../orderReview/OrderReview';


const Order = () => {
    const { products, storedCart } = useLoaderData();
    const [cart, setCart] = useState(storedCart);

    const removeHandler = (props) => {
        const restProduct = cart.filter(product => product.id !== props)
        setCart(restProduct);
        removeFromDb(props);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }


    return (
        <div className='container'>
            <div className='orderReview-container'>
                {
                    cart.map(product => <OrderReview key={product.id} product={product}
                        removeHandler={removeHandler}></OrderReview>)
                }
                {
                    cart.length === 0 && <h1>No data Found Please <Link to={"/shop"}>Shop More</Link></h1>
                }
            </div>
            <div className='order-summery'>
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to={'/shop'}>
                        <button type="submit">Review Item</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;