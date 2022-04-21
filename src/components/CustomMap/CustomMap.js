import { MapContainer, TileLayer } from "react-leaflet";
import "./CustomMap.css";
const CustomMap = (props) => {
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
