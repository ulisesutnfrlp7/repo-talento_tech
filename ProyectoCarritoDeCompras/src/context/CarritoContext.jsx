// src/context/CarritoContext.jsx

import React, { createContext, useState } from 'react';

// CONTEXT API ES UNA HERRAMIENTA INTEGRADA EN REACT
// QUE PERMITE MANEJAR ESTADOS GLOBALES SIN NECESIDAD
// DE PASAS PROPS MANUALMENTE ENTRE COMPONENTES. ES IDEAL
// PARA COMPARTIR DATOS O ESTAODS ENTRE COMPONENTES QUE NO
// TIENEN UNA RELACIÓN DIRECTA EN EL ÁRBOL DE LA APP

// CREAR EL CONTEXTO

export const CarritoContext = createContext();

// PROVEEDOR DEL CONTEXTO

export function CarritoProvider({ children }) {
    
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
}