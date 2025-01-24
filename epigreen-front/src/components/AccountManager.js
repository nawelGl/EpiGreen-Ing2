import axios from "axios";
import {LOCAL_HOST_ACCOUNT_MANAGER_UPDATE_POINTS} from "../constants/back";

export const addPointsToAccount = async (score, account) => {
    try {
        const response = await axios.post(
            `${LOCAL_HOST_ACCOUNT_MANAGER_UPDATE_POINTS}?score=${score}`, //
            account
        );
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'ajout des points au compte du client :", error);
        return null;
    }
};


