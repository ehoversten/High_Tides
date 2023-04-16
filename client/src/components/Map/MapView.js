import * as React from 'react';
import Map from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN; // Set your mapbox token here

function MapView() {
  return (
    <Map
      id="mymap"
      initialViewState={{
        longitude: -72.5,
        latitude: 40.99,
        zoom:11
      }}
      style={{width: '100vw', height: 600}}
      mapStyle="mapbox://styles/mapbox/outdoors-v9"
      // mapStyle="mapbox://styles/mapbox/streets-v9"
      // mapStyle="mapbox://styles/mapbox/mineral-v5"
      mapboxAccessToken={MAPBOX_TOKEN}
    />
  );
}


export default MapView;