import Map from "./components/Map/Map";
import DataTable from "./containers/DataTable/DataTable";
import Nav from "./containers/Nav/Nav";
import { ThemeProvider } from "@emotion/react";
import theme from "./assets/theme/theme";
import { useEffect } from "react";
import { setRoutesFromAPI } from "./redux/middleware/routesRequest";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  const position = [42.65910002390543, 23.327611668904616];
  const redOptions = { color: "#EB3034" };
  const dispatch = useDispatch();
  const segments = useSelector((state) => state.routes.displayedRoute.segments);
  const stops = useSelector((state) => state.routes.displayedRoute.stops);
  const stopsInfo =
    stops &&
    stops.map((stop) => {
      return {
        coords: [stop.location.lat, stop.location.lng],
        tooltip: stop.name.toUpperCase(),
        id: stop.id,
      };
    });

  const segmentCoords =
    segments &&
    segments.map((segment) => {
      return segment.coordinates.map((coordinate) => {
        return [coordinate.lat, coordinate.lng];
      });
    });

  useEffect(() => {
    dispatch(
      setRoutesFromAPI({
        url: process.env.REACT_APP_API,
      })
    );
  }, [dispatch]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Nav
            logo="Mobility"
            links={[
              { text: "Map", to: "/" },
              { text: "Table", to: "/table" },
            ]}
          />
          <Routes>
            <Route element={<DataTable />} path="/table" />
            <Route
              path="/"
              element={
                <Map
                  position={position}
                  scrollable={true}
                  zoom={13}
                  segmentCoords={segments && segmentCoords}
                  color={redOptions}
                  iconWidth={18}
                  iconHeight={18}
                  iconUrl={"/bus.svg"}
                  markerInfo={stopsInfo}
                />
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
