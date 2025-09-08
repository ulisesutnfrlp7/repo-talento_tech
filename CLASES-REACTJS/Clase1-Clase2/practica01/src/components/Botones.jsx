import React from "react";

const Botones = () => {

    const botones = ["Aceptar", "Cancelar", "Eliminar"]

    const coloresBoton = {
        Aceptar:'#00ff00',
        Cancelar:'#f0ad4e',
        Eliminar:'#d9534f',
    };
    
    const estilosBoton = {
        padding: '10px 20px',
        margin: '5px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
    }

    return (
        <div>
            {
                botones.map(
                    (btn) => (
                        <button key={btn} style = { { ...estilosBoton, backgroundColor: coloresBoton[btn], color: '#fff' } } onClick={() => alert('PRESIONASTE UN BOTÓN')}>
                            {btn}
                        </button>
                    )
                )
            }
        </div>
    )

}

export default Botones;