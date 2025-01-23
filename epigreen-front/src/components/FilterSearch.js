import React, { useState } from "react";

export default function FilterSearch(){
    const [filters, setFilters]= useState({
        section:"",
        category:"",
        color:"",
        size:"",
        price:""
    });
    const handleFilter = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value})
    }

    return(
        <div className="container text-center">
            <h1>Recherche avec filtres</h1>
            <h3>Filtrer par:</h3>
            <select name="section" value={filters.section} onChange={handleFilter}>
                <option value="">Section</option>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
                <option value="Enfant">Enfant</option>
            </select>
            <select name="category" value={filters.category} onChange={handleFilter}>
                <option value="">Category</option>
                <option value="T-shirt">T-shirt</option>
                <option value="Pantalon">Pantalon</option>
                <option value="Robe">Robe</option>
            </select>
            <select name="color" value={filters.color} onChange={handleFilter}>
                <option value="">Color</option>
                <option value="Rouge">Rouge</option>
                <option value="Bleu">Bleu</option>
                <option value="Vert">Vert</option>
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
                <option value="20">20€</option>
                <option value="30">30€</option>
            </select>
            <button onClick={handleFilter} style={{marginTop: "20px"}}>
                Appliquer des filtres
            </button>
        </div>


    );
}