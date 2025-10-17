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

    const [restaurarStock, setRestaurarStock] = useState(null);

    const [incrementarStock, setIncrementarStock] = useState(null);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
        if (restaurarStock) restaurarStock(); // se restaura stock automáticamente
    };

    const eliminarUnidadDelCarrito = (index, idProducto) => {
        setCarrito((prev) => prev.filter((_, i) => i !== index));
        if (incrementarStock) incrementarStock(idProducto);
    };

    // Para permitir que ProductList registre cómo incrementar stock
    const registrarIncrementarStock = (fn) => {
        setIncrementarStock(() => fn);
    };

    // Permite que ProductList registre su función restauradora
    const registrarRestaurarStock = (fn) => {
        setRestaurarStock(() => fn);
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarUnidadDelCarrito, vaciarCarrito, registrarRestaurarStock, registrarIncrementarStock }}>
            {children}
        </CarritoContext.Provider>
    );
}