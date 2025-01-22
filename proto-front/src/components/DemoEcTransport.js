import React, { useState } from 'react';
import axios from 'axios';

import {GET_PROCESS_ROUTES_BY_PRODUCT} from "../constants/back";
import {getResultFromGeocodingApi, getResultFromRoutingApi} from "../api/Geoapify";

const DemoEcTransport = () => {
    const [productId, setProductId] = useState("");
    const [processRoutes, setProcessRoutes] = useState([]);
    const [cityDetails, setCityDetails] = useState(null);
    const [error, setError] = useState(null);

    const fetchProcessRoutes = async () => {
        if (!productId) {
            alert("Veuillez entrer un ID produit valide.");
            return;
        }

        try {
            const response = await axios.get(GET_PROCESS_ROUTES_BY_PRODUCT+productId);
            setProcessRoutes(response.data);
            setCityDetails(null);
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

            setCityDetails({
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
            });
        } catch (error) {
            console.error("Erreur lors de la récupération des détails du trajet :", error);
            setError("Impossible de récupérer les détails pour le trajet sélectionné.");
        }
    };

        const calculateDistance = async () => {
            if (!cityDetails?.fromCity || !cityDetails?.toCity) return alert("Veuillez sélectionner une route.");

            try {
                const { features } = await getResultFromRoutingApi(
                    [cityDetails.fromCity.latitude, cityDetails.fromCity.longitude],
                    [cityDetails.toCity.latitude, cityDetails.toCity.longitude]
                );
                const distanceInKm = features[0]?.properties?.distance / 1000;
                if (distanceInKm) {
                    alert(`La distance entre ${cityDetails.fromCity.city} et ${cityDetails.toCity.city} est de ${distanceInKm} km.`);
                } else {
                    alert("La distance n'a pas pu être calculée.");
                }
            } catch (error) {
                alert("Erreur lors du calcul de la distance.");
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
                        <th>ID Route</th>
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
            {cityDetails && (
                <div className="city-details">
                    <h3>Détails du Trajet Sélectionné :</h3>
                    <p><strong>Type de Transport :</strong> {cityDetails.typeTransportation}</p>
                    <p><strong>Ville de Départ :</strong> {cityDetails.fromCity.city}</p>
                    <p><strong> Pays (Départ) :</strong> {cityDetails.fromCity.country}</p>
                    <p><strong> Latitude (Départ) :</strong> {cityDetails.fromCity.latitude}</p>
                    <p><strong> Longitude (Départ) :</strong> {cityDetails.fromCity.longitude}</p>
                    <p><strong>Ville d'Arrivée :</strong> {cityDetails.toCity.city}</p>
                    <p><strong>Latitude (Arrivée) :</strong> {cityDetails.toCity.latitude}</p>
                    <p><strong>Longitude (Arrivée) :</strong> {cityDetails.toCity.longitude}</p>
                    <p><strong>Pays (Arrivée) :</strong> {cityDetails.toCity.country}</p>
                    <p><strong>Empreinte Carbone :</strong> {cityDetails.carbonFootprint}</p>

                    <button onClick={calculateDistance}> Calculer la distance </button>
                </div>
                )}
</div>
)
;
}
;

export default DemoEcTransport;