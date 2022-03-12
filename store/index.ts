import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./location-slice";

const store = configureStore({
  reducer: {
    location: locationSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>

export default store;