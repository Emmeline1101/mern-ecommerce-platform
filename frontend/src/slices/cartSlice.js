import {createSlice} from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem('cartItems') ? {cartItems: JSON.parse(localStorage.getItem('cartItems'))} : {cartItems: []};


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        shippingAddress: {}
    }, 
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.product === item.product);
            if(existItem){
                state.cartItems = state.cartItems.map(x => x.product === existItem.product ? item : x);
            } else {
                state.cartItems = [...state.cartItems, item];
            }

            return updateCart(state);
        },
    },
});

// export the addToCart action in order to use it
export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;