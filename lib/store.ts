import { configureStore } from "@reduxjs/toolkit";
import { apiCountries } from "./features/countries/countriesSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [apiCountries.reducerPath]: apiCountries.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([apiCountries.middleware]),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
