import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routes: [],
  displayedRoute: {},
};
export const routeSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    setRoutes(state, action) {
      console.log(action.payload, "DATA ");
      state.routes = action.payload.routes;
    },
    displayRoute(state, action) {
      const selectedRoute = state.routes.find(
        (route) => route.id === action.payload.id
      );
      if (!selectedRoute) {
        const err = new Error("Route not found");
        throw err;
      }
      if (state.displayedRoute === selectedRoute) return;

      state.displayedRoute = selectedRoute;
    },
    clearDisplayedRoute(state, action) {
      state.displayedRoute = {};
    },
  },
});

export const routeActions = routeSlice.actions;
