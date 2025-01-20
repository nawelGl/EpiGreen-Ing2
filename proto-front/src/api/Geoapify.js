import axios from "axios";

// Appel API OK
/*export const getResultFromRoutingApi = async () => {
    const myAPIKey = "c81205a4fb97473b93dd0df61a9838c6";
    const fromWaypoint = [38.937165, -77.04559];
    const toWaypoint = [39.881152, -76.990693];
    const url = `https://api.geoapify.com/v1/routing?waypoints=${fromWaypoint.join(",")}|${toWaypoint.join(",")}&mode=drive&details=instruction_details&apiKey=${myAPIKey}`;
    const data = "Bonjour depuis Page1!";

    console.log("@@@ Dans getResultFromRoutingApi !");

    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
};*/

export const getResultFromRoutingApi = async (fromWaypoint, toWaypoint) => {
    const myAPIKey = "c81205a4fb97473b93dd0df61a9838c6";
    const url = `https://api.geoapify.com/v1/routing?waypoints=${fromWaypoint.join(",")}|${toWaypoint.join(",")}&mode=drive&details=instruction_details&apiKey=${myAPIKey}`;
    const data = "Bonjour depuis Page1!";

    console.log("@@@ Dans getResultFromRoutingApi !");

    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
};

//Appel API OK
/*export const getResultFromGeocodingApi = async () => {
    const myAPIKey = "c81205a4fb97473b93dd0df61a9838c6";
    const address = "17 avenue du 11 novembre 1918, 94400, Vitry-sur-Seine, France";
    const encodedAddress = encodeURIComponent(address);
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodedAddress}&apiKey=${myAPIKey}`;

    console.log("### Dans getResultFromGeocodingApi !");

    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
};*/

export const getResultFromGeocodingApi = async (address) => {
    const myAPIKey = "c81205a4fb97473b93dd0df61a9838c6";
    const encodedAddress = encodeURIComponent(address);
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodedAddress}&apiKey=${myAPIKey}`;

    console.log("### Dans getResultFromGeocodingApi !");

    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
};


    const Geoapify = () => {

    };

export default Geoapify;
