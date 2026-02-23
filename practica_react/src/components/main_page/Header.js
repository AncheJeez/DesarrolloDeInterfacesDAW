import React from 'react';
import "./Header.css";
import Reloj from './Reloj';

export default function Header() {
    return (
        <div className="container mt-3">
            <div class="container-header d-flex justify-content-between align-items-center p-3 border rounded">
                <h2>ANDRÉS J. PRÁCTICA APRENDIENDO REACT (Con Bootstrap)</h2>
                <Reloj/>
            </div>

        </div>
    );
}