import axios from "axios";
import {LOCAL_HOST_ACCOUNT} from "../constants/back";

export const getAccountById = async (accountId) => {
    try {
        const response = await axios.get(LOCAL_HOST_ACCOUNT + accountId);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération du compte : ", error);
        return null;
    }
};