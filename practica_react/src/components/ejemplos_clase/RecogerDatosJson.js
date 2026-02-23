import React from 'react';
import cars from '../../data/cars.json';
import ComponenteGeneral from './componente_general';

function RecogerDatosJson() {

    const carsList = cars.map((v) => (
        <div key={v.id} className="col-md-4 mb-4">
            <ComponenteGeneral 
                nombreCompl={v.nombre} 
                descripcion={v.descripcion} 
            />
        </div>
    ));

    return (
        <div className="container text-center mt-5">
            <h1 className="mb-4">Coches (Se recogen los datos de un .json)</h1>

            <div className="row justify-content-center">
                {carsList}
            </div>
        </div>
    );
}

export default RecogerDatosJson;