import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'aede934d98mshcf5d4a56bea07b1p11be67jsn79b18e8d3311',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};


const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest(`/coins`),
        }),
    }),
});

export const {
    useGetCryptosQuery,
} = cryptoApi;

