
export const LOCAL_HOST = 'http://localhost:8080';

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
export const GET_PROCESS_ROUTES_BY_PRODUCT = LOCAL_HOST_PROCESS_ROUTES + 'by-product/'; // Nouvelle route pour idProduct
