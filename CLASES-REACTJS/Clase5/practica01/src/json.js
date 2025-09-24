// JSON SIMPLE

const persona = {
    nombre: "Nicolas",
    edad: 30,
    esEstudiante: false
}

// SE TIENE UN PAR CLAVE-VALOR. CUANDO SE CAPTURE DESDE EL BACKEND, LA PREGUNTA SERÁ: EN EL ATRIBUTO (CLAVE) nombre... ¿QUÉ VALOR HAY?

// PARA LOS PRODUCTOS, ESTO SERÁ ALGO MUY SIMILAR

console.log(persona)

const usuarios = {
    usuarios: [
        { id: 1, nombre: "Nicolas", activo: false },
        { id: 2, nombre: "Julieta", activo: false },
        { id: 3, nombre: "Valentina", activo: true }
    ]
}

console.log(usuarios)

const personaConDireccion = {
    persona: {
        nombre: "Nicolas",
        edad: 44,
        direccion: {
            ciudad: "Buenos Aires - Lanus",
            codigopostal: 1843 // EJEMPLO DE JSON ANIDADO
        }
    }
}

console.log("Ciudad:", personaConDireccion.persona.direccion.ciudad)

// COMO CARECEMOS DE UN BACKEND, NOS LAS VAMOS A TENER QUE INGENIAR PARA MANEJAR ESTAS CUESTIONES