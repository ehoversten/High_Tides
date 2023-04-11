import { useState } from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

function MapLayout() {
    const [currentLocation, setCurrentLocation] = useState();
    const [viewport, setViewport] = useState({
        longitude: -122.4,
        latitude: 37.8,
        zoom: 10,
        width: '100vw',
        height: '500px'
    });

    return (
        <section className="map-container">
            <Map
                initialViewState={{
                    longitude: -72.5,
                    latitude: 40.99,
                    zoom: 10
                }}
                style={{width: 600, height: 400}}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_API}
            />
        </section>
    )
}


export default MapLayout;