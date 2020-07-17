import React from "react";
// import { mapStyles } from "../styles";

import {
    GoogleMap,
    useLoadScript,
    Marker,
    // InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
    width: "100%",
    height: "500px",
};

const options = {
    // styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
};

function GoogleMaps({ lat, lng }) {
    const center = {
        lat: parseFloat(lat) || parseFloat(33.748997),
        lng: parseFloat(lng) || parseFloat(-84.387985),
    };

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyCGdULMSS4ONEY2phDO_MC-P8LF9YAn1g4",// process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";
    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={center}
                options={options}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    );
}

export default GoogleMaps;