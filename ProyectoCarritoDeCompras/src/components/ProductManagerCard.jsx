// src/components/ProductManagerCard.jsx

import { Card, Col, Button } from 'react-bootstrap';

const ProductManagerCard = ({ producto }) => {
  const { id, name, description, price, image, stock } = producto; // ESTA LÍNEA ESTÁ USANDO DESESTRUCTURACIÓN DE OBJETOS EN JAVASCRIPT, UNA TÉCNICA QUE PERMITE EXTRAER PROPIEDADES ESPECÍFICAS DE UN OBJETO DIRECTAMENTE EN VARIABLES INDIVIDUALES
  // LO EQUIVALENTE SERÍA:
  // const name = producto.name;
  // const description = producto.description;
  // const price = producto.price;
  // const image = producto.image;
  // const stock = producto.stock;

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
      <Card className="h-100 shadow-sm card-hover" style={{minWidth:"415px", ...cardStyle}}>
        <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
          <Card.Img
            variant="top"
            src={image}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>ID: {id}</Card.Text>
          <h5 className="text-success">${price}</h5>
          <h5 className="text-danger">STOCK: {stock}</h5>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductManagerCard;