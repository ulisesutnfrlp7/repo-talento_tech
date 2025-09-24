import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header className='bg-primary text-white py-4 shadow-sn'>
            <Container>
                <h1 className='mb-1'>
                    Proyecto Equipo Talento Lab 2025
                </h1>
                <p className='lead'>
                    Más que un equipo...
                </p>
            </Container>
        </header>
    )
}

export default Header;