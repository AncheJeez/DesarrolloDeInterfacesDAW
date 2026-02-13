import React, {Suspense} from 'react';
import "./Footer.css";
// import { AiFillHeart, AiFillTwitterCircle, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

// const AiFillHeart = React.lazy(() => import("react-icons/ai").then(module => ({ default: module.AiFillHeart })));
const AiFillHeart = React.lazy(() =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(import("react-icons/ai").then(module => ({ default: module.AiFillHeart })));
        }, 2000);
    })
);
const AiFillTwitterCircle = React.lazy(() => import("react-icons/ai").then(module => ({ default: module.AiFillTwitterCircle })));
const AiOutlineGithub = React.lazy(() => import("react-icons/ai").then(module => ({ default: module.AiOutlineGithub })));
const AiFillLinkedin = React.lazy(() => import("react-icons/ai").then(module => ({ default: module.AiFillLinkedin })));


export default function Footer() {
    return (
        <div>
            <div className="container-footer">
                <Suspense fallback={<span>Brother se te olvidó meter react-icons xd</span>}>
                    <h2><AiFillHeart size={15} color="red" /> PRÁCTICA APRENDIENDO REACT <AiFillHeart size={15} color="red" /></h2>
                    <a href="https://x.com/" target="_blank" rel="noreferrer">
                        <AiFillTwitterCircle size={30} color="blue"/>
                    </a>
                    <a href="https://GitHub.com/" target="_blank" rel="noreferrer">
                        <AiOutlineGithub size={30}/>
                    </a>
                    <a href="https://LinkedIn.com/" target="_blank" rel="noreferrer">
                        <AiFillLinkedin size={30} color="lightblue"/>
                    </a>
                </Suspense>
                    <div className="container-lowsize">
                        © 2026-2026, practica-react.com, Inc. or its affiliates
                    </div>
            </div>
        </div>
    );
}
