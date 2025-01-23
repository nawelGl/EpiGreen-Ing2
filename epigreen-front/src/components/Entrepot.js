import axios from "axios";
import {LOCAL_HOST_ENTREPOT} from "../constants/back";

export const getEntrepotById = async (entrepotId) => {
    try {
        const response = await axios.get(LOCAL_HOST_ENTREPOT + entrepotId);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération de l'entrepot : ", error);
        return null;
    }
};
