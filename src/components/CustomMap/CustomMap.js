import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import "./CustomMap.css";
const CustomMap = (props) => {
  const selectedRoute = useSelector((state) => state.routes.displayedRoute);
  console.log(selectedRoute);
  return (
    <MapContainer
      center={props.position}
      zoom={props.zoom}
      scrollWheelZoom={props.scrollable}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default CustomMap;
