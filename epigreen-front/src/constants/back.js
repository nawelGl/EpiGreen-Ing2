
export const LOCAL_HOST = 'http://localhost:8081';

// Similarity service endpoints

export const SIMILARITY_API= LOCAL_HOST+'/api/similarityById'
export const SIMILARITY_SERVICE={
    calculateSimilarity: SIMILARITY_API,
}
export const SEARCH_API= LOCAL_HOST+'/api/similarity-search'
export const SEARCH_SERVICE={
    findSimilarProducts: SEARCH_API,
}


//product service endpoints

export const GET_PRODUCT_BY_ID = LOCAL_HOST+'/{id}';

//sample service endpoints
export const LOCAL_HOST_SAMPLE = LOCAL_HOST + '/sample/';
export const GET_SAMPLES = LOCAL_HOST_SAMPLE + 'all';
export const UPDATE_SAMPLES = LOCAL_HOST_SAMPLE + 'update';
export const ADD_SAMPLES = LOCAL_HOST_SAMPLE + 'add';
