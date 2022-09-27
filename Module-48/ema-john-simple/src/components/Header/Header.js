import React from 'react';
import "./Header.css";
import logo from "../../images/Logo.svg";           //set name logo


const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" srcset="" />
            <div>
                <a href="/order">order</a>
                <a href="/orders">order review</a>
                <a href="/Manage">Inventory</a>
                <a href="/Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;