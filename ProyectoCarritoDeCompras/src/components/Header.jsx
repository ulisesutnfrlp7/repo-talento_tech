// src/components/Header.jsx

import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header className='bg-success text-white py-4 shadow-sm'>
            <Container>
                <div className="d-flex align-items-center mb-2">
                    <img
                        src="./public/favicon.png"
                        alt="Logo"
                        style={{ width: '40px', height: '40px', marginRight: '12px' }}
                    />
                    <h1 className="mb-0">
                        Supermercado "Ahorrate El Mango"
                    </h1>
                </div>
                <p className='lead'>
                    Desde 2015 haciéndole bien al barrio.
                </p>
            </Container>
        </header>
    );
};

export default Header;