import React from 'react';
import GaleriaIntereses from './GaleriaIntereses';

const intereses = [
    { nombre: 'React', color: 'bg-primary'},
    { nombre: 'JavaScript', color: 'bg-warning'},
    { nombre: 'APIs', color: 'bg-light'},
    { nombre: 'Diseño UX', color: 'bg-success'},
    { nombre: 'Node.js', color: 'bg-danger'},
]

const Gallery = () => {
    return (
        <div className='bg-info'>
            <GaleriaIntereses intereses={intereses}/>
        </div>
    )
}

export default Gallery;