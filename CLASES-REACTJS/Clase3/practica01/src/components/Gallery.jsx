import React from "react";

import { Container, Row, Col, Card } from 'react-bootstrap';

// Row CREA FILAS

const Gallery = () => {

    const imagenes = ["https://picsum.photos/300/200?1", "https://picsum.photos/300/200?2", "https://picsum.photos/300/200?3", "https://picsum.photos/300/200?4"]

    return (
        <div>

        </div>
    )
}

export default Gallery;

// map: FUNCIÓN FLECHA QUE RECIBE 2 PARÁMETROS
// src: es el valor de cada elemento del array
// index: es la posición del array.
// EL ATRIBUTO variant="top" en la Card muestra la imagen en la parte superior y en la inferior los datos de lo que quiero mostrar.
// EL ATRIBUTO src de la card es el atributo que, en definitiva, va a mostrar la imagen. toma el valor del parametro pasado a map.
// alt: texto que aparece cuando la imagen, por alguna razón, no se puede cargar.