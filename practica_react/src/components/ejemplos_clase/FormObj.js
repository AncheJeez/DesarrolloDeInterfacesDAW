import React, { useState } from 'react';

function FormObj() {

    const [usuario, setUsuario] = useState({
        nombre: "",
        apellido: "",
        edad: 0,
        descripcion: ""
    });

    const mostrarDatos = () => {
        const texto = `Nombre: ${usuario.nombre}\nApellido: ${usuario.apellido}\nEdad: ${usuario.edad}\nDescripción: ${usuario.descripcion}`.trim();

        const area = document.getElementById("areaTexto");
        if (area) area.value = texto;
    };

    const guardarCambios = (e) => {
        const input_name = e.target.name;
        setUsuario(prev => ({
            ...prev,
            [input_name]: e.target.value
        }));
    };

    return (
        <div className="container mt-4">

            <div className="mb-3 row align-items-center">
                <label htmlFor="nombre" className="col-sm-2 col-form-label">Nombre:</label>
                <div className="col-sm-10">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nombre"
                        name="nombre"
                        value={usuario.nombre} 
                        onChange={guardarCambios} 
                    />
                </div>
            </div>

            <div className="mb-3 row align-items-center">
                <label htmlFor="apellido" className="col-sm-2 col-form-label">Apellido:</label>
                <div className="col-sm-10">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="apellido"
                        name="apellido"
                        value={usuario.apellido} 
                        onChange={guardarCambios} 
                    />
                </div>
            </div>

            <div className="mb-3 row align-items-center">
                <label htmlFor="edad" className="col-sm-2 col-form-label">Edad:</label>
                <div className="col-sm-10">
                    <input 
                        type="number" 
                        className="form-control" 
                        id="edad"
                        name="edad"
                        value={usuario.edad} 
                        onChange={guardarCambios} 
                    />
                </div>
            </div>

            <div className="mb-3 row align-items-start">
                <label htmlFor="descripcion" className="col-sm-2 col-form-label">Descripción:</label>
                <div className="col-sm-10">
                    <textarea 
                        className="form-control" 
                        id="descripcion"
                        name="descripcion"
                        rows="4"
                        value={usuario.descripcion} 
                        onChange={guardarCambios} 
                    ></textarea>
                </div>
            </div>

            <div className="text-center mb-3">
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={mostrarDatos}
                >
                    Enviar
                </button>
            </div>

            <div className="">
                <textarea 
                    className="form-control" 
                    id="areaTexto" 
                    rows="6" 
                    readOnly
                ></textarea>
            </div>
        </div>
    );
}

export default FormObj;