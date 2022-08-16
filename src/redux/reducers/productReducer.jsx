import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  products: [],
  item: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductAll(state, action) {
      state.products = action.payload.data;
    },
    getSingleProduct(state, action) {
      state.item = action.payload.data;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;

// function productReducer(state=initialState, action) {
//     let {type, payload} = action
//     switch(type) {
//         case "GET_PRODUCT_SUCCESS":
//             return {...state, products: payload.data}

//         case "GET_PRODUCT_DETAIL_SUCCESS":
//             return {...state, item: payload.data}

//         default:
//             return {...state}
//     }

// }

// export default productReducer;
