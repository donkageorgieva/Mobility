import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routes: [
    {
      name: "",
      id: "",
      transportType: "",
      stops: [{ location: { lat: 0, lng: 0 }, name: "", id: "" }],
    },
  ],
  displayedRoute: { id: "" },
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
      console.log(selectedRoute);
      if (!selectedRoute) {
        const err = new Error("Route not found");
        throw err;
      }
      if (state.displayedRoute === selectedRoute) return;
      state.displayedRoute = selectedRoute;
    },
  },
});

export const routeActions = routeSlice.actions;
