import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../userContext/UserContext';
import {  } from "./Login.css";

const Login = () => {
    const navigate=useNavigate();
    const {login}=useContext(AuthContext)
    const location  =useLocation();
    const from= location.state?.from?.pathname|| "/"
    
    const submitLoginHandler=(event)=>{
        event.preventDefault();
        const form= event.target;
        const email=form.email.value;
        const password=form.password.value;
        login(email,password)
        .then((result)=>{
            const user=result.user;
            console.log(user)})
            form.reset()
            navigate(from,{replace:true})
        .catch((error)=>{
            console.error(error)
        })
    }
    return (
        <div>
            <div className='form-container'>
                <form onSubmit={submitLoginHandler}>
                <h1 className='title'>Login</h1>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required />
                    </div>
                        <button className='login-btn' type="submit">Login</button>
                </form>
                <p>New to Ema-John? <Link to="/signUp">Create New Account</Link></p>
                
               
            </div>
        </div>
    );
};

export default Login;