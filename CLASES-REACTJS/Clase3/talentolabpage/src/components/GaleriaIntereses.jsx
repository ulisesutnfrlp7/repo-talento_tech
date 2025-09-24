import React from 'react';
import { Row, Container } from 'react-bootstrap';

const GaleriaIntereses = ({ intereses }) => {
    const toggleColor = (e, color) => {
        const btn = e.target;
        const claseColor = `btn ${color} m-2`;
        const claseOriginal = 'btn btn-outline-dark m-2';
        btn.className = btn.className === claseColor ? claseOriginal : claseColor;
    };
    return (
            <Container>
                <h2>
                    GALERÍA DE INTERESES...
                </h2>
                <Row>
                    {
                        intereses.map(
                            (interes, index) => (
                                <button key={index} btn btn-outline-dark m-2 onClick={(e) => toggleColor(e, interes.color)}>
                                    {interes.nombre}
                                </button>
                            )
                        )
                    }
                </Row>
            </Container>
    )
}

export default GaleriaIntereses;