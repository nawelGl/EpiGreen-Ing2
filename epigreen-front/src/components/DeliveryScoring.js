import axios from "axios";
import {LOCAL_HOST_DELIVERY_SCORING_API_SCORE , LOCAL_HOST_DELIVERY_SCORING_API_CO2} from "../constants/back";

export const getDeliveryScore = async (carbonFootprint) => {
    try {
        const response = await axios.get(LOCAL_HOST_DELIVERY_SCORING_API_SCORE, {
            params: { carbonFootprint },
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors du calcul du score de livraison : ", error);
        return null;
    }
};

export const calculateCo2 = async (distance, kgCo2PerKm) => {
    try {
        const response = await axios.get(LOCAL_HOST_DELIVERY_SCORING_API_CO2, {
            params: { distance, kgCo2PerKm },
        });
        return response.data;
    } catch (error) {
        console.error("Erreur lors du calcul de l'empreinte carbone : ", error);
        return null;
    }
};
