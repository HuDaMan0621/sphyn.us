import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";

export default function Showcase() {
    const [galleryInfo, setGalleryInfo] = useState([]);
    const [data2, setData2] = useState({ error: " " }); //this is the state for the customer
    const [isLoading, setIsLoading] = useState(true); //displays loading when user clicks

    useEffect(() => {
        fetch(`/api/v1/customers/${data2}/services`)
        console.log(data2)
        console.log("LINE ABOVE IS DATA 2 ")
            .then((data) => data.json())
            .then((data) => {
                console.log('this is the data on showcase@@@@@@!!!!!!!!!')
                setGalleryInfo(data)
                setIsLoading(false);
                console.log(data)
            })
            .catch((error) => console.log("Please Login"));

    }, [])

    return (
        <div>
            {isLoading ? <div>loading...</div> : (
            <div>
                <h1>Showcase</h1>
                <h1>Display customer information </h1>
                <QRCode value={`http://localhost:3000/customer/${data2.data.customer_id}/showcase`} />
            </div>
            )}
        </div>
    );
}

// .then((data) => data.json())
//             .then((data) => {
//                 console.log("this is data");
//                 console.log(data);
//                 setData2(data);
//                 setIsLoading(false);
//             })
