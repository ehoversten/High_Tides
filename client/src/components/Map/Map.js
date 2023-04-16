import { useState, useRef, useEffect } from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl, { accessToken } from 'mapbox-gl'; 
import './Map.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
// mapboxgl.accessToken = "pk.eyJ1IjoiZWhvdmVzdGVuIiwiYSI6ImNrNWhjd21hdDAxYzIzZXJ6NzJ0YTN3cmYifQ.wnZ-MoveghsqFszlSS9oWQ";

// function MapLayout() {
const MapLayout = () => {
    // const [currentLocation, setCurrentLocation] = useState();
    // const [viewport, setViewport] = useState({
    //     longitude: -122.4,
    //     latitude: 37.8,
    //     zoom: 10,
    //     width: '100vw',
    //     height: '100vh'
    // });

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-72.5);
    const [lat, setLat] = useState(40.99);
    const [zoom, setZoom] = useState(10);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/outdoors-v5',
            // style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom,
            accessToken: process.env.REACT_APP_MAPBOX_TOKEN 
        });

        // Clean up on unmount
        // return () => map.remove();
    }, []);

    return (
        <section className="map">
            <div ref={mapContainer} className="map-container" />
        </section>
    )
}


export default MapLayout;