import React, { useState } from "react";
import Geocode from "react-geocode";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

Geocode.setApiKey("AIzaSyCj0AM0URwGVtVqsNxjJclvuskK5U9jJWE");

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("us");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "300px",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

function GoogleMaps({ address, city, state, zipcode }) {

    const [lat, setLat] = useState([]);
    const [lng, setLng] = useState([]);

    const fulladdress = `${address}${city}${state}${zipcode}`
    Geocode.fromAddress(fulladdress)
        .then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                setLat(lat)
                setLng(lng)
            },
            error => {
            }
        )

    const center = {
        lat: parseFloat(lat) || parseFloat(10),
        lng: parseFloat(lng) || parseFloat(-84.387985),
    };

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: `AIzaSyCj0AM0URwGVtVqsNxjJclvuskK5U9jJWE`, // process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
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

