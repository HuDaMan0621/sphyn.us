import React, { useState } from "react";
import Geocode from "react-geocode";

import {
    GoogleMap,
    useLoadScript,
    Marker,
    // InfoWindow,
} from "@react-google-maps/api";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
// console.log('this is the geo api')
Geocode.setApiKey("AIzaSyCj0AM0URwGVtVqsNxjJclvuskK5U9jJWE");

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("us");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

// Get address from latidude & longitude.
// Geocode.fromLatLng("48.8583701", "2.2922926").then(
//     response => {
//         const { address, city, state, zipcode } = this.props
//         // response.results[0].formatted_address;
//         console.log(address, city, state, zipcode);
//     },
//     error => {
//         console.error(error);
//     }
// );

// Get latidude & longitude from address.
// const { address, city, state, zipcode } = this.props
// Geocode.fromAddress(address, city, state, zipcode)
//     .then(
//         response => {
//             const { lat, lng } = response.results[0].geometry.location;
//             console.log(lat, lng);
//         },
//         error => {
//             console.error(error);
//         }
//     );

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


function GoogleMaps({ address, city, state, zipcode }) {
    // console.log('this is line 63 on google maps, should show the addresssssssss')
    // console.log(address, city, state, zipcode)

    const [lat, setLat] = useState([]);
    const [lng, setLng] = useState([]);

    const fulladdress = `${address}${city}${state}${zipcode}`
    // console.log('!!!!!@!@!@!@!@!@^^%$$%##%$#$%#$%#$%%$#$%^^$%^$')
    Geocode.fromAddress(fulladdress)
        .then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                setLat(lat)
                setLng(lng)
                // console.log(lat, lng);
            },
            error => {
                // console.error(error);
            }
        )
    // .then((data) => data.json())
    //     .then((data) => {
    //         setGalleryInfo(data);
    //         setIsLoading(false);
    //         console.log('print 1 times? why')
    //     })


    // console.log("this is it")
    // console.log();
    const center = {
        lat: parseFloat(lat) || parseFloat(10),
        lng: parseFloat(lng) || parseFloat(-84.387985),
    };
    // console.log("this is latandlng")
    // console.log(response.results[0].geometry.location)

    // const lat = travelInfo.results[0].coordinates.latitude;
    // const lng = travelInfo.results[0].coordinates.longitude;
    // let map;
    // function initMap() {
    //   map = new google.maps.Map(document.getElementById('map'), {
    //     center: { lat, lng },
    //     zoom: 8,
    //   });


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

// console log cleared