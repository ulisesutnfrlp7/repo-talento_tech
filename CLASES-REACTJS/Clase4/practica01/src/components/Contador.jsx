import { React, useState } from "react";
import { Container } from "react-bootstrap";

const Contador = () => {

    const [contador, setContador] = useState(0) // EL 0 ES EL ARGUMENTO INICIAL. CUANDO SE CREA EL useState, SE LE ASIGNA 0 AL CONTADOR (PORQUE SINO EL DATO NUNCA SE INICIALIZARÍA)
    
    return(
        <Container>
            <p className="fs-4 fw-semibold text-primary">
                VALOR DEL CONTADOR: {contador}
            </p>
            <button className="btn btn-success px-4 py-2" onClick={() => setContador(contador+1)}>
                INCREMENTAR CONTADOR
            </button>
            <br/>
            <br/>
            <button className="btn btn-success px-4 py-2" onClick={() => setContador(contador-1)}>
                DECREMENTAR CONTADOR
            </button>
            <br/>
            <br/>
            <button className="btn btn-success px-4 py-2" onClick={() => setContador(0)}>
                RESETEAR CONTADOR
            </button>
        </Container>
    )
}

export default Contador;