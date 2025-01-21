import React, { useState} from 'react';
import { getResultFromRoutingApi, getResultFromGeocodingApi } from "../api/Geoapify";

const DemoLivraison = () => {
    const [distance, setDistance] = useState(null);
    const [customerId, setCustomerId] = useState("");
    const [storeId, setStoreId] = useState("");
    const [routeData, setRouteData] = useState(null);
    const [geocodeData, setGeocodeData] = useState(null);

    //Params écrits en dur à changer
    const fromWaypoint = [38.937165, -77.04559];
    const toWaypoint = [39.881152, -76.990693];

    const address = "17 avenue du 11 novembre 1918, 94400, Vitry-sur-Seine, France";

    // Function to call the routage API
    const callRoutingApi = async () => {
        try {
            const response = await getResultFromRoutingApi(fromWaypoint, toWaypoint);
            const distance = response.features[0]?.properties.distance / 1000;
            setDistance(distance);
            setRouteData(response);
        } catch (error) {
            console.error("Erreur lors de l'appel à l'API de routage : ", error);
        }
    };

    // Function to call the geocoding API
    const callGeocodingApi = async () => {
        try {
            const response = await getResultFromGeocodingApi(address);
            const lat = response.features[0]?.properties.lat;
            const lon = response.features[0]?.properties.lon;
            setGeocodeData({ lat, lon });
        } catch (error) {
            console.error("Erreur lors de l'appel à l'API de géocodage : ", error);
        }
    };


    // Display
    return (
        <div className="container">
            <h2>Démo Livraison</h2><br />
            <div>
                <label>Client ID : </label>
                <input
                    type="number"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                />
            </div>
            <br />
            <div>
                <label>Magasin ID : </label>
                <input
                    type="number"
                    value={storeId}
                    onChange={(e) => setStoreId(e.target.value)}
                />
            </div>
            <br />
            <button onClick={callGeocodingApi}>Tester API Geocoding</button>
            {geocodeData && (
                <div>
                    <p><strong>Latitude : </strong>{geocodeData.lat}</p>
                    <p><strong>Longitude : </strong>{geocodeData.lon}</p>
                </div>
            )}
            <br />
            <button onClick={callRoutingApi}>Tester API Routing</button>
            {distance !== null && (
                <div>
                    <p><strong>Distance calculée : {distance} km</strong></p>
                </div>
            )}
            <br />
        </div>
    );
};

export default DemoLivraison;
