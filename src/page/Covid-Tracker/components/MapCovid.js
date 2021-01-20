import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import ChangeView from './ChangeView';

const MapCovid = ({ countries, casesType, center, zoom }) => {

  return (
    <Card className="map-covide" >
      <MapContainer style={{ height: "400px" }} center={center} zoom={zoom} >
        <ChangeView center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Card >
  );
}

export default MapCovid;