import React from 'react';
import {Link} from "react-router-dom";

export default function Navbar(){
    return (
        <ul className="nav justify-content-center my-3">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/search">Search</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/similarity">Similarity</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/livraison">Livraison</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/demoLivraison">Livraisons (démo process)</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/demoEcTransport">Demo EC Transport</Link>
            </li>

        </ul>
);
};