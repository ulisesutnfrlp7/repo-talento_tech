// src/components/ProductList.jsx

import { useState, useEffect, useContext } from "react";
import ProductCard from "./ProductCard";
import { Container, Row, Alert, Spinner } from "react-bootstrap";
import { CarritoContext } from "../context/CarritoContext";

const ProductList = () => {
    
    const [productos, setProductos] = useState([]);
    const [productosIniciales, setProductosIniciales] = useState([]);
    const [cargando, setCargando] = useState(true); // ESTADO DE CARGA QUE INDICA SI LOS DATOS ESTÁN EN PROCESO DE SER OBTENIDOS
    const [error, setError] = useState(null); // EL ESTADO DE ERROR GUARDA INFORMACIÓN SOBRE POSIBLES FALLOS
    const { registrarRestaurarStock, registrarIncrementarStock } = useContext(CarritoContext);

    useEffect (
        () => {
            fetch('https://68d45b6b214be68f8c6916f2.mockapi.io/api/articles')
            .then((res) => res.json())
            .then((datos) => {
                setProductos(datos);
                setProductosIniciales(datos);
                setCargando(false);
            })
            .catch((error) => {
                setError('Ups! Hubo un problema al cargar los productos.');
                setCargando(false);
            })
        }, []
    );

    const reducirStock = (idProducto) => {
        setProductos((prev) =>
            prev.map((prod) =>
                prod.id === idProducto && prod.stock > 0 
                ? { ...prod, stock: prod.stock - 1 }
                : prod
            )
        );
    };

    const incrementarStock = (idProducto) => {
        setProductos((prev) =>
            prev.map((prod) =>
                prod.id === idProducto
                ? { ...prod, stock: prod.stock + 1 }
                : prod
            )
        );
    };

    // Restaurar stock
    const restaurarStock = () => {
        setProductos(productosIniciales);
    };

    // Registramos la función restauradora dentro del contexto
    useEffect(() => {
        registrarRestaurarStock(restaurarStock);
        registrarIncrementarStock(incrementarStock);
    }, [productosIniciales]);

    if (cargando) {
        return (
        <Container className="text-center py-5">
            <Spinner animation="border" variant="black" role="status" />
            <p className="mt-3 fs-4 fw-bold text-black text-uppercase">CARGANDO PRODUCTOS...</p>
        </Container>
        );
    }

    if (error) {
        return (
        <Container className="text-center py-5">
            <Alert variant="danger">
                {error}
            </Alert>
        </Container>
        );
    }

    return (
        <Container className="py-4">
            <h2 className="mb-4">NUESTROS PRODUCTOS... ¿QUÉ NECESITÁS HOY?</h2>
            <Row>
                {productos.map(producto => (
                    <ProductCard key={producto.id} producto={producto} reducirStock={reducirStock} />
                ))}
            </Row>
        </Container>
    );
}

export default ProductList;

// VERSIÓN CON TRILOGÍA try, catch, finally:

/* useEffect(() => {
    const obtenerProductos = async () => {
        try {
            const res = await fetch('...');
            const datos = await res.json();
            setProductos(datos);
        } catch (err) {
            setError('Ups! Hubo un problema al cargar los productos.');
        } finally {
            setCargando(false);
        }
    };
    obtenerProductos();
}, []); */