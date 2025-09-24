// NO ES NECESARIO HACER EL import React from "react" PORQUE YA ESTOY DICIENDO QUE VOY A HACER UN COMPONENTE .jsx

function Saludo(Props) { // Props ES UN OBJETO. DEBO ESPECIFICAR QUÉ CONTIENE Props
    return <h1>Hola, {Props.nombre}</h1>
}

export default Saludo;