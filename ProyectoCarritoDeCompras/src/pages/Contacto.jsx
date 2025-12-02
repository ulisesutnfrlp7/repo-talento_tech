// src/pages/Contacto.jsx

import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  
  const [errors, setErrors] = useState({});
  const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });
  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpiar error al escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    let newErrors = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email no válido';
    }
    
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es obligatorio';
    } else if (formData.mensaje.length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setMensaje({ tipo: 'danger', texto: 'Pará ché, corregite esos errores antes de enviar ;)' });
      return;
    }
    
    setEnviando(true);
    
    // Simulación de envío
    setTimeout(() => {
      setMensaje({ 
        tipo: 'success', 
        texto: '¡Gracias por contactarnos locotrón! Tu mensaje fue enviado correctamente.' 
      });
      
      setFormData({
        nombre: '',
        email: '',
        mensaje: ''
      });
      
      setEnviando(false);
    }, 1500);
  };

  return (
    <div className="bg-success">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="p-4 shadow-lg border-0 rounded-4">
              <div className="text-center mb-4">
                <div className="bg-success text-white d-inline-flex align-items-center justify-content-center rounded-circle p-3 mb-3" style={{ width: '80px', height: '80px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.74zM1 11.105l4.708-2.897L1 5.383z"/>
                  </svg>
                </div>
                <h2 className="mb-3 fw-bold">¡Contactanos, ahorrador! :)</h2>
                <p className="text-muted">
                  ¿Tenés alguna pregunta, sugerencia o comentario? ¡Estamos acá para ayudarte!
                </p>
              </div>

              {mensaje.texto && (
                <Alert 
                  variant={mensaje.tipo} 
                  onClose={() => setMensaje({ tipo: '', texto: '' })} 
                  dismissible
                >
                  {mensaje.texto}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombre">
                  <Form.Label className="fw-bold text-black">Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    isInvalid={!!errors.nombre}
                    placeholder="Tu nombre completo"
                    className="rounded-3 py-2"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.nombre}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="fw-bold text-black">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    placeholder="tuemail@ejemplo.com"
                    className="rounded-3 py-2"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMensaje">
                  <Form.Label className="fw-bold text-black">Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    isInvalid={!!errors.mensaje}
                    placeholder="Escribí tu mensaje acá..."
                    className="rounded-3 py-2"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.mensaje}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid">
                  <Button 
                    variant="success" 
                    type="submit" 
                    size="lg"
                    disabled={enviando}
                    className="rounded-3 py-2 fw-bold"
                  >
                    {enviando ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Enviando...
                      </>
                    ) : (
                      'Enviar Mensaje'
                    )}
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5 justify-content-center">
          <Col md={4} className="text-center mb-4">
            <div className="bg-white p-4 rounded-3 shadow-sm">
              <div className="bg-success text-white d-inline-flex align-items-center justify-content-center rounded-circle p-3 mb-3" style={{ width: '60px', height: '60px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg>
              </div>
              <h5 className="fw-bold">Nuestra Dirección</h5>
              <p className="text-muted mb-0">Segurola y Habana<br />Buenos Aires, Argentina</p>
            </div>
          </Col>
          
          <Col md={4} className="text-center mb-4">
            <div className="bg-white p-4 rounded-3 shadow-sm">
              <div className="bg-success text-white d-inline-flex align-items-center justify-content-center rounded-circle p-3 mb-3" style={{ width: '60px', height: '60px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.27 2.48c.13.13.25.27.355.42.105.15.2.31.28.48.08.17.14.35.18.54.04.19.06.39.06.6v.51c0 .21-.02.42-.06.62-.04.2-.1.4-.18.58-.08.18-.17.35-.28.52-.11.17-.23.33-.355.48-.125.15-.26.29-.405.41l-1.777 1.414a1.745 1.745 0 0 1-2.612-.163l-.01-.01a1.745 1.745 0 0 1-.163-2.612l1.777-1.414a1.745 1.745 0 0 1 .405-.41c.145-.12.28-.26.405-.41z"/>
                </svg>
              </div>
              <h5 className="fw-bold">Teléfono</h5>
              <p className="text-muted mb-0">+54 11 2345-6789<br />Lun - Dom: 9:00 a 21:00</p>
            </div>
          </Col>
          
          <Col md={4} className="text-center mb-4">
            <div className="bg-white p-4 rounded-3 shadow-sm">
              <div className="bg-success text-white d-inline-flex align-items-center justify-content-center rounded-circle p-3 mb-3" style={{ width: '60px', height: '60px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 1.68.55 3.19 1.49 4.4.07.1.15.19.24.28l.25.25c.1.1.2.19.3.28.09.08.18.16.28.24.25.17.52.32.8.45.28.13.58.24.89.33.31.09.63.17.96.22.33.05.67.08 1.02.08.35 0 .69-.03 1.02-.08.33-.05.65-.13.96-.22.31-.09.61-.2.89-.33.28-.13.55-.28.8-.45.1-.08.19-.16.28-.24.09-.1.18-.18.28-.28l.25-.25c.09-.09.17-.18.24-.28C7.45 11.19 8 9.68 8 8c0-4.42-3.58-8-8-8zm0 1c3.86 0 7 3.14 7 7s-3.14 7-7 7c-3.86 0-7-3.14-7-7s3.14-7 7-7zm1 3H7v5h5V4z"/>
                </svg>
              </div>
              <h5 className="fw-bold">Horarios</h5>
              <p className="text-muted mb-0">Lunes a Viernes: 8:00 - 22:00<br />Sábados y Domingos: 9:00 - 21:00</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacto;