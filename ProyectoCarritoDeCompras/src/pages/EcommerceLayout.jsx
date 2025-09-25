// src/pages/EcommerceLayout.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const EcommerceLayout = () => {
  const [idConsulta, setIdConsulta] = useState('');
  const navigate = useNavigate();

  const consultarProducto = () => {
    if (idConsulta.trim()) {
      navigate(`/productos/${idConsulta}`);
    }
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={8}>
          <ProductList/>
        </Col>
        <Col md={4}>
          <Cart/>
        </Col>
        <Col md={6}>
          <h5 className="text-black">¿QUERÉS CONSULTAR UN PRODUCTO POR ID?</h5>
          <hr className="text-light"/>
          <Form className="d-flex gap-2">
            <Form.Control
              type="text"
              placeholder="Ingresá el ID"
              value={idConsulta}
              onChange={(e) => setIdConsulta(e.target.value)}
            />
            <Button variant="primary" onClick={consultarProducto}>
              Consultar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EcommerceLayout;