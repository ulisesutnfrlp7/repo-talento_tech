// src/components/RutaProtegida.jsx

import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const RutaProtegida = ({ children }) => {
    const user = useContext(AuthContext);
    if (!user) {
        return <Navigate to="/login" replace />
    }
    return children;
}

export default RutaProtegida;