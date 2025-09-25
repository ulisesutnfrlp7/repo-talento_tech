// src/pages/ProductDetail.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Spinner, Alert } from 'react-bootstrap';

const ProductDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://68d45b6b214be68f8c6916f2.mockapi.io/api/productos/articles/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('PRODUCTO NO ENCONTRADO :( VERIFICÁ EL ID O VOLVÉ A LA LISTA DE PRODUCTOS');
        return res.json();
      })
      .then(data => {
        setProducto(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">CARGANDO PRODUCTO...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger">Error: {error}</Alert>
      </Container>
    );
  }

  return (
    <div className="bg-success">
      <Container className="py-5">
        <Card className="p-4 shadow-sm card-hover">
          <h2>{producto.name}</h2>
          <hr className="text-black"/>
          <p><strong>Precio:</strong> ${producto.price}</p>
          <p><strong>Descripción:</strong> {producto.description}</p>
          <p><strong>ID:</strong> {producto.id}</p>
        </Card>
      </Container>
    </div>
  );
};

export default ProductDetail;


// EL HOOK useParams PERMITE ACCEDER A LOS PARÁMETROS DE LA URL DENTRO DEL COMPONENTE