import { useEffect, useState } from "react";

function DragonBall() {
    const [personajes, setPersonajes] = useState([]) // GUARDAREMOS VARIOS OBJETOS
    useEffect(
        () => {
            fetch("https://dragonball-api.com/api/characters")
            .then((res) => res.json())
            .then((data) => {
                setPersonajes(data.items);
            })
        }

    )
}

// CUANDO UTILIZAMOS RECURSOS EXTERNOS, NOS ENCONTRAMOS CON UN PROBLEMA: ESE RECURSO NO ES MÍO. POR LO TANTO, NO SABEMOS SI ESTÁ ACTIVO O NO. DEBEMOS DE ALGUNA MANERA CAPTURAR UN ERROR, SI ES QUE HAY, Y MOSTRAR UN MENSAJE AMENO POR PANTALLA ---> USAMOS catch

// Y SI MENCIONAMOS A catch, TENEMOS QUE MENCIONAR LA TRILOGÍA try, catch Y finally

// try INTENTA HACER ALGO

// SI OCURRE UN ERROR, catch LO ATRAPA Y MUESTRA UN ERROR ACORDE

// finally CIERRA EL ERROR PARA QUE NO SE PRODUZCAN OTROS ERRORES