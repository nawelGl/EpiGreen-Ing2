import React, { useState } from 'react';
import axios from 'axios';
import {SEARCH_SERVICE}  from "../constants/back";
import { useNavigate} from "react-router-dom";

export default function Search() {
    const [searchTerm, setSearchTerm] = useState(''); // pour stocker les mots-clés
    const [results, setResults] = useState([]); // Stocker les résultats du backend
    const navigate = useNavigate(); // Router navigation

    const handleSearch = async () => {
        // Logique pour appeler le backend avec les mots-clés
        console.log("Début de la recherche");
        console.log("Mots-clés recherchés : ", searchTerm);
        try {

            //URL Search Params
            const params=new URLSearchParams();
            params.append("keywords",searchTerm);
            // Appel au backend avec les mots-clés
            const response = await axios.post(SEARCH_SERVICE.findSimilarProducts,params);
            console.log("réponse reçu: ",response);

            setResults(response.data); // Stocke les résultats retournés par le backend
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

    const FilterSearch =()=>{
        navigate("/FilterSearch");
    }

    return (
        <div className="container text-center">
            <h1>Recherche</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Que cherchez vous?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSearch();
                    }} // Détection de la touche "Enter"
                />
                <button onClick={handleSearch}>Enter</button>
            </div>
            <button onClick={FilterSearch} style={{ marginTop: "20px"}}>
                Recherche avec filtres
            </button>
            <div>
                {results !== null && (
                    <div>
                        <h2>produits d'après votre recherche:</h2>
                        <ul>
                            {results.map((product,index)=>(
                                product !==null &&(
                                    <li> key={product.IdProduct}>
                                        ID: {product.IdProduct}<br/>
                                        Reference:{product.reference}<br/>
                                        Section:{product.section}<br/>
                                        Category:{product.category}<br/>
                                        Color:{product.color}<br/>
                                        Size:{product.size}<br/>
                                        Price:{product.price}
                                    </li>
                                )

                            ))}

                        </ul>
                    </div>
                )}
            </div>
        </div>


    );
}
