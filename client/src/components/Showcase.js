import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";
import GoogleMaps from "./GoogleMaps";

export default function Showcase() {
    const [galleryInfo, setGalleryInfo] = useState([]);
    const [data2, setData2] = useState({ error: " " }); //this is the state for the customer
    const [isLoading, setIsLoading] = useState(true); //displays loading when user clicks

    useEffect(() => {
        fetch(`/api/v1/customers/services`) //customer id as the key, to display the customer's showcase
            .then((data) => data.json())
            .then((data) => {
                setGalleryInfo(data);
                setIsLoading(false);
            })
            .catch((error) => console.log("Please Login"));

    }, [])

    return (
        <div>
            {isLoading ? <div>loading...</div> : (
                <div>
                    <h1>Showcase</h1>
                    <h1>Display customer information </h1>
                    <QRCode value={`http://localhost:3000/${galleryInfo[0].id}/showcase`} />
                    <div>{<iframe width="853" height="480" src={`${galleryInfo[0].matterport}`} frameborder='0' allowfullscreen allow="xr-spatial-tracking"></iframe>}</div>
                    {/* {<iframe width="853" height="480" src="https://my.matterport.com/show/?m=CoPaqg84uwx&brand=0" frameborder='0' allowfullscreen allow="xr-spatial-tracking"></iframe>} */}
                    <GoogleMaps />
                </div>
            )
            }
        </div >
    );
}