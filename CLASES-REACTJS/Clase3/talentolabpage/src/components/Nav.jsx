import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigate = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    Equipo Talento Lab
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

export default Navigate;