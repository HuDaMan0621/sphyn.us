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
                setData2(data);
                console.log('print 1 times? why')
            })
            .catch((error) => console.log("Please Login"));
    }, [])

    console.log(galleryInfo)
    // return (
    //     <div>
    //         {isLoading ? <div>loading...</div> : (
    //             <div>
    //                 <h1>Showcase</h1>
    //                 <h1>Display customer information </h1>
    //                 <QRCode value={`http://localhost:3000/${galleryInfo[0].customer_id}/showcase`} />
    //                 <div>{<iframe width="853" height="480" src={`${galleryInfo[0].matterport}`} frameborder='0' allowfullscreen allow="xr-spatial-tracking"></iframe>}</div>
    //                 {/* {<iframe width="853" height="480" src="https://my.matterport.com/show/?m=CoPaqg84uwx&brand=0" frameborder='0' allowfullscreen allow="xr-spatial-tracking"></iframe>} */}
    //                 <GoogleMaps address={galleryInfo[0].address} city={galleryInfo[0].city} state={galleryInfo[0].state} zipcode={galleryInfo[0].zipcode} />
    //             </div>
    //         )
    //         }
    //     </div >
    // );
    return (
        <div>
            {!galleryInfo[0] ? <div><h1>default matterport example</h1></div> : (
                <div>
                    <h1>Showcase</h1>
                    <h1>Display customer information </h1>
                    <QRCode value={`http://localhost:3000/${galleryInfo[0].customer_id}/showcase`} />
                    <div>{<iframe width="853" height="480" src={`${galleryInfo[0].matterport}`} frameborder='0' allowfullscreen allow="xr-spatial-tracking"></iframe>}</div>
                    {/* {<iframe width="853" height="480" src="https://my.matterport.com/show/?m=CoPaqg84uwx&brand=0" frameborder='0' allowfullscreen allow="xr-spatial-tracking"></iframe>} */}
                    <GoogleMaps address={galleryInfo[0].address} city={galleryInfo[0].city} state={galleryInfo[0].state} zipcode={galleryInfo[0].zipcode} />
                </div>
            )
            }
        </div >
    );
}

//!! try to fix showcase error when user has no matterport url


// {data2.error ? <div>User Not Authorized. <br />Please <Link to="/login">Login</Link></div> : (
//     <div>
//         {data2.data.id && <QRCode value={`http://localhost:3000/customer/${data2.data.id}/showcase`} />}
//         <h1>Profile Page!!!!!!</h1>
//         <h1>{data2.data.first_name}</h1>
//         {/* <h1>{data.last_name}</h1> */}
//         <form onSubmit={e => {
//             e.preventDefault();
//         }}>
//             <Logout />
//         </form>
//         <Link to='/booking'>Book Service</Link>
//         {/* <Link to={`http://localhost:3000/customer/${data2.data.id}/showcase`}>
//             Showcase
//         </Link> */}
//         <Link to="/showcase">the real showcase</Link>
//         <div>
//         </div>
//     </div>

// )}