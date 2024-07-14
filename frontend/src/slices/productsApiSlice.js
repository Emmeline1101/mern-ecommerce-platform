import { PRODUCTS_URL } from '../constants';
import {apiSlice} from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL, // from constants.js
            }),
            keepUnusedDataFor: 5, // Correct placement of keepUnusedDataFor
        }),
    }),
});

export const { useGetProductsQuery } = productsApiSlice;
