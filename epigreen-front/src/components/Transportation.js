import axios from "axios";
import {LOCAL_HOST_TRANSPORTATION} from "../constants/back";

export const getTransportationById = async (transportationId) => {
    try {
        const response = await axios.get(LOCAL_HOST_TRANSPORTATION + transportationId);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération du moyen de transport : ", error);
        return null;
    }
};