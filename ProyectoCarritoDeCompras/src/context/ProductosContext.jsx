// src/context/ProductosContext.jsx
import React, { createContext, useState, useContext } from 'react';
import { CarritoContext } from './CarritoContext';

// Contexto para manejo de productos
export const ProductosContext = createContext();

export function ProductosProvider({ children }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const { registrarRestaurarStock, registrarIncrementarStock } = useContext(CarritoContext);

  // Obtener productos de la API
  const obtenerProductos = async () => {
    setCargando(true);
    try {
      const response = await fetch('https://68d45b6b214be68f8c6916f2.mockapi.io/api/articles');
      const data = await response.json();
      setProductos(data);
      return data;
    } catch (error) {
      console.error('Error al obtener productos:', error);
      throw error;
    } finally {
      setCargando(false);
    }
  };

  // Agregar producto a la API
  const agregarProductoAPI = async (nuevoProducto) => {
    try {
      const response = await fetch('https://68d45b6b214be68f8c6916f2.mockapi.io/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...nuevoProducto,
          price: Number(nuevoProducto.price),
          stock: Number(nuevoProducto.stock)
        }),
      });

      if (!response.ok) {
        throw new Error('No se pudo agregar el producto');
      }

      const productoAgregado = await response.json();
      setProductos(prev => [...prev, productoAgregado]);
      return productoAgregado;
    } catch (error) {
      console.error('Error al agregar producto:', error);
      throw error;
    }
  };

  // Editar producto en la API
  const editarProductoAPI = async (id, productoActualizado) => {
    try {
      const response = await fetch(`https://68d45b6b214be68f8c6916f2.mockapi.io/api/articles/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...productoActualizado,
          price: Number(productoActualizado.price),
          stock: Number(productoActualizado.stock)
        }),
      });

      if (!response.ok) {
        throw new Error('No se pudo actualizar el producto');
      }

      const productoEditado = await response.json();
      
      // Actualizar localmente
      setProductos(prev => 
        prev.map(p => p.id === id ? productoEditado : p)
      );
      
      return productoEditado;
    } catch (error) {
      console.error('Error al editar producto:', error);
      throw error;
    }
  };

  // Eliminar producto de la API
  const eliminarProductoAPI = async (id) => {
    try {
      const response = await fetch(`https://68d45b6b214be68f8c6916f2.mockapi.io/api/articles/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('No se pudo eliminar el producto');
      }

      setProductos(prev => prev.filter(p => p.id !== id));
      return id;
    } catch (error) {
      console.error('Error al eliminar producto:', error);
      throw error;
    }
  };

  // Context value
  const value = {
    productos,
    cargando,
    obtenerProductos,
    agregarProductoAPI,
    editarProductoAPI,
    eliminarProductoAPI
  };

  return (
    <ProductosContext.Provider value={value}>
      {children}
    </ProductosContext.Provider>
  );
}