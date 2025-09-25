import { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import { Container, Row, Col } from 'react-bootstrap';

const EcommerceLayout = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={8}>
          <ProductList onAgregar={agregarAlCarrito} />
        </Col>
        <Col md={4}>
          <Cart carrito={carrito} onVaciar={vaciarCarrito} />
        </Col>
      </Row>
    </Container>
  );
};

export default EcommerceLayout;