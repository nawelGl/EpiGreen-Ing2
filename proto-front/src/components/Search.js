import React, { useState } from 'react';
import logo from '../assets/logo.jpeg';
import '../styles/App.css';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState(''); // État pour stocker les mots-clés

    const handleSearch = () => {
        // Logique pour appeler le backend avec les mots-clés
        console.log("Mots-clés recherchés : ", searchTerm);

    };


    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(); // Appeler la recherche si la touche "Enter" est pressée
        }
    };

    return (
        <div className="container text-center">
            <h1>Recherche</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Que cherchez vous?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyPress} // Détection de la touche "Enter"
                />
                <button onClick={handleSearch}>Enter</button>
            </div>
        </div>
    );
}
