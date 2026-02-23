import React, { useEffect, useState } from 'react';
import MontajeDesComp from './MontajeDesComp';

function UseStateEffect() {
    const [usuario, setUsuario] = useState("Andrés Sánchez");
    const [fecha, setFecha] = useState("01-09-2002");

    const cambiarNombre = (e) => setUsuario(e.target.value);

    const cambiarFecha = () => setFecha(new Date().toLocaleString());

    useEffect(() => {
        console.log("Has cargado un componente");
    }, []);

    return (
        <div className="container mt-4">

            <div className="mb-3">
                <p className="fw-bold">Usuario: {usuario}</p>
                <p>Fecha: {fecha}</p>
            </div>

            <div className="mb-3 d-flex gap-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Cambia tu nombre"
                    value={usuario}
                    onChange={cambiarNombre}
                />
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={cambiarFecha}
                >
                    Cambia la fecha y usuario
                </button>
            </div>

            {usuario.toLowerCase() === "francisco" && <MontajeDesComp />}
        </div>
    );
}

export default UseStateEffect;