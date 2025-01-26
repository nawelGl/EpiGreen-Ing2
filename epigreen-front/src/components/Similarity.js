import React, { useState } from 'react';
import axios from 'axios';
import { SIMILARITY_SERVICE, GET_PRODUCT_BY_ID} from "../constants/back";


export default function Similarity() {

    const [productId1, setProductId1]= useState("");
    const [productId2, setProductId2]= useState("");
    const [result, setResult] = useState(null); // Stocker le résultat du backend
    const [product1, setProduct1] = useState(null); //information product 1
    const [product2, setProduct2] =useState(null); // information product 2
    const [errorMessage, setErrorMessage]=useState(""); //error message

    const handleSearch = async ()=>{
        console.log("Product id1: ",productId1);
        console.log("Product id2: ",productId2);

        setErrorMessage("");

        try {
            // calculate similarity score of products (two)
            // transition to URL-encoded
            const params= new URLSearchParams();
            params.append("productId1",productId1);
            params.append("productId2",productId2);

            const similarityResponse = await axios.post(SIMILARITY_SERVICE.calculateSimilarity,params);
            console.log("réponse reçu: ",similarityResponse);
            setResult(similarityResponse.data); // Stocke les résultats retournés par le backend

            const product1Response = await axios.get(`${GET_PRODUCT_BY_ID}${productId1}`);
            const product2Response = await axios.get(`${GET_PRODUCT_BY_ID}${productId2}`);

            console.log("Product 1 response: ", product1Response);
            console.log("Product 2 response: ", product2Response);

            setProduct1(product1Response.data);
            setProduct2(product2Response.data);

        } catch (error) {
            console.error("Erreur lors de la recherche :", error);
            if (error.response){
                if(error.response.status===404){
                    setErrorMessage("product n'exsite pas")
                }else{
                    setErrorMessage("Veuillez saisir les ID de produit");
                }
            }else{
                setErrorMessage("Network error");
            }
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
            <h2>Similarity Search</h2><br/>
            <div className="search-bar">
                <label>Produit 1:</label>
                <input
                    type="text"
                    placeholder="first product id "
                    value={productId1}
                    onChange={(e) => setProductId1(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSearch();
                    }} // Détection de la touche "Enter"
                    /><br/>
                <label>Produit 2:</label>
                <input
                    type="text"
                    placeholder="second product id "
                    value={productId2}
                    onChange={(e) => setProductId2(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSearch();
                    }} // Détection de la touche "Enter"
                /><br/>
                <button onClick={handleSearch}>Entrer les ID</button>
            </div>
            {/* error msg*/}
            {errorMessage && (
                <div style={{ color: "red", marginTop: "20px" }}>
                    <p>{errorMessage}</p>
                </div>
            )}
            <div>
                {result !== null && (
                    <div>
                        <h2>Similarity score:</h2>
                        <p>{result}%</p>
                        <br/>
                        {product1 &&(
                            <div>
                                <h3>Product 1 Details:</h3>
                                <p>ID: {product1.idProduct}</p>
                                <p>Reference: {product1.reference}</p>
                                <p>Section: {product1.section}</p>
                                <p>Category: {product1.category}</p>
                                <p>Size: {product1.size}</p>
                                <p>Color: {product1.color}</p>
                                <p>Material: {product1.material}</p>
                                <p>Price: ${product1.price}</p>
                            </div>
                        )}
                        <br/>
                        {product2 &&(
                            <div>
                                <h3>Product 2 Details:</h3>
                                <p>ID: {product2.idProduct}</p>
                                <p>Reference: {product2.reference}</p>
                                <p>Section: {product2.section}</p>
                                <p>Category: {product2.category}</p>
                                <p>Size: {product2.size}</p>
                                <p>Color: {product2.color}</p>
                                <p>Material: {product2.material}</p>
                                <p>Price: ${product2.price}</p>
                            </div>
                        )}
                        {product1!==null && product1.length === 0  &&(
                            <div style={{ color: "red", marginTop: "20px" }}>
                                <p>le produit 1 n'existe pas</p>
                            </div>
                        )}
                        {product2 !==null && product2.length === 0  &&(
                            <div style={{ color: "red", marginTop: "20px" }}>
                                <p>le produit 2 n'existe pas</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>

    );

}
