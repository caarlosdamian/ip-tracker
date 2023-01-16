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
}

const LocationMarker = ({ lan, long }: MarkerI) => {
  return (
    <Marker position={[lan, long]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
};

export const Bottom = () => {
  const { lant, long } = useSelector(
    (state: RootState) => state.tracker.coordinates
  );

  const { loading } = useSelector((state: RootState) => state.tracker);
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
          <LocationMarker lan={lant} long={long} />
        </MapContainer>
      )}
    </div>
  );
};
