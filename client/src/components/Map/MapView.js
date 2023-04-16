import * as React from 'react';
import Map, { Marker, GeolocateControl } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN; // Set your mapbox token here

function MapView() {
  return (
    <Map
      id="mymap"
      initialViewState={{
        longitude: -72.25,
        latitude: 41.04,
        zoom:10
      }}
      style={{width: '100vw', height: 350}}
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      // mapStyle="mapbox://styles/mapbox/streets-v11"
      // mapStyle="mapbox://styles/mapbox/satellite-v9"
      // mapStyle="mapbox://styles/mapbox/dark-v10"
      // mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker longitude={-72.5} latitude={40.99} anchor="bottom" >
      {/* <img src="./pin.png" /> */}
      </Marker>
      <Marker longitude={-71.95451} latitude={41.03594} anchor="bottom" color="#654453">
        {/* <img src="./pin.png" /> */}
      </Marker>
      {/* <GeolocateControl /> */}
    </Map>
  );
}


export default MapView;