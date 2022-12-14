import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => (
  <MapContainer id="map" center={[21.2998, -157.818]} zoom={15.5}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[21.3008, -157.8164]}>
      <Popup>
        <strong>Hamilton Library</strong>
        <br />
        Monday - Friday: 8:00 am - 10:00 pm
        <br />
        Saturday: 8:00 am - 6:00 pm
        <br />
        Sunday: 9:00 am - 5:00 pm
      </Popup>
    </Marker>
    <Marker position={[21.298280347398343, -157.818633639318]}>
      <Popup>
        <strong>Campus Center</strong>
        <br />
        Monday - Friday: 7:00 am - 2:00 pm
        <br />
        Saturday - Sunday: CLOSED
      </Popup>
    </Marker>
    <Marker position={[21.300511844584864, -157.81839615747992]}>
      <Popup>
        <strong>Queen Liliʻuokalani Center</strong>
        <br />
        Monday - Friday: 1:00 pm - 4:00 pm
        <br />
        Saturday - Sunday: CLOSED
      </Popup>
    </Marker>
  </MapContainer>
);

export default Map;
