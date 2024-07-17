import {createSlice} from "@reduxjs/toolkit";

const initialState = localStorage.getItem('cartItems') ? {cartItems: JSON.parse(localStorage.getItem('cartItems'))} : {cartItems: []};

//helper function, e.g., 2.3 to 2.30
const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
}

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
            // Calculate items price
            state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)); // default acc value is 0
            // Calculate shipping price (If the order is over $100, shipping is free)
            state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
            // Calculate tax price
            state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

            // save the state to local storage
            localStorage.setItem('cartItems', JSON.stringify(state));
        },
    },
});

// export the addToCart action in order to use it
export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;