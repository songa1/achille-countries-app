import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiCountries = createApi({
  reducerPath: "apiCountries",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v3.1/",
  }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => "all",
    }),
    getCountriesByRegion: builder.query({
      query: (region: any) => `region/${region}`,
    }),
    getOneCountry: builder.query({
      query: (code) => `alpha/${code}`,
    }),
    getCountriesBySearchingName: builder.query({
      query: (name) => `name/${name}`,
    }),
  }),
});

export const {
  useGetCountriesQuery,
  useGetOneCountryQuery,
  useGetCountriesByRegionQuery,
  useGetCountriesBySearchingNameQuery
} = apiCountries;
