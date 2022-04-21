import { configureStore } from "@reduxjs/toolkit";
import { routeSlice } from "../slices/routeSlice";
export const store = configureStore({
  reducer: {
    routes: routeSlice.reducer,
  },
});
