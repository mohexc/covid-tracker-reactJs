import React from 'react';
import { Card } from 'antd';
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import ChangeView from './ChangeView';
import showDataOnMap from '../../../utils/showDataOnMap'

const MapCovid = ({ casesType, mapCountriesData, center, zoom }) => {

  return (
    <Card className="map-covide" >
      <MapContainer style={{ height: "400px" }} center={center} zoom={zoom} >
        <ChangeView center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showDataOnMap(mapCountriesData, casesType)}
      </MapContainer>
    </Card >
  );
}

export default MapCovid;