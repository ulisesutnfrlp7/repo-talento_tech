import { useState } from "react";

const FormularioControlado = () => {

    const [nombre, setNombre] = useState("");
    const [provincia, setProvincia] = useState("");
    const [fecha, setFecha] = useState("");

    const manejarSubmit = (e) => { // e ES UN VALOR QUE LE ASIGNA JS A LOS ELEMENTOS QUE VAN A ESTAR DENTRO DE ESE FORMULARIO PARA PODER MANEJARLOS DE FORMA GLOBAL
        e.preventDefault(); // SE HACE UN PREVENT DEFAULT PARA QUE EL FORMULARIO NO SE ENVÍE DE UNA. EN EL CASO DE QUE HAYA ERRORES, NO SE ENVÍA. SINO, SE ENVÍA.
        alert('DATOS ENVIADOS CORRECTAMENTE');
        setNombre("");
        setProvincia("");
        setFecha("");
    }

    return(
        <div>
            <form onSubmit={manejarSubmit}>
                <button type="submit">
                    ENVIAR
                </button>
            </form>
        </div>
    )
}

export default FormularioControlado;

// EXPLICACIÓN DIDÁCTICA DE action: ATRIBUTO QUE LE DICE AL FORMULARIO "CUANDO VAYAS AL SERVIDOR, ANDÁ A BUSCAR A ESTE ARCHIVO EN PARTICULAR QUE TE VA A ESTAR ESPERANDO"