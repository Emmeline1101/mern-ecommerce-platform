import { createApi, fetchBaseQuery, fethBaseQuery } from '@reduxjs/toolkit/query/react'; // fetch api from backend
import { BASE_URL} from '../constants';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Product', 'User', 'Order'],
    endpoints: (builder) => ({

    })
});