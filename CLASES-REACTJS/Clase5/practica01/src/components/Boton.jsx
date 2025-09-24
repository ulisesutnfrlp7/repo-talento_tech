function Boton({texto, onclick}) {
    return <button onClick={onclick}> {texto} </button>
}

export default Boton;

// LE PASAMOS UN EVENTO PARA QUE, CUANDO SE HAGA CLICK EN EL BOTÓN, SE DISPARE