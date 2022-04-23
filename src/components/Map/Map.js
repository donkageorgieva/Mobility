import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Tooltip,
} from "react-leaflet";
import L from "leaflet";
import MapPlaceHolder from "./MapPlaceHolder/MapPlaceHolder";
import "./Map.css";

const Map = (props) => {
  const mapIcon = new L.Icon({
    iconUrl: props.iconUrl,
    iconSize: [props.iconWidth, props.iconHeight],
  });
  const markers =
    props.markerInfo &&
    props.markerInfo.map((info) => (
      <Marker key={info.id} position={info.coords} icon={mapIcon}>
        <Tooltip>{info.tooltip}</Tooltip>
      </Marker>
    ));
  console.log(props.markerPositions);
  return (
    <MapContainer
      center={props.position}
      zoom={props.zoom}
      scrollWheelZoom={props.scrollable}
      placeholder={<MapPlaceHolder />}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.segmentCoords && (
        <Polyline pathOptions={props.color} positions={props.segmentCoords} />
      )}
      {props.markerInfo && markers}
    </MapContainer>
  );
};

export default Map;
