// src/components/Nav.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigate = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    Más que un Supermercado...
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className='ms-auto'>
                        <Nav.Link as={Link} to="/">
                            Inicio
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about">
                            Nosotros
                        </Nav.Link>
                        <Nav.Link as={Link} to="/">
                            Productos
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact">
                            Contacto
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigate;

// A DIFERENCIA DE LOS ENLACES TRADICIONALES, Link PERMITE LA NAVEGACIÓN SIN RECARGAR LA PÁGINA