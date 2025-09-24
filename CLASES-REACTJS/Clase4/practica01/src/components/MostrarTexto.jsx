import { React, useState } from "react";

const MostrarTexto = () => {
    
    const [visible, setVisible] = useState(true);

    return(
        <div style={{ textAlign:"center", marginTop:"20px" }}>
            <button onClick={() => setVisible(!visible)}>
                {visible ? "OCULTAR" : "MOSTRAR"}
            </button>
            {visible && <p> TEXTO </p>}
        </div>
    )
}

export default MostrarTexto;