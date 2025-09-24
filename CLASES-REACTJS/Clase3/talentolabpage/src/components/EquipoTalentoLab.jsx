import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const EquipoTalentoLab = ({ equipo }) => {
    return (
        <Row>
            {equipo.map((persona, index) => (
                <Col md={6} className="mb-4" key={index}>
                    <Card className="shadow-sm bg-primary">
                        <Card.Img variant="top" src={persona.imagen} alt={persona.nombre} />
                        <Card.Body>
                            <Card.Title>{persona.nombre}</Card.Title>
                            <Card.Text>{persona.rol}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default EquipoTalentoLab;