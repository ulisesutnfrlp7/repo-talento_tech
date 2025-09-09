import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    Talento Tech 2025
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className='ms-auto'>
                        <Nav.Link href='#'>
                            Inicio
                        </Nav.Link>
                        <Nav.Link href='#'>
                            Galeria
                        </Nav.Link>
                        <Nav.Link href='#'>
                            Contacto
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;

// NO CONFUNDIR LAS GRILLAS DE BOOTSTRAP CON EL GRID DE CSS
// SE PUEDEN PONER TANTAS FILAS COMO YO QUIERA, PERO DIVIDIDAS EN 12 PARTES
// PERMITE HACER UN DISEÑO RESPONSIVO