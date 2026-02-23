import React from 'react'

function DatoCondicional(props) {
    return (
        <div className='text-center text-2xl font-bold'>
            <p>Este componente muestra un dato que depende del <b>nombre</b> parametro dado</p>
            {props.nombre ? "Hola, " + props.nombre : "Hola, Usuario"} 
        </div>
    )
}

export default DatoCondicional;