import { configureStore } from "@reduxjs/toolkit";
import { apiCountries } from "./features/countries/countriesSlice";
import { apiCountry } from "./features/country/countrySlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [apiCountries.reducerPath]: apiCountries.reducer,
      [apiCountry.reducerPath]: apiCountry.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        apiCountries.middleware,
        apiCountry.middleware,
      ]),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
