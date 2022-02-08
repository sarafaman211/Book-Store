import * as actionTypes from '../constants/productContant';
import axios from 'axios';

// export const getProducts = () => async (dispatch) => {
//     try {
//         // console.log('Hiiiiii')
//         const { data } = await axios.get(`http://localhost:5000/api/product/products`);
//         dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

//     } catch (error) {
//         dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
//     }
// };

export const getProductDetails = (id) => async (dispatch) => {
        const { data } = await axios.get(`http://localhost:5000/api/product/getProducts/${id}`);
        console.log("hii");

        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

};

