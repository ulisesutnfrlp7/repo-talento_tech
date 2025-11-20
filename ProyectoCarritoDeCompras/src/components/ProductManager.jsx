// src/components/ProductManager.jsx

import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button, Alert, Spinner, Form, InputGroup } from 'react-bootstrap';
import { ProductosContext } from '../context/ProductosContext';
import ProductForm from './ProductForm';
import ProductManagerCard from './ProductManagerCard';

const ProductManager = () => {
  const { productos, cargando, obtenerProductos, eliminarProductoAPI } = useContext(ProductosContext);
  const [modoForm, setModoForm] = useState('oculto'); // 'agregar', 'editar', 'oculto'
  const [productoEditando, setProductoEditando] = useState(null);
  const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });

  useEffect(() => {
    obtenerProductos();
  }, []);

  const handleAgregarProducto = () => {
    setModoForm('agregar');
    setProductoEditando(null);
  };

  const handleEditarProducto = (producto) => {
    setModoForm('editar');
    setProductoEditando(producto);
  };

  const handleEliminarProducto = async (id) => {
    if (window.confirm('ESTÁS POR BOLETEAR ESTE PRODUCTO. ¿ESTÁS SEGURO?')) {
      try {
        await eliminarProductoAPI(id);
        setMensaje({ tipo: 'success', texto: 'Producto eliminado correctamente :)' });
      } catch (error) {
        setMensaje({ tipo: 'danger', texto: `Error al eliminar producto: ${error.message}` });
      }
    }
  };

  const handleGuardarProducto = () => {
    setModoForm('oculto');
    setProductoEditando(null);
    // Refrescar lista
    obtenerProductos();
  };

  const handleCancelarForm = () => {
    setModoForm('oculto');
    setProductoEditando(null);
  };

  if (cargando && modoForm === 'oculto') {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="black" role="status" />
        <p className="mt-3 fs-4 fw-bold text-black text-uppercase">CARGANDO PRODUCTOS...</p>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      {mensaje.texto && (
        <Alert 
          variant={mensaje.tipo} 
          onClose={() => setMensaje({ tipo: '', texto: '' })} 
          dismissible
        >
          {mensaje.texto}
        </Alert>
      )}

      <Row className="mb-4">
        <Col>
          <h2 className="mb-3 text-black">¡EY, ADMIN! - GESTIÓN DE PRODUCTOS</h2>
          <Button 
            variant="primary" 
            onClick={handleAgregarProducto}
          >
            + AGREGAR NUEVO PRODUCTO
          </Button>
        </Col>
      </Row>

      {modoForm !== 'oculto' && (
        <Row>
          <Col>
            <ProductForm
              productoEditando={productoEditando}
              onGuardar={handleGuardarProducto}
              onCancelar={handleCancelarForm}
            />
          </Col>
        </Row>
      )}

      <Row>
        {productos.map(producto => (
          <Col key={producto.id} md={6} className="mb-4">
            <div className="position-relative">
              <ProductManagerCard
                producto={producto} 
                onEditar={handleEditarProducto}
                onEliminar={handleEliminarProducto}
              />
              <div className="position-absolute top-0 end-0 p-2">
                <Button 
                  variant="outline-warning" 
                  size="xl"
                  className="bg-warning"
                  onClick={() => handleEditarProducto(producto)}
                  title="Editar producto"
                >
                  ✏️
                </Button>
                <Button 
                  variant="outline-danger" 
                  size="xl" 
                  className="ms-1 bg-danger"
                  onClick={() => handleEliminarProducto(producto.id)}
                  title="Eliminar producto"
                >
                  🗑️
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductManager;