import React, { useState} from 'react';
import { getResultFromRoutingApi, getResultFromGeocodingApi } from "../api/Geoapify";
import { getCustomerById } from "../components/Customer";
import { getEntrepotById } from "../components/Entrepot";

const DemoLivraison = () => {
    const [distance, setDistance] = useState(null);
    const [customerId, setCustomerId] = useState("");
    const [entrepotId, setEntrepotId] = useState("");
    const [routeData, setRouteData] = useState(null);
    const [customer, setCustomer] = useState(null);
    const [entrepot, setEntrepot] = useState(null);
    const [customerCoordinates, setCustomerCoordinates] = useState({
        latitude: null,
        longitude: null
    });
    const [entrepotCoordinates, setEntrepotCoordinates] = useState({
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


    // Function to fetch entrepot data
    const fetchEntrepotData = async () => {
        if (entrepotId) {
            const entrepotData = await getEntrepotById(entrepotId);
            console.log("Données entrepot : " + entrepotData);
            setEntrepot(entrepotData);
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


    // Function to call the geocoding API for the entrepot
    const fetchEntrepotCoordinates = async () => {
        if (entrepot?.address) {
            try {
                const response = await getResultFromGeocodingApi(entrepot.address);
                const lat = response.features[0]?.properties.lat;
                const lon = response.features[0]?.properties.lon;
                if (
                    lat !== entrepotCoordinates.latitude ||
                    lon !== entrepotCoordinates.longitude
                ) {
                    setEntrepotCoordinates({ latitude: lat, longitude: lon });
                }
            } catch (error) {
                console.error("Erreur lors de l'appel à l'API de géocodage pour l'entrepot : ", error);
            }
        }
    };


    // Function to call the routage API
    const callRoutingApi = async () => {
        try {
            // Convertir les objets en tableaux [latitude, longitude]
            const fromWaypoint = [customerCoordinates.latitude, customerCoordinates.longitude];
            const toWaypoint = [entrepotCoordinates.latitude, entrepotCoordinates.longitude];

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


    const calculQuantiteCo2 = async () => {
        //TODO : ajouter table livraison pour pouvoir calculer emissions CO2 (calculer distace avec les attributs de la livraison aussi)
        //const quantiteCO2 = distance * livraison.transport.kgCo2;
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

            <h3>Entrepot :</h3>
            <div>
                <label>Entrepot ID : </label>
                <input
                    type="number"
                    value={entrepotId}
                    onChange={(e) => setEntrepotId(e.target.value)}
                />
            </div>
            <br/>
            <button onClick={fetchEntrepotData}>Récupérer données de l'entrepot</button>
            {entrepot && (
                <>
                    <div>
                        <br/>
                        <p><strong>Adresse : </strong>{entrepot.address}</p>
                    </div>
                    <br/>
                    <button onClick={fetchEntrepotCoordinates}>
                        Récupérer coordonnées magasin
                    </button>
                    {entrepotCoordinates.latitude && (
                        <div>
                            <p><strong>Latitude : </strong>{entrepotCoordinates.latitude}</p>
                            <p><strong>Longitude : </strong>{entrepotCoordinates.longitude}</p>
                        </div>
                    )}
                </>
            )}
            {customerCoordinates && entrepotCoordinates && (
                <>
                    <button onClick={callRoutingApi}>
                        Récupérer distance client - entrepot
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
