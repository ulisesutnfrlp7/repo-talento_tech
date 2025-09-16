import { useState } from "react";

const BotonClick = () => {
    
    const [mensaje, setMensaje] = useState("");

    const manejarClick = () => {
        setMensaje("Hola Mundo desde React.js");
    }

    return(
        <div>
            <p>
                <button onClick={manejarClick}>
                    ¡HACÉ CLICK!
                </button>
                {mensaje}
            </p>
        </div>
    )
}

export default BotonClick;