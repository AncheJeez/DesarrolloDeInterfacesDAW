import { useEffect, useState } from "react";

export default function ApiUsuariosTabla() {

    const [usuarios, setUsuarios] = useState([]);
    const [seleccionado, setSeleccionado] = useState(null);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    // Cargar usuarios
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsuarios(data))
            .catch(err => console.log(err));
    }, []);

    // Seleccionar fila
    const seleccionarUsuario = (user) => {
        setSeleccionado(user.id);
        setNombre(user.name);
        setEmail(user.email);
    };

    // Añadir usuario
    const añadirUsuario = () => {
        if (!nombre || !email) return;

        const nuevoUsuario = {
            id: Date.now(),
            name: nombre,
            email: email
        };

        setUsuarios([...usuarios, nuevoUsuario]);
        limpiarFormulario();
    };

    // Editar usuario
    const editarUsuario = () => {
        if (!seleccionado) return;

        setUsuarios(
            usuarios.map(user =>
                user.id === seleccionado ? { ...user, name: nombre, email: email } : user
            )
        );

        limpiarFormulario();
    };

    // Borrar usuario
    const borrarUsuario = () => {
        if (!seleccionado) return;

        setUsuarios(usuarios.filter(user => user.id !== seleccionado));
        limpiarFormulario();
    };

    const limpiarFormulario = () => {
        setSeleccionado(null);
        setNombre("");
        setEmail("");
    };

    return (
        <div className="container mt-4">

            <h2 className="text-center mb-4">CRUD Usuarios (Tabla)</h2>

            {/* FORMULARIO */}
            <div className="card p-3 mb-4 shadow-sm">
                <div className="row g-2">
                    <div className="col-md-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="col-md-5">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="col-md-2 d-grid gap-2">
                        <button className="btn btn-primary" onClick={añadirUsuario}>
                            Añadir
                        </button>
                        <button className="btn btn-warning" onClick={editarUsuario}>
                            Editar
                        </button>
                        <button className="btn btn-danger" onClick={borrarUsuario}>
                            Borrar
                        </button>
                    </div>
                </div>
            </div>

            {/* TABLA */}
            <div className="table-responsive">
                <table className="table table-hover table-bordered text-center align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(user => (
                            <tr
                                key={user.id}
                                onClick={() => seleccionarUsuario(user)}
                                className={seleccionado === user.id ? "table-primary" : ""}
                                style={{ cursor: "pointer" }}
                            >
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}