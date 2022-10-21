import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../userContext/UserContext';

const AuthRequired = ({children}) => {
    const location =useLocation();
    const {user,loading}=useContext(AuthContext);

    if(loading){
        return <div>loading.....</div>
    }

    if(user && user.uid){
        return children;
    }
    return <Navigate to="/login" state={{form:location}} replace></Navigate>
    

};

export default AuthRequired;