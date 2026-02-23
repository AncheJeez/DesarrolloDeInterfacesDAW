import React, { useEffect, useState } from 'react';

const Reloj = () => {
    const obtenerTiempo = () => {
        const ahora = new Date();
        const horas = String(ahora.getHours()).padStart(2, '0');
        const minutos = String(ahora.getMinutes()).padStart(2, '0');
        const segundos = String(ahora.getSeconds()).padStart(2, '0');
        return `${horas}:${minutos}:${segundos}`;
    };

    const [tiempo, setTiempo] = useState(obtenerTiempo);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setTiempo(obtenerTiempo());
        }, 1000); 

        return () => clearInterval(intervalo);
    }, []); 

    return (
        <div className='text-indigo-400 text-lg font-bold border p-1 rounded-lg border-indigo-950 border-opacity-50 w-24 text-center'>
            {tiempo}
        </div>
    );
};

export default Reloj;