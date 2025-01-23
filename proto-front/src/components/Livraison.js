import React, { useState, useEffect } from "react";
import { getResultFromGeocodingApi, getResultFromRoutingApi } from "../api/Geoapify";
import { getDeliveryById } from "./Delivery";
import {getDeliveryScore, calculateCo2} from "./DeliveryScoring";

export default function Livraison() {
    // Choose a delivery to calculate its carbon footprint
    const [deliveryId, setDeliveryId] = useState("");
    const [delivery, setDelivery] = useState(null);

    // To fetch those objects' data from delivery
    const [account, setAccount] = useState(null);
    const [customer, setCustomer] = useState(null);
    const [entrepot, setEntrepot] = useState(null);
    const [transportation, setTransportation] = useState(null);

    const [distance, setDistance] = useState(null);
    const [score, setScore] = useState(null);

    const [customerCoordinates, setCustomerCoordinates] = useState({
        latitude: null,
        longitude: null,
    });
    const [entrepotCoordinates, setEntrepotCoordinates] = useState({
        latitude: null,
        longitude: null,
    });

    const [cO2quantity, setCO2quantity] = useState(null);


    // ===== Fetching objects' data from delivery =====
    // Function to fetch delivery data
    const fetchDeliveryData = async () => {
        try {
            const deliveryData = await getDeliveryById(deliveryId);
            setDelivery(deliveryData);
        } catch (error) {
            console.error("Erreur lors de la récupération des données de livraison : ", error);
        }
    };

    useEffect(() => {
        if (delivery) {
            setAccount(delivery.account);
            setCustomer(delivery.account?.customer);
            setEntrepot(delivery.entrepot);
            setTransportation(delivery.transportation);
        }
    }, [delivery]);

    // ===== Function to call the geocoding API for the customer =====
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

    // ===== Function to call the geocoding API for the entrepot =====
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

    // ===== Function to call the routage API =====
    const callRoutingApi = async () => {
        console.log("DANS CALL ROUTING API");
        try {
            const response = await getResultFromRoutingApi(customerCoordinates.latitude, customerCoordinates.longitude, entrepotCoordinates.latitude,entrepotCoordinates.longitude);
            const distance = response.features[0]?.properties.distance / 1000;
            setDistance(distance);
        } catch (error) {
            console.error("Erreur lors de l'appel à l'API de routage : ", error);
        }
    };


    // After getting customer and entrepot's data, fetching their coordonates
    useEffect(() => {
        if (customer) {
            fetchCustomerCoordinates();
        }
    }, [customer]);

    useEffect(() => {
        if (entrepot) {
            fetchEntrepotCoordinates();
        }
    }, [entrepot]);


    useEffect(() => {
        if (
            customerCoordinates.latitude && customerCoordinates.longitude &&
            entrepotCoordinates.latitude && entrepotCoordinates.longitude
        ) {
            callRoutingApi();
        }
    }, [customerCoordinates.latitude, customerCoordinates.longitude,
    entrepotCoordinates.latitude, entrepotCoordinates.longitude]);


    // Calculate delivry's CO2 quantity and score
    useEffect(() => {
        if (distance && transportation) {
            const fetchScore = async () => {
                // Calculate carbon footprint
                const carbonFootprint = await calculateCo2(distance, transportation.kgCo2);
                setCO2quantity(carbonFootprint);

                // Get carbon footprint's score
                 setScore(await getDeliveryScore(carbonFootprint));
            };
            fetchScore();
        }
    }, [distance, transportation]);



    // Display
    return (
        <div className="container">
            <h2>Choisissez votre mode de livraison : </h2><br />
            <h4>Livraison à domicile :</h4>
            <h5>Choix du numéro de livraison :</h5>
            <div>
                <label>Livraison ID : </label>
                <input
                    type="number"
                    value={deliveryId}
                    onChange={(e) => setDeliveryId(e.target.value)}
                />
            </div>
            <br />
            <button onClick={fetchDeliveryData}>Récupérer données de la livraison depuis la BD</button>
            {delivery && account && (
                <div>
                    <br/>
                    <strong>Métadonnées (pour la démo) : </strong>
                    <br/><br/>
                    <p><strong>Client :</strong><br/>Latitude client : {customerCoordinates.latitude}<br/>
                        Longitude client : {customerCoordinates.longitude}<br/>
                        Adresse client : {customer.address}</p>
                    <p><strong>Entrepot :</strong><br/>Latitude entrepot : {entrepotCoordinates.latitude}<br/>
                        Longitude entrepot : {entrepotCoordinates.longitude}<br/>
                        Adresse entrepot : {entrepot.address}</p>
                </div>
            )}
            {distance && (
                <div>
                    <br/>
                    <p><strong>Distance parcourue lors de la livraison :</strong> {distance} km.<br/></p>
                    <p><strong>Co2 engendré par cette livraison :</strong> {cO2quantity} kgCo2.<br/></p>
                    <p><strong>Score carbone de la livraison : </strong> {score}.<br/></p>
                </div>
            )}
        </div>
    );
}
