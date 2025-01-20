import React, { useState } from 'react';
import axios from 'axios';


export default function Similarity() {

    const [productId1, setProductId1]= useState("");
    const [productId2, setProductId2]= useState("");
    const [results, setResults] = useState([]); // Stocker les résultats du backend

    const handleSearch = async ()=>{
        console.log("Product id1: ",productId1);
        console.log("Product id2: ",productId2);
        try {
            // Appel au backend avec les ID
            const response = await axios.post('api/similarity-search', {
                productId1: productId1,
                productId2: productId2
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
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };


    // return of result
    return (
        <div className="container text-center">
            <h1>Recherche</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="frist product id "
                    value={productId1}
                    onChange={(e) => setProductId1(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSearch();
                    }} // Détection de la touche "Enter"
                />
                <input
                    type="text"
                    placeholder="second product id "
                    value={productId2}
                    onChange={(e) => setProductId2(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSearch();
                    }} // Détection de la touche "Enter"
                />
                <button onClick={handleSearch}>Enter</button>
            </div>
        </div>

    );

}
