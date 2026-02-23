import React from 'react';

function ComponenteGeneral(props) {
    return (
        <div className="card shadow h-100 text-center border border-2 border-dark">
            <div className="card-body">
                <h5 className="card-title fw-bold">
                    {props.nombreCompl}
                </h5>
                <p className="card-text">
                    {props.descripcion}
                </p>
            </div>
        </div>
    );
}

export default ComponenteGeneral;