// src/components/ProductList.jsx

import { useState, useEffect, useContext } from "react";
import ProductCard from "./ProductCard";
import { Container, Row, Alert, Spinner, InputGroup, Form, Col } from "react-bootstrap";
import { CarritoContext } from "../context/CarritoContext";
import 'bootstrap-icons/font/bootstrap-icons.css';

const ProductList = () => {
    
    const [productos, setProductos] = useState([]);
    const [productosIniciales, setProductosIniciales] = useState([]);
    const [cargando, setCargando] = useState(true); // ESTADO DE CARGA QUE INDICA SI LOS DATOS ESTÁN EN PROCESO DE SER OBTENIDOS
    const [error, setError] = useState(null); // EL ESTADO DE ERROR GUARDA INFORMACIÓN SOBRE POSIBLES FALLOS
    const [busqueda, setBusqueda] = useState("");
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

    useEffect (
        () => {
            if (busqueda.trim() === "") {
                setProductos(productosIniciales);
            } else {
                const filtrados = productosIniciales.filter(
                    (producto) => producto.name.toLowerCase().includes(busqueda.toLocaleLowerCase())
                );
                setProductos(filtrados);
            }
        }, [busqueda, productosIniciales]
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
        setBusqueda("");
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
        <Container className="py-0">
            <h2 className="mb-4 mt-3 text-black">NUESTROS PRODUCTOS... ¿QUÉ NECESITÁS HOY?</h2>
            <Row className="mb-4">
                <Col md={12} lg={12} xl={4}>
                    <InputGroup className="rounded shadow-sm">
                        <InputGroup.Text id="search-icon" className="bg-white border-end-0">
                        <i className="bi bi-search text-muted"></i>
                        </InputGroup.Text>
                        <Form.Control
                        type="text"
                        placeholder="Agilizá, buscá por nombre ;)"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        aria-label="Buscar producto"
                        className="border-start-0 rounded-end"
                        />
                    </InputGroup>
                </Col>
            </Row>
            {productos.length === 0 ? (
                <Alert variant="info" className="text-center">
                    Disculpanos ché, no se encontraron productos que coincidan con tu búsqueda :(
                </Alert>
            ) : (
                <Row>
                {productos.map((producto) => (
                    <ProductCard
                    key={producto.id}
                    producto={producto}
                    reducirStock={reducirStock}
                    />
                ))}
                </Row>
            )}
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