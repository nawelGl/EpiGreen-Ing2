export const LOCAL_HOST = 'http://localhost:8081';

// Similarity service endpoints
export const SIMILARITY_API= LOCAL_HOST+'/api/similarityById'
export const SIMILARITY_SERVICE={
    calculateSimilarity: SIMILARITY_API,
}
export const SEARCH_API= LOCAL_HOST+'/api/similarity-search'
export const SEARCH_SERVICE={
    findSimilarProducts: SEARCH_API,
    filterProducts: `${LOCAL_HOST}/product/filter`,
}

//product service endpoints

export const GET_PRODUCT_BY_ID = LOCAL_HOST+'/product/';

//sample service endpoints

export const LOCAL_HOST_SAMPLE = LOCAL_HOST + '/sample/';
export const GET_SAMPLES = LOCAL_HOST_SAMPLE + 'all';
export const UPDATE_SAMPLES = LOCAL_HOST_SAMPLE + 'update';
export const ADD_SAMPLES = LOCAL_HOST_SAMPLE + 'add';

export const LOCAL_HOST_CUSTOMER = LOCAL_HOST + '/customer/';
export const GET_CUSTOMERS = LOCAL_HOST_CUSTOMER + 'all';

export const LOCAL_HOST_STORE = LOCAL_HOST + '/store/';
export const GET_STORES = LOCAL_HOST_STORE + 'all';

export const LOCAL_HOST_PROCESS_ROUTES = LOCAL_HOST + '/processroute/';
export const GET_PROCESS_ROUTES_BY_ID = LOCAL_HOST_PROCESS_ROUTES + '/{id}';
export const GET_PROCESS_ROUTES = LOCAL_HOST_PROCESS_ROUTES + 'all';
export const GET_PROCESS_ROUTES_BY_PRODUCT = LOCAL_HOST_PROCESS_ROUTES + 'by-product/'; 

export const LOCAL_HOST_DELIVERY = LOCAL_HOST + '/delivery/';

export const LOCAL_HOST_TRANSPORTATION = LOCAL_HOST + '/transportation/';
export const LOCAL_HOST_TRANSPORTATION_MAX_CO2 = LOCAL_HOST_TRANSPORTATION + 'max-co2/';
export const LOCAL_HOST_ENTREPOT = LOCAL_HOST + '/entrepot/';
export const LOCAL_HOST_DELIVERY_SCORING_API = LOCAL_HOST + '/api/delivery-scoring/';
export const LOCAL_HOST_DELIVERY_SCORING_API_SCORE = LOCAL_HOST_DELIVERY_SCORING_API + 'score';
export const LOCAL_HOST_DELIVERY_SCORING_API_CO2 = LOCAL_HOST_DELIVERY_SCORING_API + 'co2';

export const LOCAL_HOST_TRANSPORTATION_MEAN_API = LOCAL_HOST + 'api/transportationMean/';

