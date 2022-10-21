import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {  } from "./SignUp.css";
import { AuthContext } from '../../userContext/UserContext';


const SignUp = () => {
    const {createUser}=useContext(AuthContext);
    const [error,setError]=useState(null)

    const submitHandler=(event)=>{
        event.preventDefault();
        const form=event.target
       const email=form.email.value
       const password=form.password.value
       const confirmPass=form.confirmPassword.value 
       console.log(email,confirmPass,password)

       if(password !== confirmPass){
            setError('Your password Did not match')
            return;
       }

       if(password.length < 6){
        setError('password should be 6 characters or more.;')
        return;
       }

       createUser(email,password)
       .then((result)=>{
        const user=result.user;
        console.log(user);
        form.reset();

       })
       .catch((error)=>{
        console.error(error);
       })
    }

    
    return (
        <div>
            <div className='form-container'>
                <form onSubmit={submitHandler}>
                    <h1 className='title'>SignUp</h1>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name='confirmPassword' required />
                        <p className='textError'>{error}</p>
                    </div>
                    <button className='login-btn'>SignUp</button>
                   
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;