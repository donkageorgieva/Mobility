import CustomMap from "./components/CustomMap/CustomMap";
function App() {
  const position = [42.65910002390543, 23.327611668904616];
  return (
    <div className="App">
      <CustomMap position={position} scrollable={true} zoom={13} />
    </div>
  );
}

export default App;
