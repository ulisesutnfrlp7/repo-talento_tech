// src/pages/Nosotros.jsx

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Nosotros = () => {
  return (
      <Container className="py-5">
        {/* Encabezado destacado */}
        <Row className="justify-content-center mb-5">
          <Col lg={10} className="text-center">
            <h1 className="display-5 fw-bold text-black mb-3" style={{ fontFamily: "'Georgia', serif" }}>
              🛒 Ahorrate El Mango
            </h1>
            <p className="lead text-black fw-normal" style={{ fontSize: '1.25rem' }}>
              EL SUPERMERCADO DONDE TU BILLETERA RESPIRA HONDO Y SONRÍE
            </p>
            <div className="my-4" style={{ borderBottom: '2px dashed #ffffff', width: '80%', margin: '0 auto' }}></div>
          </Col>
        </Row>

        {/* Contenido dividido en bloques temáticos */}
        <Row className="gy-4 mb-5">
          {/* Bloque 1: Misión y espíritu */}
          <Col md={6}>
            <div className="d-flex align-items-start mb-4">
              <div className="me-3 mt-1">
                <i className="bi bi-lightbulb text-warning fs-4"></i>
              </div>
              <p className="text-black">
                Bienvenido a <strong>Ahorrate El Mango</strong>, el único supermercado donde ahorrar no es una promesa… ¡es un deporte nacional! Acá no venís a gastar: venís a esquivar precios altos como si fueran mosquitos en verano. Porque sabemos que cada mango cuenta, y nosotros te ayudamos a contar hasta el último.
              </p>
            </div>
          </Col>

          {/* Bloque 2: Propuesta de valor */}
          <Col md={6}>
            <div className="d-flex align-items-start mb-4">
              <div className="me-3 mt-1">
                <i className="bi bi-star-fill text-warning fs-4"></i>
              </div>
              <p className="text-black">
                Desde que abrimos nuestras puertas (y nuestras heladeras), nos propusimos una misión clara: que el changuito vuelva a casa lleno, pero que el bolsillo no llegue llorando. Y lo logramos. ¿Cómo? Con precios que parecen chistes, ofertas que parecen errores de imprenta, y combos que hacen que tu suegra te diga “che, ¿me llevás?”.
              </p>
            </div>
          </Col>

          {/* Bloque 3: Productos y servicio */}
          <Col md={6}>
            <div className="d-flex align-items-start mb-4">
              <div className="me-3 mt-1">
                <i className="bi bi-basket2 text-warning fs-4"></i>
              </div>
              <p className="text-black">
                Tenemos de todo: frutas que no vienen con drama, verduras que no te juzgan si no sabés cocinarlas, carnes que no se escapan del presupuesto, pan recién horneado que te hace sentir chef aunque solo sepas hacer tostadas, y productos de limpieza que limpian hasta tu conciencia.
              </p>
            </div>
          </Col>

          {/* Bloque 4: Inclusión y promociones */}
          <Col md={6}>
            <div className="d-flex align-items-start mb-4">
              <div className="me-3 mt-1">
                <i className="bi bi-gift text-warning fs-4"></i>
              </div>
              <p className="text-black">
                ¿Querés más? Tenemos promos que cambian más seguido que los precios del dólar, descuentos que parecen memes (“¡2x1 en papel higiénico, por si te agarran las urgencias!”), y beneficios para jubilados, estudiantes, familias numerosas y gente que simplemente tiene cara de buena onda.
              </p>
            </div>
          </Col>

          {/* Bloque 5: Experiencia digital */}
          <Col md={12}>
            <div className="d-flex align-items-start mb-4 p-4 bg-white rounded shadow-sm border">
              <div className="me-3 mt-1">
                <i className="bi bi-phone text-primary fs-4"></i>
              </div>
              <p className="text-dark mb-0">
                Y si sos de los modernos, también tenemos tienda online. Podés comprar desde el sillón, en pijama, mientras discutís con tu gato. Retiro en tienda, envío a domicilio, pago con QR, con billetera virtual, con tarjeta, con promesa de amistad… ¡lo que tengas! Si no sabés cómo pagar, te enseñamos. Si no sabés qué llevar, te recomendamos. Si no sabés por qué viniste, te damos un café y lo charlamos.
              </p>
            </div>
          </Col>
        </Row>

        {/* Lema final en una card destacada */}
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="text-center shadow-lg rounded-3 border-0 bg-gradient p-4">
              <Card.Body>
                <Card.Text className="fst-italic text-white fw-bold fs-5 mb-2">
                  Nuestro lema es simple:
                </Card.Text>
                <Card.Title className="display-6 fw-bold" style={{ fontFamily: "'Georgia', serif" }}>
                  “Ahorrate El Mango”… y si podés, ahorrate el drama también.
                </Card.Title>
                <Card.Text className="mt-3 text-black">
                  Porque comprar no tiene que ser una odisea. Tiene que ser fácil, rápido, divertido, y sobre todo, barato. Y si te vas con una sonrisa, mejor.
                </Card.Text>
                <Card.Text className="mt-3 fw-bold text-black">
                  Ahorrate El Mango. El supermercado que no te cobra por respirar, pero sí te hace reír mientras comprás.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  );
};

export default Nosotros;