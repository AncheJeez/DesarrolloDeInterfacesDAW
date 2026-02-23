import React, {Suspense} from 'react';
import "./Footer.css";


export default function Footer() {
    return (
        <div>
            <div className="container-footer">
                <Suspense fallback={<span>Brother se te olvidó meter react-icons xd</span>}>
                    <h2>PRÁCTICA APRENDIENDO REACT</h2>
                    <a href="https://x.com/" target="_blank" rel="noreferrer">
                    </a>
                    <a href="https://GitHub.com/" target="_blank" rel="noreferrer">
                    </a>
                    <a href="https://LinkedIn.com/" target="_blank" rel="noreferrer">
                    </a>
                </Suspense>
                    <div className="container-lowsize">
                        © 2026-2026, practica-react.com, Inc. or its affiliates
                    </div>
            </div>
        </div>
    );
}
