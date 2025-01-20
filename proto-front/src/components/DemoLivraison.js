import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { getResultFromRoutingApi, getResultFromGeocodingApi } from "../api/Geoapify";

const DemoLivraison = () => {
    const [distance, setDistance] = useState(null);
    const [customerId, setCustomerId] = useState("");
    const [storeId, setStoreId] = useState("");


    //Params écrits en dur à changer
    const fromWaypoint = [38.937165, -77.04559];
    const toWaypoint = [39.881152, -76.990693];

    const address = "17 avenue du 11 novembre 1918, 94400, Vitry-sur-Seine, France";

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

    //créér un composant pour enregistrer les données de la fonction :
    const callRoutingApi = async () => {

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
            {distance !== null && (
                <div>
                    <br/><p><strong>Distance calculée : {distance} km</strong></p>
                </div>
            )}
            <button onClick={getResultFromRoutingApi(fromWaypoint, toWaypoint)}>Tester API Routing</button>
            <br/>
            <br/>
            <button onClick={getResultFromGeocodingApi(address)}>Tester API Geocoding</button>
        </div>
    );
};

export default DemoLivraison;
