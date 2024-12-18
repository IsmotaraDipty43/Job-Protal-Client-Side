import React, { useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import auth from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {
const [user,setUser] = useState()
const [loading,setLoading] = useState(true)



const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const Signin = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,currentusaer=>{
        setUser(currentusaer)
        setLoading(false)
    })
    return ()=>{
        unsubscribe()
    }
},[])

const logout = ()=>{
    setLoading(true);
    return signOut(auth);
}

const authInfo = {
user,
loading,
createUser,
Signin ,
logout
}


    return (
       <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;