import React, { useState } from 'react';
import axios from 'axios';


export default function Search() {
    const [searchTerm, setSearchTerm] = useState(''); // pour stocker les mots-clés
    const [results, setResults] = useState([]); // Stocker les résultats du backend
    const [loading, setLoading] = useState(false); // Indicateur de chargement

    const handleSearch = async () => {
        // Logique pour appeler le backend avec les mots-clés
        console.log("Début de la recherche");
        console.log("Mots-clés recherchés : ", searchTerm);
        setLoading(true);

        try {
            // Appel au backend avec les mots-clés
            const response = await axios.post('api/similarity-search', {
                searchTerm: String(searchTerm)
            });
            console.log("réponse reçu: ",response);

            if (!response.ok) {
                throw new Error(`Erreur : ${response.statusText}`);
            }

            const data = await response.json();
            setResults(data); // Stocke les résultats retournés par le backend
        } catch (error) {
            console.error("Erreur lors de la recherche :", error);
            alert("Une erreur est survenue lors de la recherche.");
        } finally {
            setLoading(false);
        }
    };


    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
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
                    onKeyDown={(e)=>{
                        if (e.key==='Enter') handleSearch();
                    }} // Détection de la touche "Enter"
                />
                <button onClick={handleSearch}>Enter</button>
            </div>
        </div>



    );
}
