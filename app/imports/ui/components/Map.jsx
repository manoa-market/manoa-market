import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => (
  <MapContainer id="map" center={[21.2998, -157.818]} zoom={15.5} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[21.3008, -157.8164]}>
      <Popup>
        Hamilton Library <br /> Easily customizable.
      </Popup>
    </Marker>
    <Marker position={[21.299019596673773, -157.8186066838137]}>
      <Popup>
        Campus Center. <br /> Easily customizable.
      </Popup>
    </Marker>
    <Marker position={[21.300511844584864, -157.81839615747992]}>
      <Popup>
        Queen Liliʻuokalani Center. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
);

export default Map;
