import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Tooltip,
} from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import L from "leaflet";
import MapPlaceHolder from "./MapPlaceHolder/MapPlaceHolder";
import "./Map.css";

const Map = (props) => {
  const routes = useSelector((state) => state.routes.routes);
  const segments = useSelector((state) => state.routes.displayedRoute.segments);
  const stops = useSelector((state) => state.routes.displayedRoute.stops);
  const mapIcon = new L.Icon({
    iconUrl: props.iconUrl,
    iconSize: [props.iconWidth, props.iconHeight],
  });
  const displayedRouteInfo = {
    stopsInfo:
      stops &&
      stops.map((stop) => {
        return {
          coords: [stop.location.lat, stop.location.lng],
          tooltip: stop.name.toUpperCase(),
          id: stop.id,
        };
      }),
    segmentCoords:
      segments &&
      segments.map((segment) => {
        return segment.coordinates.map((coordinate) => {
          return [coordinate.lat, coordinate.lng];
        });
      }),
  };

  const allRouteInfo = {
    stopsInfo: [],
    segmentCoords: [],
  };
  const handleAllRoutes = () => {
    routes.forEach((route) => {
      route.stops.map((stop) => {
        allRouteInfo.stopsInfo.push({
          coords: [stop.location.lat, stop.location.lng],
          tooltip: stop.name.toUpperCase(),
          id: stop.id,
        });
      });

      route.segments.forEach((segment) => {
        allRouteInfo.segmentCoords.push(
          segment.coordinates.map((coordinate) => {
            return [coordinate.lat, coordinate.lng];
          })
        );
      });
    });
  };
  routes.length > 0 && handleAllRoutes();

  const markers = displayedRouteInfo.stopsInfo
    ? displayedRouteInfo.stopsInfo.map((info) => (
        <Marker
          key={info.id}
          position={info.coords}
          icon={mapIcon}
          eventHandlers={{
            click: (e) => {},
          }}
        >
          <Tooltip>{info.tooltip}</Tooltip>
        </Marker>
      ))
    : allRouteInfo.stopsInfo.map((info) => (
        <Marker
          key={info.id}
          position={info.coords}
          icon={mapIcon}
          eventHandlers={{
            click: (e) => {},
          }}
        >
          <Tooltip>{info.tooltip}</Tooltip>
        </Marker>
      ));
  return (
    <MapContainer
      center={props.position}
      zoom={props.zoom}
      scrollWheelZoom={props.scrollable}
      placeholder={<MapPlaceHolder />}
      bounds={props.position}
      minZoom={10}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Polyline
        pathOptions={props.color}
        positions={
          displayedRouteInfo.segmentCoords
            ? displayedRouteInfo.segmentCoords
            : allRouteInfo.segmentCoords
        }
      />

      {markers}
    </MapContainer>
  );
};

export default Map;
