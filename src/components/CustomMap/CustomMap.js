import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import { useSelector } from "react-redux";
import "./CustomMap.css";
const CustomMap = (props) => {
  const segments = useSelector((state) => state.routes.displayedRoute.segments);
  const redOptions = { color: "red" };
  const coordinates =
    segments &&
    segments.map((segment) => {
      return segment.coordinates.map((coordinate) => {
        return [coordinate.lat, coordinate.lng];
      });
    });

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
      <Polyline pathOptions={redOptions} positions={coordinates} />
    </MapContainer>
  );
};

export default CustomMap;
