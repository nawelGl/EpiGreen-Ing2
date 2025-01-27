import React, { useState } from 'react';
import axios from 'axios';

import {GET_PROCESS_ROUTES_BY_PRODUCT} from "../constants/back";
import {getResultFromGeocodingApi, getResultFromRoutingApiNaw} from "../api/Geoapify";

const DemoEcTransport = () => {
    const [productId, setProductId] = useState("");
    const [processRoutes, setProcessRoutes] = useState([]);
    const [routeSelectedDetails, setRouteSelectedDetails] = useState(null);
    const [error, setError] = useState(null);
    const [distance, setDistance] = useState(null);
    const [carbonFootprintCalculated, setCarbonFootprint] = useState(null);



    const fetchProcessRoutes = async () => {
        if (!productId) {
            alert("Veuillez entrer un ID produit valide.");
            return;
        }

        try {
            const response = await axios.get(GET_PROCESS_ROUTES_BY_PRODUCT + productId);
            setProcessRoutes(response.data);
            setRouteSelectedDetails(null);
            setError(null);
        } catch (error) {
            console.error("Erreur lors de la récupération des trajets :", error);
            setError("Une erreur s'est produite lors de la récupération des trajets. Veuillez vérifier l'ID produit ou réessayer.");
            setProcessRoutes([]);
        }
    };

    const fetchCityDetails = async (route) => {

        try {
            const fromCityResponse = await getResultFromGeocodingApi(route.cityDep);
            const toCityResponse = await getResultFromGeocodingApi(route.cityArr);

            setRouteSelectedDetails({
                idProcessRoutes: route.idProcessRoutes,
                fromCity: {
                    city: route.cityDep,
                    latitude: fromCityResponse.features[0]?.properties.lat,
                    longitude: fromCityResponse.features[0]?.properties.lon,
                    country: fromCityResponse.features[0]?.properties.country,
                },
                toCity: {
                    city: route.cityArr,
                    latitude: toCityResponse.features[0]?.properties.lat,
                    longitude: toCityResponse.features[0]?.properties.lon,
                    country: toCityResponse.features[0]?.properties.country,
                },
                carbonFootprint: route.carbonFootprint,
                typeTransportation: route.typeTransportation,
                area: route.area,
            });
            setDistance(null); 
        } catch (error) {
            console.error("Erreur lors de la récupération des détails du trajet :", error);
            setError("Impossible de récupérer les détails pour le trajet sélectionné.");
        }
    };

    const calculateDistance = async () => {
        if (!routeSelectedDetails?.fromCity || !routeSelectedDetails?.toCity) {
            alert("Veuillez sélectionner une route.");
            return;
        }
    
        try {
            const requestData = {
                point1: [routeSelectedDetails.fromCity.longitude, routeSelectedDetails.fromCity.latitude],
                point2: [routeSelectedDetails.toCity.longitude, routeSelectedDetails.toCity.latitude],
            };
    
            const response = await axios.post('http://localhost:8081/api/calculateDistance', requestData);
    
            const distanceInKm = response.data.distance; // Assurez-vous que la réponse JSON contient une clé 'distance'
            if (distanceInKm) {
                setDistance(distanceInKm.toFixed(2));
            } else {
                alert("La distance n'a pas pu être calculée.");
            }
        } catch (error) {
            console.error("Erreur lors du calcul de la distance :", error);
            alert("Erreur lors du calcul de la distance.");
        }
    };
    

    const calculateCarbonFootprint = async () => {
        if (!routeSelectedDetails || !routeSelectedDetails.fromCity || !routeSelectedDetails.toCity) {
            alert("Veuillez d'abord sélectionner une route.");
            return;
        }

        if (!distance) {
            alert("Veuillez calculer la distance d'abord.");
            return;
        }
        const route = routeSelectedDetails;
        try {
            const requestData = {
                transportationType: route.typeTransportation,
                distance: distance,
                area: route.area,
            };

            const response = await axios.post('http://localhost:8081/api/transportationMean/calculateCarbonFootprint', requestData);

            const carbonFootprint = response.data;
            setCarbonFootprint(carbonFootprint);
            console.log(carbonFootprint);
            alert(`Empreinte carbone calculée : ${carbonFootprint} kg éq.CO2.`);
        } catch (error) {
            console.error("Erreur lors du calcul de l'empreinte carbone :", error);
            alert("Une erreur s'est produite lors du calcul de l'empreinte carbone. Veuillez réessayer.");
        }
    };

    const updateCarbonFootprintRoute = async () => {
        if (!distance) {
            alert("Veuillez calculer la distance d'abord.");
            return;
        }
     // get the route selected
        const route = processRoutes.find(route => route.idProcessRoutes === routeSelectedDetails.idProcessRoutes);
        if (!route) {
            alert("La route sélectionnée est introuvable.");
            return;
        }
    
        // Use of carbonFootprintCalculated const wich was calculated 
        if (carbonFootprintCalculated === null) {
            alert("L'empreinte carbone n'a pas été calculée.");
            return;
        }
    
        // Mise à jour de l'empreinte carbone dans cityDetails
        routeSelectedDetails.carbonFootprint = carbonFootprintCalculated;
        console.log("cityDetails.carbonFootprint:", routeSelectedDetails.carbonFootprint);
    
        // Mise à jour de l'empreinte carbone de la route
        route.carbonFootprint = routeSelectedDetails.carbonFootprint;
        console.log("route.carbonFootprint:", route.carbonFootprint);
    
        try {
            // Update of carbon footprint 
            await axios.post('http://localhost:8081/processroute/update', route);
            alert("Empreinte carbone mise à jour avec succès !");
    
            // MAJ list of routes
            setProcessRoutes((prevRoutes) =>
                prevRoutes.map((r) =>
                    r.idProcessRoutes === route.idProcessRoutes ? route : r
                )
            );
            setRouteSelectedDetails(null); 
        } catch (error) {
            console.error("Erreur lors de la mise à jour de l'empreinte carbone :", error);
            alert("Une erreur s'est produite lors de la mise à jour. Veuillez réessayer.");
        }
    };
    
    
    
    

    return (
        <div className="container">
            <h2>Demo EC Transport</h2>
            <div>
                <label htmlFor="productIdInput">Entrer l'ID produit :</label>
                <input
                    id="productIdInput"
                    type="number"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    placeholder="ID Produit"
                />
                <button onClick={fetchProcessRoutes}>Rechercher</button>
            </div>
            <br />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {processRoutes.length > 0 ? (
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>ID Trajet</th>
                        <th>Type de Transport</th>
                        <th>Ville de Départ</th>
                        <th>Ville d'Arrivée</th>
                        <th>Zone</th>
                        <th>Empreinte Carbone</th>
                    </tr>
                    </thead>
                    <tbody>
                    {processRoutes.map((route) => (
                        <tr key={route.idProcessRoutes} onClick={() => fetchCityDetails(route)}>
                            <td>{route.idProcessRoutes}</td>
                            <td>{route.typeTransportation}</td>
                            <td>{route.cityDep}</td>
                            <td>{route.cityArr}</td>
                            <td>{route.area}</td>
                            <td>{route.carbonFootprint}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                !error && <p>Aucune route trouvée pour cet ID produit.</p>
            )}
            <br />
            {routeSelectedDetails && (
                <div>
                    <h3>Détails du Trajet Sélectionné :</h3>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Départ</th>
                            <th>Arrivée</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <p><strong>Ville :</strong> {routeSelectedDetails.fromCity.city}</p>
                                <p><strong>Pays :</strong> {routeSelectedDetails.fromCity.country}</p>
                                <p><strong>Latitude :</strong> {routeSelectedDetails.fromCity.latitude}</p>
                                <p><strong>Longitude :</strong> {routeSelectedDetails.fromCity.longitude}</p>
                            </td>
                            <td>
                                <p><strong>Ville :</strong> {routeSelectedDetails.toCity.city}</p>
                                <p><strong>Pays :</strong> {routeSelectedDetails.toCity.country}</p>
                                <p><strong>Latitude :</strong> {routeSelectedDetails.toCity.latitude}</p>
                                <p><strong>Longitude :</strong> {routeSelectedDetails.toCity.longitude}</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <p><strong>Type de Transport :</strong> {routeSelectedDetails.typeTransportation}</p>
                    <p><strong>Empreinte Carbone :</strong> {routeSelectedDetails.carbonFootprint} kg CO2</p>
                    {distance && <p><strong>Distance :</strong> {distance} km</p>}
                    <div>
                        <button onClick={calculateDistance}>Calculer la distance</button>
                        <button onClick={calculateCarbonFootprint}>Calculer l'empreinte carbone</button>
                        <button onClick={updateCarbonFootprintRoute}>Mettre à jour l'empreinte carbone</button> {/* Nouveau bouton */}

                    </div>
                </div>
            )}
        </div>
    );
};

export default DemoEcTransport;