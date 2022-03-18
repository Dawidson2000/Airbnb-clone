import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./location-slice";
import reservationSlice from "./reservation.slice";

const store = configureStore({
  reducer: {
    location: locationSlice,
    reservation: reservationSlice
  }
});

export type RootState = ReturnType<typeof store.getState>

export default store;