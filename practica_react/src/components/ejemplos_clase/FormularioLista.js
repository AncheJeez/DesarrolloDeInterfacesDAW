import React, { useState, useEffect } from 'react';

function FormularioLista() {

    const [usuarios, setUsuarios] = useState(
        JSON.parse(localStorage.getItem("usuarios")) || []
    );
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    const guardarNombre = (e) => setNombre(e.target.value);
    const guardarEmail = (e) => setEmail(e.target.value);

    useEffect(() => {
        console.log(usuarios);
    }, [usuarios]);

    const guardarDatos = (e) => {
        e.preventDefault();
        if (!nombre || !email) return;

        const datos = { nombre, email };
        const nuevosUsuarios = [...usuarios, datos];
        setUsuarios(nuevosUsuarios);
        localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));

        setNombre("");
        setEmail("");
    };

    const eliminarDatos = (e) => {
        e.preventDefault();
        setUsuarios([]);
        localStorage.removeItem("usuarios");
    };

    const eliminarUsuario = (usuario) => {
        const filtrados = usuarios.filter(u => u.email !== usuario.email);
        setUsuarios(filtrados);
        localStorage.setItem("usuarios", JSON.stringify(filtrados));
    };

    return (
        <div className="container mt-4">

            <form onSubmit={guardarDatos}>
                <div className="mb-3 row align-items-center">
                    <label htmlFor="nombre" className="col-sm-2 col-form-label">Nombre:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            className="form-control"
                            value={nombre}
                            onChange={guardarNombre}
                            required
                        />
                    </div>
                </div>

                <div className="mb-3 row align-items-center">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={email}
                            onChange={guardarEmail}
                            required
                        />
                    </div>
                </div>

                <div className="mb-4 d-flex gap-2">
                    <button type="submit" className="btn btn-primary">
                        Enviar
                    </button>
                    <button type="button" onClick={eliminarDatos} className="btn btn-danger">
                        Borrar todo
                    </button>
                </div>
            </form>

            <div className="mt-4">
                <h5>Datos guardados</h5>
                {usuarios.length === 0 ? (
                    <p className="text-muted">Aún no hay usuarios</p>
                ) : (
                    <ul className="list-group">
                        {usuarios.map((user, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {user.nombre} — {user.email}
                                <button 
                                    type="button" 
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => eliminarUsuario(user)}
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default FormularioLista;