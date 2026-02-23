import React, { useState } from 'react';

function UseStateComp() {
    const [nombre, setNombre] = useState("Andrés Sánchez");
    const [ano, setAno] = useState(2026);

    const cambiarNombre = (e, nuevoNombre) => {
        setNombre(nuevoNombre);
    };

    const sumarAno = () => {
        if (!(ano >= 2027)) setAno(ano + 1);
    };

    const restarAno = () => {
        setAno(ano - 1);
    };

    return (
        <div className="container mt-4">

            <div className="mb-4 d-flex align-items-center gap-2">
                <input
                    type="text"
                    id="nombreInput"
                    className="form-control"
                    placeholder={"Nombre: " + nombre}
                />
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(e) => cambiarNombre(e, document.getElementById("nombreInput").value)}
                >
                    Enviar
                </button>
            </div>
            <div>
                <p className="fs-4">Valor del useState nombre: {nombre}!</p>
            </div>

            <div className="text-center mb-3">
                <p className="fs-4">Valor del useState año: {ano}</p>
            </div>

            <div className="d-flex justify-content-center gap-2">
                <button type="button" className="btn btn-secondary" onClick={restarAno}>
                    Año Anterior
                </button>
                <button type="button" className="btn btn-secondary" onClick={sumarAno}>
                    Año Siguiente
                </button>
            </div>
        </div>
    );
}

export default UseStateComp;