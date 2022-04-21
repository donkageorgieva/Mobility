import CustomMap from "./components/CustomMap/CustomMap";
import DataTable from "./containers/DataTable/DataTable";
import Nav from "./components/Nav/Nav";
import { ThemeProvider } from "@emotion/react";
import theme from "./assets/theme/theme";
import { useEffect } from "react";
import { routeActions } from "./redux/slices/routeSlice";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const position = [42.65910002390543, 23.327611668904616];
  const routes = useSelector((state) => state.routes);
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const rows = [{ name: "1", stop: "Firsts" }];

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Nav logo="Mobility" buttons={[{ text: "Map" }, { text: "Table" }]} />
        <DataTable rows={rows} title="My Table" />
        {/* <CustomMap position={position} scrollable={true} zoom={13} /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
