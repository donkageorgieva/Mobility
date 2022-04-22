import { routeActions } from "../slices/routeSlice";

export const setRoutesFromAPI = (config) => {
  return async (dispatch) => {
    fetch(config.url, {
      method: config.method ? config.method : "GET",
      headers: config.headers
        ? config.headers
        : {
            "Content-Type": "application/json",
          },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(
          routeActions.setRoutes({
            routes: data,
          })
        );
      });
  };
};
