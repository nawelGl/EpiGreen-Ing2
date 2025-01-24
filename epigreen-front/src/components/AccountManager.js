import axios from "axios";
import {LOCAL_HOST_ACCOUNT_MANAGER_UPDATE_POINTS} from "../constants/back";

export const addPointsToAccount = async (score, account) => {
    try {
        const response = await axios.post(
            `${LOCAL_HOST_ACCOUNT_MANAGER_UPDATE_POINTS}?score=${score}`, // Le score est transmis dans l'URL
            account // L'objet Account est envoyé dans le corps de la requête
        );
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'ajout des points au compte du client :", error);
        return null;
    }
};
