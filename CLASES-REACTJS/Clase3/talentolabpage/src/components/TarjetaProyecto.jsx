import React from "react";

const TarjetaProyecto = ({ titulo, descripcion, botonTexto }) => {
    return (
        <div className="border rounded p-4 shadow-sm bg-dark text-white">
            <h4 className="mb-3">
                {titulo}
            </h4>
            <p className="mb-4">
                {descripcion}
            </p>
            <button className="btn btn-outline-light" onClick={() => alert(`EXPLORANDO: ${titulo}`)}>
                {botonTexto}
            </button>
        </div>
    );
}

export default TarjetaProyecto;