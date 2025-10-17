// src/components/ProductCard.jsx

import React, { useContext } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { CarritoContext } from '../context/CarritoContext';

const ProductCard = ({ producto, reducirStock }) => {
  const { id, name, price, image, stock } = producto; // ESTA LÍNEA ESTÁ USANDO DESESTRUCTURACIÓN DE OBJETOS EN JAVASCRIPT, UNA TÉCNICA QUE PERMITE EXTRAER PROPIEDADES ESPECÍFICAS DE UN OBJETO DIRECTAMENTE EN VARIABLES INDIVIDUALES
  // LO EQUIVALENTE SERÍA:
  // const name = producto.name;
  // const description = producto.description;
  // const price = producto.price;
  // const image = producto.image;
  // const stock = producto.stock;
  const { agregarAlCarrito } = useContext(CarritoContext);
  const handleAgregar = () => {
    if (stock > 0) {
      agregarAlCarrito(producto);
      reducirStock(id);
    }
  };

  // Estilos condicionales
  const cardStyle =
    stock === 0
      ? {
          backgroundColor: "#ffcccc",
          color: "white",
          border: "2px solid #444",
        }
      : {};

  return (
    <Col md={4} className="mb-4">
      <Card className="h-100 shadow-sm card-hover" style={cardStyle}>
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>ID: {id}</Card.Text>
          <h5 className="text-success">${price}</h5>

          <Button
            variant={stock === 0 ? "secondary" : "primary"}
            onClick={handleAgregar}
            disabled={stock === 0}
          >
            {stock === 0 ? "SIN STOCK" : "AGREGAR AL CARRITO"}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;