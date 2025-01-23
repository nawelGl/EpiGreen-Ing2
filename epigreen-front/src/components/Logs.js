import React, { useState, useEffect } from 'react';

const Logs = () => {
    const [data, setData] = useState(null); // État pour stocker les données reçues
    const [error, setError] = useState(null); // État pour stocker les erreurs

    useEffect(() => {
        fetch('/api/info')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("Data:", data); // Vérifie la réponse JSON
                setData(data.message); // Stocke le message
            })
            .catch((err) => {
                console.error("Error:", err.message); // Gère les erreurs
                setError(err.message);
            });
    }, []);


    // Affichage conditionnel en fonction de l'état
    if (error) {
        return <div>Erreur : {error}</div>;
    }

    return (
        <div id="output">
            {data ? data : "Chargement des données..."}
        </div>
    );
};

export default Logs;
