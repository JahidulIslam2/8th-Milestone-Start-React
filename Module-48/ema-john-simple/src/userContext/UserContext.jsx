import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import  app  from "../firebase/firebase.config";

export const AuthContext=createContext();
  const auth=getAuth(app)

const UserContext = ({children}) => {
    const [user,setUser]=useState()
    const [loading,setLoading]=useState(true)
    
    const createUser=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const login =(email,password)=>{
        loading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        loading(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])


    const AuthInfo={user,createUser,login,logOut,loading}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;