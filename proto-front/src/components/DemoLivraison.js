import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { getResultFromRoutingApi, getResultFromGeocodingApi } from "../api/Geoapify";

const DemoLivraison = () => {
    const [distance, setDistance] = useState(null);
    const [customerId, setCustomerId] = useState("");
    const [storeId, setStoreId] = useState("");

    //Tester appel a la fonction qui calcule la distance entre deux points


    const calculateDistance = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/calculate-distance', {
                customerId: parseInt(customerId),
                storeId: parseInt(storeId),
            });
            setDistance(response.data);
        } catch (error) {
            console.error("Erreur lors du calcul de la distance : ", error);
        }
    };

    //Affichage
    return (
        <div className="container">
            <h2>Démo Livraison</h2><br/>
            <div>
                <label>Client ID : </label>
                <input
                    type="number"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                />
            </div>
            <br/>
            <div>
                <label>Magasin ID : </label>
                <input
                    type="number"
                    value={storeId}
                    onChange={(e) => setStoreId(e.target.value)}
                />
            </div>
            <br/>
            <button onClick={calculateDistance}>Calculer Distance</button>
            <br/>
            <br/>
            <button onClick={getResultFromRoutingApi}>Tester API Routing</button>
            <br/>
            <br/>
            <button onClick={getResultFromGeocodingApi}>Tester API Geocoding</button>
            {distance !== null && (
                <div>
                    <br/><p><strong>Distance calculée : {distance} km</strong></p>
                </div>
            )}
        </div>
    );
};

export default DemoLivraison;
