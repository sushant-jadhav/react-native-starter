import {ADD_PRODUCTS_PENDING, ADD_PRODUCTS_SUCCESS, ADD_PRODUCTS_ERROR} from '../actions/addToList';

const initialState = {
    pending: false,
    products: [],
    error: null
}

export function addProductsReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_PRODUCTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case ADD_PRODUCTS_SUCCESS:
            // console.log('action',action.payload);
            return {
                ...state,
                pending: false,
                products: action.products
            }
        case ADD_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const addProducts = state => state.products;
export const addProductsPending = state => state.pending;
export const addProductsError = state => state.error;