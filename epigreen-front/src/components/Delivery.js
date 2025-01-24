import axios from "axios";
import { LOCAL_HOST_DELIVERY, UPDATE_DELIVERY } from "../constants/back";

export const getDeliveryById = async (deliveryId) => {
    try {
        const response = await axios.get(LOCAL_HOST_DELIVERY + deliveryId);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des informations de livraison : ", error);
        return null;
    }
};

export const updateDeliveryMethod = async (delivery) => {
    try {
        await axios.post(UPDATE_DELIVERY, delivery);
        console.log("Méthode de livraison mise à jour avec succès.");
    } catch (error) {
        alert("Erreur lors de la mise à jour de la méthode de livraison : " + error);
    }
};
