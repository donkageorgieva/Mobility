import Map from "./containers/Map/Map";
import DataTable from "./containers/DataTable/DataTable";
import Nav from "./containers/Nav/Nav";
import { ThemeProvider } from "@emotion/react";
import theme from "./assets/theme/theme";
import { useEffect } from "react";
import { setRoutesFromAPI } from "./redux/middleware/routesRequest";
import { useDispatch } from "react-redux";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  const position = [42.65910002390543, 23.327611668904616];
  const redOptions = { color: "#EB3034" };
  const dispatch = useDispatch();
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
                  color={redOptions}
                  iconWidth={18}
                  iconHeight={18}
                  iconUrl={"/bus.svg"}
                  bounds={position}
                  maxZoom={13}
                  minZoom={10}
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
