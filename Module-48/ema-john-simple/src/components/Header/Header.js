import React from 'react';
import "./Header.css";
import logo from "../../images/Logo.svg";           //set name logo
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" srcset="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;