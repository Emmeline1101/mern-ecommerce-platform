//helper function, e.g., 2.3 to 2.30
export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
                // Calculate items price
                state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)); // default acc value is 0
                // Calculate shipping price (If the order is over $100, shipping is free)
                state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
                // Calculate tax price
                state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));
    
                // save the state to local storage
                localStorage.setItem('cartItems', JSON.stringify(state));

                return state;
};