import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favItems: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: initialState,
  reducers: {
    clearFavourites: (state) => {
      state.favItems = [];
    },
    addToFavourites: (state, action) => {
      state.favItems.push(action.payload.id);
    },
    removeFavourites: (state, action) => {
      state.favItems.splice(state.favItems.indexOf(action.payload.id), 1);
    },
  },
});

export default favouriteSlice.reducer;
export const { clearFavourites, addToFavourites, removeFavourites } =
  favouriteSlice.actions;
