let initialState = {
    products: [],
    item: ""
}

function productReducer(state=initialState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_PRODUCT_SUCCESS":
            return {...state, products: payload.data}

        case "GET_PRODUCT_DETAIL_SUCCESS":
            return {...state, item: payload.data}

        default:
            return {...state}
    }

}

export default productReducer;