import React, { useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import auth from '../Firebase/firebase.init';
import axios from 'axios'; // Ensure axios is imported
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Initialize user as null
    const [loading, setLoading] = useState(true);

    // Create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign in user with email and password
    const Signin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Listen to auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentusaer => {  // Keeping currentusaer
            if (currentusaer?.email) {
                setUser(currentusaer); // Set the full user object
                const user = { email: currentusaer.email };
                axios.post('https://server-wheat-iota.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log('login', res.data);
                        setLoading(false);
                    })
                    .catch(err => {
                        console.error(err);
                        setLoading(false);
                    });
            } else {
                setUser(null); // Reset user state when no user is authenticated
                axios.post('https://server-wheat-iota.vercel.app/logout', {}, { withCredentials: true })
                    .then(res => {
                        console.log('logout', res.data);
                        setLoading(false);
                    })
                    .catch(err => {
                        console.error(err);
                        setLoading(false);
                    });
            }
        });

        return () => {
            unsubscribe(); // Cleanup subscription when component unmounts
        };
    }, []);

    // Logout handler
    const logout = () => {
        setLoading(true);
        return signOut(auth).then(() => {
            setUser(null); // Reset user state
            setLoading(false);
        }).catch((err) => {
            console.error(err);
            setLoading(false);
        });
    };

    const authInfo = {
        user,
        loading,
        createUser,
        Signin,
        logout,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
