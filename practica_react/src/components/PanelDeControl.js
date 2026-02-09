import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

function PanelDeControl() {
    return (
        <div>PanelDeControl
            <ul>
                <li>
                    <NavLink to="api">API</NavLink>
                </li>
                <li>
                    <NavLink to="api2">API2</NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default PanelDeControl