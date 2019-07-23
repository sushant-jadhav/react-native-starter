import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from '../../actions';

function fetchProducts() {

    return dispatch => {
        dispatch(fetchProductsPending());

        fetch('http://192.168.0.103:8000/api/product')
            .then(res =>res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                console.log('test',res.products);
                dispatch(fetchProductsSuccess(res.products));
                return res.products;
            })
            .catch(error => {
                dispatch(fetchProductsError(error));
            })
    }
}

export default fetchProducts;