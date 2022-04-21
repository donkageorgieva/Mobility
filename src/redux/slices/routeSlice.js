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
};
export const routeSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    setRoutes(state, action) {
      state.routes = action.payload.routes;
    },
  },
});

export const routeActions = routeSlice.actions;
