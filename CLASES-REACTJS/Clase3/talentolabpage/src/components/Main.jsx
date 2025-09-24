import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap'
import EquipoTalentoLab from "./EquipoTalentoLab";
import TarjetaProyecto from "./TarjetaProyecto";

const equipo = [
  { nombre: 'Silvia', rol: 'Product Owner', imagen: 'https://picsum.photos/id/236/200/300' },
  { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://picsum.photos/id/233/200/300' },
  { nombre: 'Matias', rol: 'Desarrollador', imagen: 'https://picsum.photos/id/232/200/300' },
  { nombre: 'Sabrina', rol: 'Desarrolladora', imagen: 'https://picsum.photos/id/230/200/300' }
]

const Main = () => {
    return (
    <main className="py-5 bg-info">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2>¡CONOCENOS UN POCO MÁS!</h2>
            <p>
              Estamos dispuestos a hacer historia. ¿Te sumás?
            </p>
          </Col>
          <Col md={6}>
            <EquipoTalentoLab equipo={equipo}/>
          </Col>
        </Row>
        <h2>
          SOBRE EL PROYECTO...
        </h2>
        <TarjetaProyecto titulo="AUTOSALES" descripcion="AUTOSALES es una plataforma digital para la gestión eficiente de ventas de vehículos, que conecta compradores y vendedores con herramientas modernas de catálogo, seguimiento y análisis comercial." botonTexto="MÁS INFO..."/>
      </Container>
    </main>
    )
}

export default Main;