import * as actionTypes from '../constants/productContant';


// export const getProductReducer = (state = {products: []}, action) => {
//     switch(action.type) {
//         case actionTypes.GET_PRODUCTS_SUCCESS:
//             return { products: action.payload }
//         case actionTypes.GET_PRODUCTS_FAIL:
//             return { error: action.payload }
//         default:
//             return state
//     }
// };

export const getProductDetailsReducer = (state = { item: {}}, action) => {
    
    // console.log('Hi', action.type)
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return { item: action.payload }
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                error: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_RESET: 
            return {
                item: {}
            }
        default:
            return state
    }
}