export const ADD_PRODUCTS_PENDING = 'ADD_PRODUCTS_PENDING';
export const ADD_PRODUCTS_SUCCESS = 'ADD_PRODUCTS_SUCCESS';
export const ADD_PRODUCTS_ERROR = 'ADD_PRODUCTS_ERROR';

export function addProductsPending() {
    return {
        type: ADD_PRODUCTS_PENDING,
    }
}

export function addProductsSuccess(products) {
    return {
        type: ADD_PRODUCTS_SUCCESS,
        products: products
    }
}

export function addProductsError(error) {
    return {
        type: ADD_PRODUCTS_ERROR,
        error: error
    }
}
