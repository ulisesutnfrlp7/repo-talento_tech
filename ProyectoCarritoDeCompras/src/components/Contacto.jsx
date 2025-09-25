import React from "react";
import { Container, Card } from "react-bootstrap";

const Contacto = () => {
  return (
    <Container className="py-5">
      <Card className="p-4 shadow-sm">
        <h2 className="mb-3">📬 CONTACTANOS</h2>
        <p>
          Este espacio estará destinado a que los usuarios puedan ponerse en contacto con <strong>Ahorrate El Mango</strong> para consultas, sugerencias, reclamos o simplemente para decirnos que el pan está buenísimo.
        </p>
        <p>
          Pero no nos adelantemos, eso será problema futuro...
        </p>
      </Card>
    </Container>
  );
};

export default Contacto;