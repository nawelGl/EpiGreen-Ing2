import React, { useState} from 'react';
import { getResultFromRoutingApi, getResultFromGeocodingApi } from "../api/Geoapify";
import { getCustomerById } from "../components/Customer";
import { getStoreById } from "../components/Store";
const DemoLivraison = () => {
    const [distance, setDistance] = useState(null);
    const [customerId, setCustomerId] = useState("");
    const [storeId, setStoreId] = useState("");
    const [routeData, setRouteData] = useState(null);
    const [customer, setCustomer] = useState(null);
    const [store, setStore] = useState(null);
    const [customerCoordinates, setCustomerCoordinates] = useState({
        latitude: null,
        longitude: null
    });
    const [storeCoordinates, setStoreCoordinates] = useState({
        latitude: null,
        longitude: null
    });

    // Function to fetch customer data
    const fetchCustomerData = async () => {
        if (customerId) {
            const customerData = await getCustomerById(customerId);
            setCustomer(customerData);
        }
    };

    // Function to fetch store data
    const fetchStoreData = async () => {
        if (storeId) {
            const storeData = await getStoreById(storeId);
            setStore(storeData);
        }
    };


    // Function to call the geocoding API for the customer
    const fetchCustomerCoordinates = async () => {
        if (customer?.address) {
            try {
                const response = await getResultFromGeocodingApi(customer.address);
                const lat = response.features[0]?.properties.lat;
                const lon = response.features[0]?.properties.lon;
                if (
                    lat !== customerCoordinates.latitude ||
                    lon !== customerCoordinates.longitude
                ) {
                    setCustomerCoordinates({ latitude: lat, longitude: lon });
                }
            } catch (error) {
                console.error("Erreur lors de l'appel à l'API de géocodage pour le client : ", error);
            }
        }
    };

// Function to call the geocoding API for the store
    const fetchStoreCoordinates = async () => {
        if (store?.address) {
            try {
                const response = await getResultFromGeocodingApi(store.address);
                const lat = response.features[0]?.properties.lat;
                const lon = response.features[0]?.properties.lon;
                if (
                    lat !== storeCoordinates.latitude ||
                    lon !== storeCoordinates.longitude
                ) {
                    setStoreCoordinates({ latitude: lat, longitude: lon });
                }
            } catch (error) {
                console.error("Erreur lors de l'appel à l'API de géocodage pour le magasin : ", error);
            }
        }
    };


    // Function to call the routage API
    const callRoutingApi = async () => {
        try {
            // Convertir les objets en tableaux [latitude, longitude]
            const fromWaypoint = [customerCoordinates.latitude, customerCoordinates.longitude];
            const toWaypoint = [storeCoordinates.latitude, storeCoordinates.longitude];

            console.log("fromWayPoint : " + fromWaypoint);
            console.log("toWayPoint : " + toWaypoint);

            // Appeler l'API avec ces tableaux
            const response = await getResultFromRoutingApi(fromWaypoint, toWaypoint);
            const distance = response.features[0]?.properties.distance / 1000;
            setDistance(distance);
            setRouteData(response);
        } catch (error) {
            console.error("Erreur lors de l'appel à l'API de routage : ", error);
        }
    };


    // Display
    return (
        <div className="container">
            <h2>Démo Livraison</h2><br/>
            <h3>Client :</h3>
            <div>
                <label>Client ID : </label>
                <input
                    type="number"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                />
            </div>
            <br/>
            <button onClick={fetchCustomerData}>Récupérer données du client</button>
            <br/>

            {customer && (
                <>
                    <div>
                        <br/>
                        <p><strong>Nom : </strong>{customer.firstname} {customer.lastname}</p>
                        <p><strong>Adresse : </strong>{customer.address}</p>
                    </div>
                    <br/>
                    <button onClick={fetchCustomerCoordinates}>
                        Récupérer coordonnées client
                    </button>
                    {customerCoordinates.latitude && (
                        <div>
                            <p><strong>Latitude : </strong>{customerCoordinates.latitude}</p>
                            <p><strong>Longitude : </strong>{customerCoordinates.longitude}</p>
                        </div>
                    )}
                </>
            )}

            <br/>
            <br/>

            <h3>Magasin :</h3>
            <div>
                <label>Magasin ID : </label>
                <input
                    type="number"
                    value={storeId}
                    onChange={(e) => setStoreId(e.target.value)}
                />
            </div>
            <br/>
            <button onClick={fetchStoreData}>Récupérer données du magasin</button>
            {store && (
                <>
                    <div>
                        <br/>
                        <p><strong>Nom : </strong>{store.name}</p>
                        <p><strong>Adresse : </strong>{store.address}</p>
                    </div>
                    <br/>
                    <button onClick={fetchStoreCoordinates}>
                        Récupérer coordonnées magasin
                    </button>
                    {storeCoordinates.latitude && (
                        <div>
                            <p><strong>Latitude : </strong>{storeCoordinates.latitude}</p>
                            <p><strong>Longitude : </strong>{storeCoordinates.longitude}</p>
                        </div>
                    )}
                </>
            )}
            {customerCoordinates && storeCoordinates && (
                <>
                    <button onClick={callRoutingApi}>
                        Récupérer distance client - magasin
                    </button>
                    {distance && (
                        <>
                            <div>
                                <p><strong>Distance : </strong>{distance}<strong> km.</strong></p>
                            </div>

                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default DemoLivraison;
