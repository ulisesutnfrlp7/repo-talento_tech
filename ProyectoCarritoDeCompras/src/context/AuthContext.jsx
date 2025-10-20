// src/context/AuthContext.jsx

import React, { createContext, useState } from 'react';

export const AuthContext = createContext(); 

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null); 
    
    const login = (username) => { 
        const token = `fake-token-${username}`;
        localStorage.setItem('authToken', token);
        setUser(username); 
        console.log(token);
    }; 
    
    const logout = () => {
        localStorage.removeItem('authToken');
        setUser(null); 
    };
    
    return ( 
    <AuthContext.Provider value={{ user, login, logout }}> 
        {children} 
    </AuthContext.Provider>
    ); 
}

// children: TODO LO QUE ESTÉ ENVUELTO POR EL CONTEXTO