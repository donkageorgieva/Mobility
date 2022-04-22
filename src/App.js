import CustomMap from "./components/CustomMap/CustomMap";
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
  const routes = useSelector((state) => state.routes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setRoutesFromAPI({
        url: "https://mobility-b4c72-default-rtdb.firebaseio.com/.json",
      })
    );
    console.log(routes);
  }, [dispatch]);
  const rows = [{ name: "1", stop: "Firsts" }];

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
            <Route
              element={<DataTable rows={rows} title="My Table" />}
              path="/table"
            />
            <Route
              path="/"
              element={
                <CustomMap position={position} scrollable={true} zoom={13} />
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
