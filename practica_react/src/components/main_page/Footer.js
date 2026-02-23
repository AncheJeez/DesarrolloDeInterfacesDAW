import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-dark text-light mt-5 pt-4">
            <div className="container">
                <div className="row text-center text-md-start">

                    <div className="col-md-4 mb-3">
                        <h5>PRÁCTICA REACT</h5>
                        <p className="small">
                            Proyecto de aprendizaje usando React y Bootstrap.
                        </p>
                    </div>

                    <div className="col-md-4 mb-3">
                        <h5>Enlaces</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/contacto" className="text-decoration-none text-light">
                                    Contáctanos
                                </Link>
                            </li>
                            <li>
                                <a href="https://x.com/" target="_blank" rel="noreferrer" className="text-decoration-none text-light">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-decoration-none text-light">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-decoration-none text-light">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-3">
                        <h5>Información</h5>
                        <p className="small">
                            © 2026 practica-react.com
                        </p>
                    </div>

                </div>
            </div>

            <div className="bg-secondary text-center py-2 small">
                Todos los derechos reservados
            </div>
        </footer>
    );
}