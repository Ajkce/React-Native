import { configureStore } from "@reduxjs/toolkit";
import favouriteRecuder from "./favourite/favouriteSlice";

export const store = configureStore({
  reducer: {
    favourite: favouriteRecuder,
  },
});
