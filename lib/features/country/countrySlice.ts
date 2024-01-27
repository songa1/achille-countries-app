import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiCountry = createApi({
  reducerPath: "apiCountry",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v3.1/",
  }),
  endpoints: (builder) => ({
    getOneCountry: builder.query({
      query: (code) => `alpha/${code}`,
    }),
  }),
});

export const { useGetOneCountryQuery } = apiCountry;
