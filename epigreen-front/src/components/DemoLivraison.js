import React, { useState} from 'react';
import { getResultFromRoutingApi, getResultFromGeocodingApi } from "../api/Geoapify";
import { getCustomerById } from "../components/Customer";
import { getEntrepotById } from "../components/Entrepot";

const DemoLivraison = () => {
    const [distance, setDistance] = useState(null);
    const [customerId, setCustomerId] = useState("");
    const [entrepotId, setEntrepotId] = useState("");
    const [customerCoordinatesDetails, setCustomerCoordinatesDetails] = useState("");
    const [entrepotCoordinatesDetails, setEntrepotCoordinatesDetails] = useState("");
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
    const [completeResponseCustomer, setCompleteResponseCustomer] = useState(false);
    const [completeResponseEntrepot, setCompleteResponseEntrepot] = useState(false);


    // Allow us to display the complete response from the API if the user wants to =======
    const handleClickCustomer = () => {
        setCompleteResponseCustomer(true);
    };

    const handleClickEntrepot = () => {
        setCompleteResponseEntrepot(true);
    };
    //=====================================================================================

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
                const stringifiedResponse = JSON.stringify(response);
                setCustomerCoordinatesDetails(stringifiedResponse);
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
                const stringifiedResponse = JSON.stringify(response);
                setEntrepotCoordinatesDetails(stringifiedResponse);
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
            const response = await getResultFromRoutingApi(customerCoordinates.latitude, customerCoordinates.longitude, entrepotCoordinates.latitude,entrepotCoordinates.longitude);
            const distance = response.features[0]?.properties.distance / 1000;
            setDistance(distance);
            setRouteData(response);
        } catch (error) {
            console.error("Erreur lors de l'appel à l'API de routage : ", error);
        }
    };


    const calculateCo2Quantity = async () => {
        //TODO : ajouter table livraison pour pouvoir calculer emissions CO2 (calculer distace avec les attributs de la livraison aussi)
        //const quantiteCO2 = distance * livraison.transport.kgCo2;
    };


    // Display
    return (
        <div className="container">
            <h2>Démo du processus de livraison</h2><br/>
            <h4>Cas d'une livraison au domicile du client :</h4>
            <p>Démonstration de tout le processus étape par étape pour la démo :</p>
            <h5>Choix du client :</h5>
            <div>
                <label>Client ID : </label>
                <input
                    type="number"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                />
            </div>
            <br/>
            <button onClick={fetchCustomerData}>Récupérer données du client depuis la BD</button>
            <br/>

            {customer && (
                <>
                    <div>
                        <br/>
                        <p><strong>Nom : </strong>{customer.firstname} {customer.lastname}</p>
                        <p><strong>Adresse : </strong>{customer.address}</p>
                    </div>

                    <button onClick={fetchCustomerCoordinates}>
                        Récupérer coordonnées client via l'API Geoapify
                    </button>
                    {customerCoordinates.latitude && (
                        <div>
                            <br/>
                            <p><strong>Latitude : </strong>{customerCoordinates.latitude}</p>
                            <p><strong>Longitude : </strong>{customerCoordinates.longitude}</p>
                            <br/>
                            <button onClick={handleClickCustomer}>Afficher la réponse complète depuis l'API :</button>
                            <br/>
                            {completeResponseCustomer && (
                                <p>{customerCoordinatesDetails}</p>
                            )}
                        </div>
                    )}
                </>
            )}

            <br/>
            <br/>
            <br/>

            <h5>Choix de l'entrepot :</h5>
            <div>
                <label>Entrepot ID : </label>
                <input
                    type="number"
                    value={entrepotId}
                    onChange={(e) => setEntrepotId(e.target.value)}
                />
            </div>
            <br/>
            <button onClick={fetchEntrepotData}>Récupérer données de l'entrepot depuis la BD</button>
            {entrepot && (
                <>
                    <div>
                        <br/>
                        <p><strong>Adresse : </strong>{entrepot.address}</p>
                    </div>
                    <button onClick={fetchEntrepotCoordinates}>
                        Récupérer coordonnées magasin via l'API Geoapify
                    </button>
                    <br/><br/>
                    {entrepotCoordinates.latitude && (
                        <div>
                            <p><strong>Latitude : </strong>{entrepotCoordinates.latitude}</p>
                            <p><strong>Longitude : </strong>{entrepotCoordinates.longitude}</p>
                            <button onClick={handleClickEntrepot}>Afficher la réponse complète depuis l'API :</button>
                            <br/>
                            {completeResponseEntrepot && (
                                <p>{entrepotCoordinatesDetails}</p>
                            )}
                        </div>
                    )}
                </>
            )}
            {customerCoordinates && entrepotCoordinates && (
                <>
                    <br/>
                    <br/>
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
