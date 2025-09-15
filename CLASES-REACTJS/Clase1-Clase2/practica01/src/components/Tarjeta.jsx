import React from "react";

const Tarjeta = ({titulo, descripcion, textoBoton}) => {
    return (
        <>
            <p>
                --- {titulo} ---
            </p>
            <p>
                ¡{descripcion}!
            </p>
            <button onClick={() => alert('¿VAS A RECHAZAR ESTA OFERTA?')}>
                {textoBoton}
            </button>
        </>
    )
}


export default Tarjeta;