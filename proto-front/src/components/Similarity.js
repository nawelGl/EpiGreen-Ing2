import React, { useState } from 'react';
import axios from 'axios';
import { SIMILARITY_SERVICE} from "../constants/back";


export default function Similarity() {

    const [productId1, setProductId1]= useState("");
    const [productId2, setProductId2]= useState("");
    const [result, setResult] = useState(null); // Stocker le résultat du backend
    //definition of backend adress

    const handleSearch = async ()=>{
        console.log("Product id1: ",productId1);
        console.log("Product id2: ",productId2);
        try {

            // transition to URL-encoded
            const params= new URLSearchParams();
            params.append("productId1",productId1);
            params.append("productId2",productId2);

            // Appel au backend avec les ID
            const response = await axios.post(SIMILARITY_SERVICE.calculateSimilarity,params);

            console.log("réponse reçu: ",response);

            setResult(response.data); // Stocke les résultats retournés par le backend
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
            <h1>Similarity Search</h1>
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
            <div>
                {result !==null &&(
                    <div>
                        <h2>Similarity score:</h2>
                        <p>{result}</p>
                    </div>
                )}
            </div>
        </div>

    );

}
