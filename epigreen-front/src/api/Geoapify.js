import axios from "axios";

export const getResultFromRoutingApi = async (fromWaypointLatitde, fromWaypointLongitude, toWaypointLatitude, toWaypointLongitude) => {
    const myAPIKey = "c81205a4fb97473b93dd0df61a9838c6";
    const url = `https://api.geoapify.com/v1/routing?waypoints=${fromWaypointLatitde},${fromWaypointLongitude}|${toWaypointLatitude},${toWaypointLongitude}&mode=drive&details=instruction_details&apiKey=${myAPIKey}`;
    const response = await axios.get(url);
    return response.data;
};

export const getResultFromRoutingApiNaw = async (fromWaypoint, toWaypoint) => {
    const myAPIKey = "c81205a4fb97473b93dd0df61a9838c6";
    const url = `https://api.geoapify.com/v1/routing?waypoints=${fromWaypoint.join(",")}|${toWaypoint.join(",")}&mode=drive&details=instruction_details&apiKey=${myAPIKey}`;
    const data = "Bonjour depuis Page1!";
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
};

export const getResultFromGeocodingApi = async (address) => {
    const myAPIKey = "c81205a4fb97473b93dd0df61a9838c6";
    const encodedAddress = encodeURIComponent(address);
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodedAddress}&apiKey=${myAPIKey}`;
    const response = await axios.get(url);
    return response.data;
};

    const Geoapify = () => {

    };

export default Geoapify;
