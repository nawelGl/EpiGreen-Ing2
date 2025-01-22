import React, { useState } from 'react';
import axios from 'axios';

import {GET_PROCESS_ROUTES, GET_PROCESS_ROUTES_BY_ID, GET_PROCESS_ROUTES_BY_PRODUCT} from "../constants/back";

export default function DemoEcTransport() {
    const [productId, setProductId] = useState(''); // ID du produit entré par l'utilisateur
    const [processRoutes, setProcessRoutes] = useState([]); // Liste des trajets effectué durant le process du produit
    const [error, setError] = useState(null);

    const getProcessRoutes = async () => {
        if (!productId) {
            alert("Veuillez entrer un ID produit valide.");
            return;
        }

        try {
            const response = await axios.get(`${GET_PROCESS_ROUTES_BY_PRODUCT}${productId}`);
            setProcessRoutes(response.data);
            setError(null);
        } catch (error) {
            console.error("Erreur lors de la récupération des trajets :", error);
            setError("Une erreur s'est produite lors de la récupération des trajets. Veuillez vérifier l'ID produit ou réessayer.");
            setProcessRoutes([]);
        }
    };


    const setProcessRouteData = async () => {
        console.log("Début du traitement");
        console.log(GET_PROCESS_ROUTES);

        axios.get(GET_PROCESS_ROUTES)
            .then(response => {
                console.log("Réponse complète :", response);
                setProcessRoutes(response.data);
                setError(null);
            })
            .catch(error => {
                console.error(error)
                console.error("Erreur lors de la récupération des trajets  GET ALL :", error);
                if (error.response) {
                    console.error("Détails de l'erreur :", error.response);
                }
            });
    }




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
                <button onClick={getProcessRoutes}>Rechercher</button>
            </div>
            <br />
            <button onClick={setProcessRouteData}>Tout afficher</button>
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
                        <th>Empreinte Carbone</th>
                    </tr>
                    </thead>
                    <tbody>
                    {processRoutes.map((route) => (
                        <tr key={route.idProcessRoutes}>
                            <td>{route.idProcessRoutes}</td>
                            <td>{route.typeTransportation}</td>
                            <td>{route.cityDep}</td>
                            <td>{route.cityArr}</td>
                            <td>{route.carbonFootprint}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                !error && <p>Aucune route trouvée pour cet ID produit.</p>
            )}
        </div>
    );
}
