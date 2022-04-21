import CustomMap from "./components/CustomMap/CustomMap";
import Nav from "./components/Nav/Nav";
import { ThemeProvider } from "@emotion/react";
import theme from "./assets/theme/theme";
function App() {
  const position = [42.65910002390543, 23.327611668904616];

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Nav logo="Mobility" buttons={[{ text: "Map" }, { text: "Table" }]} />
        <CustomMap position={position} scrollable={true} zoom={13} />
      </ThemeProvider>
    </div>
  );
}

export default App;
