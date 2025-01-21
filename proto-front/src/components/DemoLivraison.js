import React, { useState} from 'react';
import { getResultFromRoutingApi, getResultFromGeocodingApi } from "../api/Geoapify";
import { getCustomerById } from "../components/Customer";
import { getStoreById } from "../components/Store";

const DemoLivraison = () => {
    const [distance, setDistance] = useState(null);
    const [customerId, setCustomerId] = useState("");
    const [storeId, setStoreId] = useState("");
    const [routeData, setRouteData] = useState(null);
    const [geocodeData, setGeocodeData] = useState(null);
    const [customer, setCustomer] = useState(null);
    const [store, setStore] = useState(null);
    const address = '';

    //Params écrits en dur à changer
    const fromWaypoint = [38.937165, -77.04559];
    const toWaypoint = [39.881152, -76.990693];


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
            const response = await getResultFromGeocodingApi(customer.address);
            const lat = response.features[0]?.properties.lat;
            const lon = response.features[0]?.properties.lon;
            setGeocodeData({ lat, lon });
        } catch (error) {
            console.error("Erreur lors de l'appel à l'API de géocodage : ", error);
        }
    };

    const handleFetchData = async () => {
        if (customerId) {
            const customerData = await getCustomerById(customerId);
            setCustomer(customerData);
        }

        if (storeId) {
            const storeData = await getStoreById(storeId);
            setStore(storeData);
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
            <button onClick={handleFetchData}>Récupérer données client et magasin</button>

            {customer && (
                <div>
                    <br/>
                    <h3>Client :</h3>
                    <p><strong>Nom : </strong>{customer.firstname} {customer.lastname}</p>
                    <p><strong>Adresse : </strong>{customer.address}</p>
                </div>
            )}

            {store && (
                <div>
                    <br/>
                    <h3>Magasin :</h3>
                    <p><strong>Nom : </strong>{store.name}</p>
                    <p><strong>Adresse : </strong>{store.address}</p>
                </div>
            )}

            {customer && store && (
                <>
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
                </>
            )}
        </div>
    );
};

export default DemoLivraison;
