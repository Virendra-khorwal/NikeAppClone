import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = "http://192.168.43.96:3000/";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products'
        }),
        getProduct: builder.query({
            query: (id) => `products/${id}`
        })
    })
})

export const { useGetProductsQuery, useGetProductQuery } = apiSlice;