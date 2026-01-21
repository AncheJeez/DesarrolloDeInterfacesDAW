import React from 'react';
import "./NuevoComponente.css";
import PropTypes from 'prop-types';

export const NuevoComponente = (props) => {
    const dias_semana = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
    return (
    <div className='NuevoComponente'>
        <h2>{props.title}</h2>
        <p>{props.text} & {props.numero}</p>
        <ul>
            {
                dias_semana.map((dia,indice) => {
                    return <li key={indice}>{dia}</li>;
                })
            }
        </ul>
    </div>
    )
}

NuevoComponente.protoTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired
};