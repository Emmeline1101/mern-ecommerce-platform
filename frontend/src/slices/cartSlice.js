import {createSlice} from "@reduxjs/toolkit";

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
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(x => x.product !== action.payload);
        },
        saveShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
        }
    }
});

export default cartSlice.reducer;