import { createSlice } from "@reduxjs/toolkit";

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    startDate: null, 
    endDate: null, 
    noOfGuests: 0
  },
  reducers: {
    setReservation: (state, action) => {
      state = {... action.payload.reservation};
    }
  }
})

export const reservationActions = reservationSlice.actions;

export default reservationSlice.reducer;