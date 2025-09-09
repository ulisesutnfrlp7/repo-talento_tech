import React from 'react';
import {Container} from 'react-bootstrap';
// ACÁ SE PUEDE IMPORTAR TODO O POR PARTES
// LA VENTAJA DE IMPORTAR POR PARTES IMPLICA UNA CUESTIÓN DE BUENAS PRÁCTICAS

const Header = () => {
    return (
        <header className='bg-primary text-white py-4 shadow-sn'>
            <Container>
                <h1 className=''>
                    Proyecto Talento 2025
                </h1>
                <p className=''>
                    Componentes React Friendly
                </p>
            </Container>
        </header>
    )
}

export default Header;