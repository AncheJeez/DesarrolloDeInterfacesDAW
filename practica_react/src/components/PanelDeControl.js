import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

function PanelDeControl({type}) {

    const componentes = new Map(); 

    switch(type){
        case "API":
            componentes.set("api", "API");
            componentes.set("api2", "API Pokemon");
            break;
        default:
            componentes.set("MiBosque", "Mi componente con parametro de arbol");
            componentes.set("MiGatoNaranja", "Mi componente con parametro de gato");
            componentes.set("MiMountain", "Mi componente con parametro de montaña");
            break;
    }
    const containerStyle = {
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        margin: "1rem",
        borderRadius: "25px"
    };
    const text = {
        fontWeight: "bold",
        fontSize: "40px"
    }

    const listStyle = {
        listStyleType: "none",
        padding: 0
    };

    const itemStyle = {
        margin: "10px 0",
        fontWeight: "bold"
    };

    return (
        <div style={containerStyle}>
            <div style={text}>Panel De Control</div>
            <ul style={listStyle}>
                {[...componentes.entries()].map(([route, text]) => (
                    <li key={route} style={itemStyle}>
                        <NavLink to={route}>{text}</NavLink>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    )
}

export default PanelDeControl