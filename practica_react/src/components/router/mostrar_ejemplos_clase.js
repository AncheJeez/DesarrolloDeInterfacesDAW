import React from 'react';
import EventMouse from '../ejemplos_clase/EventMouse';
import RecogerDatosJson from '../ejemplos_clase/RecogerDatosJson';
import DatoCondicional from '../ejemplos_clase/DatoCondicional';
import FormObj from '../ejemplos_clase/FormObj';
import FormularioLista from '../ejemplos_clase/FormularioLista';
import MontajeDesComp from '../ejemplos_clase/MontajeDesComp';
import UseStateComp from '../ejemplos_clase/UseStateComp';
import UseStateEffect from '../ejemplos_clase/UseStateEffect';

function MostrarEjemplosClase() {
    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Ejemplos de clase</h1>

            <div className="mb-4 px-4 py-3 border-2 rounded bg-info">
                <RecogerDatosJson />
            </div>

            <div className="mb-4 px-4 py-3 border-2 rounded bg-info">
                <EventMouse />
            </div>

            <div className="mb-4 px-4 py-3 border-2 rounded bg-info">
                <DatoCondicional nombre="Andrés" />
            </div>

            <div className="mb-4 px-4 py-3 border-2 rounded bg-info">
                <FormObj/>
            </div>

            <div className="mb-4 px-4 py-3 border-2 rounded bg-info">
                <FormularioLista/>
            </div>

            {/* <div className="mb-4 px-4 py-3 border-2 rounded bg-info">
                <MontajeDesComp/>
            </div> */}

            <div className="mb-4 px-4 py-3 border-2 rounded bg-info">
                <UseStateComp/>
            </div>

            <div className="mb-4 px-4 py-3 border-2 rounded bg-info">
                <UseStateEffect/>
            </div>
        </div>
    );
}

export default MostrarEjemplosClase;