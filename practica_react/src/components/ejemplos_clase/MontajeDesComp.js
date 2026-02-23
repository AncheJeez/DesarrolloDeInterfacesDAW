import React from 'react'
import { useEffect } from 'react';

function MontajeDesComp() {

    useEffect(() => {
        
        alert("COMPONENTE MONTADO!!");

        return () => {
            alert("COMPONENTE DESMONTADO!!");
        };
        
    }, []);


    return (
        <div>
            <h2>Ejemplo de montaje y desmontaje de un componente</h2>
        </div>
    )

}
export default MontajeDesComp