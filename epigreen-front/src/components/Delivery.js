import axios from "axios";
import {LOCAL_HOST_DELIVERY} from "../constants/back";

export const getDeliveryById = async (deliveryId) => {
    try {
        const response = await axios.get(LOCAL_HOST_DELIVERY + deliveryId);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des informations de livraison : ", error);
        return null;
    }
};