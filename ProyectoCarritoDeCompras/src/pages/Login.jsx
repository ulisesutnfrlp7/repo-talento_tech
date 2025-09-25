// src/pages/Login.jsx

import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (usuario === 'admin' && clave === '1234') {
      alert('LOGIN EXITOSO');
      setIsAuthenticated(true);
      navigate('/');
      setError(null);
    } else {
      setError('USUARIO O CLAVE INCORRECTOS');
    }
  };

  return (
    <div className="bg-success">
      <Container className="py-5">
        <h2 className="mb-4">🔐 Iniciar Sesión</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 text-black" controlId="formUsuario">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="admin"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 text-black" controlId="formClave">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="1234"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Form>

        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      </Container>
    </div>
  );
};

export default Login;