// src/components/ProductCard.jsx

import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const ProductCard = ({ producto, onAgregar }) => {
  const { name, description, price, image } = producto; // ESTA LÍNEA ESTÁ USANDO DESESTRUCTURACIÓN DE OBJETOS EN JAVASCRIPT, UNA TÉCNICA QUE PERMITE EXTRAER PROPIEDADES ESPECÍFICAS DE UN OBJETO DIRECTAMENTE EN VARIABLES INDIVIDUALES
  // LO EQUIVALENTE SERÍA:
  // const name = producto.name;
  // const description = producto.description;
  // const price = producto.price;
  // const image = producto.image;
  return (
    <Col md={4} className="mb-4">
      <Card className="h-100 shadow-sm">
        <Card.Img variant="top" src={image} alt={name} style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <h5 className="text-success">${price}</h5>
          <Button variant="primary" onClick={() => onAgregar(producto)}>AGREGAR AL CARRITO</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;