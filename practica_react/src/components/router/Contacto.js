import { useNavigate, useParams } from 'react-router-dom';

export default function Contacto() {

    const { nombre, email, descripcion } = useParams();
    const navegar = useNavigate();

    const enviar = (e) => {
        e.preventDefault();

        let nombref = e.target.nombre.value;
        let emailf = e.target.email.value;
        let descripcionf = e.target.descripcion.value;

        if (nombref.length) {
            navegar(`/contacto/${nombref}/${emailf}/${descripcionf}`);
        }
    }

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2 className="text-center mb-4">Formulario de Contacto</h2>

                {nombre && (
                    <div className="alert alert-success">
                        <strong>Gracias {nombre} su mensaje ha sido enviado correctamente.</strong><br/>
                        Email: {email}<br/>
                        escripción: {descripcion}
                    </div>
                )}

                <form onSubmit={enviar}>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input 
                            type="text" 
                            name="nombre"
                            className="form-control" 
                            required 
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            className="form-control" 
                            required 
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Descripción</label>
                        <textarea 
                            name="descripcion"
                            className="form-control"
                            rows="3"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}