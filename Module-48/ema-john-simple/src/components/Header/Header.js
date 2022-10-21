import React, { useContext } from 'react';
import "./Header.css";
import logo from "../../images/Logo.svg";           //set name logo
import { Link } from 'react-router-dom';
import { AuthContext } from '../../userContext/UserContext';


const Header = () => {
    const {user,logOut}=useContext(AuthContext);
    const logOutHandler=()=>{
        logOut()
        .then(()=>{})
        .catch((error)=>{
            console.error('error',error);
        })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <p className='text-email'>Welcome: {user?.email}</p>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user?.uid ? <button onClick={logOutHandler} className='logOut-btn'>logOut</button>
                :
                <>
                <Link to="/login">Login</Link>
                <Link to="/signUp">SignUp</Link>
                </>
                }
            </div>
        </nav>
    );
};

export default Header;