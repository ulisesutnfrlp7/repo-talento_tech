import React from "react";

const Productos = () => {

    const arrayProductos = ['Manzanas', 'Peras', 'Naranjas'];

    return (
        <ul>
            {
                arrayProductos.map(
                    (producto) => (
                        <li key={producto}>
                            {producto}
                        </li>
                    )
                )
            }
        </ul>
    )
}

export default Productos;