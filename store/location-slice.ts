import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    location: {
      lat: null,
      long: null
    }
  },
  reducers: {
    selectLocation: (state, action) => {
      state.location = action.payload.location
    }
  }
});

export const locationActions = locationSlice.actions;

export default locationSlice.reducer;