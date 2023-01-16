import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Bottom.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
// @ts-ignore
delete L?.Icon.Default.prototype._getIconUrl;

L?.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

interface MarkerI {
  lan: number;
  long: number;
  city: string;
}

const LocationMarker = ({ lan, long, city }: MarkerI) => {
  return (
    <Marker position={[lan, long]}>
      <Popup>You are in {city}</Popup>
    </Marker>
  );
};

export const Bottom = () => {
  const {
    coordinates: { lant, long },
    loading,
    data: { city },
  } = useSelector((state: RootState) => state.tracker);

  return (
    <div className="bottom-container" id="map">
      {loading ? (
        <div className="spinner-1"></div>
      ) : (
        <MapContainer center={[lant, long]} zoom={15} scrollWheelZoom={true}>
          <TileLayer
            attribution="&copy; caarlosdamian"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker lan={lant} long={long} city={city} />
        </MapContainer>
      )}
    </div>
  );
};
