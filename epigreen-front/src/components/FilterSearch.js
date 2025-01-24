import React, { useState } from "react";
import axios from 'axios';
import {SEARCH_SERVICE} from "../constants/back";

export default function FilterSearch(){
    const [results, setResults] = useState([]);
    const [filters, setFilters]= useState({
        section:"",
        category:"",
        color:"",
        size:"",
        price:""
    });
    const handleFilter = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value})
    };

    const applyFilters = async ()=>{
        console.log("Filtres appliques:",filters);

        try{

            const params = new URLSearchParams({
                section: filters.section !== "" ? filters.section:null ,
                category: filters.category !== "" ? filters.category: null,
                color: filters.color !== "" ? filters.color:null,
                size: filters.size !== "" ? filters.size: null,
                price: filters.price? parseInt(filters.price) : null, //
            });

            const response = await axios.post(SEARCH_SERVICE.filterProducts,params);
            console.log("products filtres: ", response.data);
            setResults(response.data);
        }catch (e){
            console.error("Erreur lors de recherche filtres",e);
            alert("une erreur est survenue lors de lq recherche");
        }

    };

    return(
        <div className="container text-center">
            <h1>Recherche avec filtres</h1>
            <h3>Filtrer par:</h3>
            {/* selection of filters*/}
            <select name="section" value={filters.section} onChange={handleFilter}>
                <option value="">Section</option>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
                <option value="Enfant">Enfant</option>
            </select>
            <select name="category" value={filters.category} onChange={handleFilter}>
                <option value="">Category</option>
                <option value="Pull">Pull</option>
                <option value="Pantalon">Pantalon</option>
                <option value="Robe">Robe</option>
            </select>
            <select name="color" value={filters.color} onChange={handleFilter}>
                <option value="">Color</option>
                <option value="Rouge">Rouge</option>
                <option value="Noir">Bleu</option>
                <option value="Bleu">Vert</option>
            </select>
            <select name="size" value={filters.size} onChange={handleFilter}>
                <option value="">Size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
            </select>
            <select name="price" value={filters.price} onChange={handleFilter}>
                <option value="">Price</option>
                <option value="10">10€</option>
                <option value="30">30€</option>
                <option value="50">50€</option>
                <option value="80">80€</option>
            </select>
            <button onClick={applyFilters} style={{marginTop: "20px"}}>
                Appliquer des filtres
            </button>

            {/* result*/}
            <div>
                {results !== null && (
                    <div>
                        <h2>produits d'après votre recherche:</h2>
                        <ul>
                            {results.map((product, index) => (
                                product !== null && (
                                    <li key={product.idProduct}>
                                        ID: {product.idProduct}<br/>
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
                {results!==null && results.length === 0 &&(
                    <div style={{ color: "red", marginTop: "20px" }}>
                        <p>le produit n'existe pas</p>
                    </div>
                )}

            </div>
</div>


)
    ;
}