/** @jsx jsx */
import React, { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import GoogleMaps from "./GoogleMaps";
import ShowcaseFilter from "./ShowcaseFilter";
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";
import { Link } from "react-router-dom";

const showcase = css`
  h3 {
    font-size: 2.5rem;
    margin-top: 1rem;
    @media (min-width: 768px) {
      font-size: 4rem;
    }
  }

  .qrcode {
    margin: 1rem;
  }
`;

export default function Showcase() {
  const [serviceInfo, setServiceInfo] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  const [email, setEmail] = useState(" ");

  useEffect(() => {
    fetch("/api/v1/all-services")
      .then((data) => data.json())
      .then((data) => {
        setServiceInfo(data);
        setImgUrl(data.img_url);
        console.log(data);
      })
      .catch((error) => console.log("Please Login"));
  }, []);

  return (
    <div css={showcase}>
      <h3>Our Showcase</h3>
      <QRCode className="qrcode" value={`http://localhost:3000/showcase/`} />
      <ShowcaseFilter />
    </div>
  );
}

    return (
        <div>
            <div>Completed Services</div>
            <QRCode value={`https://sphyn.herokuapp.com/showcase/`} />
            {/* {email === " " ?
                serviceInfo.map((service, i) => {
                    return (
                        <>
                            <div key={i}>
                                <p><span>{service.nick_name}</span>{service.sq_ft}<span>{service.address}</span><br /></p>
                                {!service.img_url ? < iframe width="853" height="480" src="https://my.matterport.com/show/?m=rvKhT7rSPML" frameborder='0' allowfullscreen allow="xr-spatial-tracking"></iframe> :
                                    <iframe width="853" height="480" src={service.img_url} frameBorder="0" allowFullScreen allow="xr-spatial-tracking"></iframe>}
                                <GoogleMaps address={service.address} city={service.city} state={service.state} zipcode={service.zipcode} />
                            </div>
                            <form onSubmit={handleSubmit}>
                                <input htmlFor="email" className="emailInput" onChange={(e) => setEmail(e.target.value)}
                                    value={email} type="email" name="email" placeholder="Email address"></input>
                                <button type="submit">the somewhat working button</button>
                            </form>
                        </>
                    )
                })
                : */}
            <ShowcaseFilter />
        </div >
    )
}

//userIsYoungerThan21 ? serveGrapeJuice() : serveWine();

// import React, { useState, useEffect } from 'react'; filteredServices={serviceInfo}
// import { Link } from "react-router-dom";
// import QRCode from "qrcode.react";
// import GoogleMaps from "./GoogleMaps";

// export default function Showcase() {
//     const [galleryInfo, setGalleryInfo] = useState([]);
//     const [data2, setData2] = useState({ error: " " }); //this is the state for the customer
//     const [isLoading, setIsLoading] = useState(true); //displays loading when user clicks

//     useEffect(() => {
//         fetch(`/api/v1/customers/services`) //customer id as the key, to display the customer's showcase
//             .then((data) => data.json())
//             .then((data) => {
//                 setGalleryInfo(data);
//                 setIsLoading(false);
//                 setData2(data);
//                 console.log('print 1 times? why')
//             })
//             .catch((error) => console.log("Please Login"));
//     }, [])

//     console.log(galleryInfo)
//     // return (
//     //     <div>
//     //         {isLoading ? <div>loading...</div> : (
//     //             <div>
//     //                 <h1>Showcase</h1>
//     //                 <h1>Display customer information </h1>
//     //                 <QRCode value={`http://localhost:3000/${galleryInfo[0].customer_id}/showcase`} />
//     //                 <div>{<iframe width="853" height="480" src={`${galleryInfo[0].matterport}`} frameborder='0' allowfullscreen allow="xr-spatial-tracking"></iframe>}</div>
//     //                 {/* {<iframe width="853" height="480" src="https://my.matterport.com/show/?m=CoPaqg84uwx&brand=0" frameborder='0' allowfullscreen allow="xr-spatial-tracking"></iframe>} */}
//     //                 <GoogleMaps address={galleryInfo[0].address} city={galleryInfo[0].city} state={galleryInfo[0].state} zipcode={galleryInfo[0].zipcode} />
//     //             </div>
//     //         )
//     //         }
//     //     </div >
//     // );
//     return (
//         <div>
//             {!galleryInfo[0] ? <div><h1>default matterport example</h1></div> : (
//                 <div>
//                     <h1>Showcase</h1>
//                     <h1>Display customer information </h1>
//                     <QRCode value={`http://localhost:3000/${galleryInfo[0].customer_id}/showcase`} />
//                     <div>{<iframe width="853" height="480" src={`${galleryInfo[0].matterport}`} frameborder='0' allowfullscreen allow="xr-spatial-tracking"></iframe>}</div>
//                     {/* {<iframe width="853" height="480" src="https://my.matterport.com/show/?m=CoPaqg84uwx&brand=0" frameborder='0' allowfullscreen allow="xr-spatial-tracking"></iframe>} */}
//                     <GoogleMaps address={galleryInfo[0].address} city={galleryInfo[0].city} state={galleryInfo[0].state} zipcode={galleryInfo[0].zipcode} />
//                 </div>
//             )
//             }
//         </div >
//     );
// }

// //!! try to fix showcase error when user has no matterport url

// // {data2.error ? <div>User Not Authorized. <br />Please <Link to="/login">Login</Link></div> : (
// //     <div>
// //         {data2.data.id && <QRCode value={`http://localhost:3000/customer/${data2.data.id}/showcase`} />}
// //         <h1>Profile Page!!!!!!</h1>
// //         <h1>{data2.data.first_name}</h1>
// //         {/* <h1>{data.last_name}</h1> */}
// //         <form onSubmit={e => {
// //             e.preventDefault();
// //         }}>
// //             <Logout />
// //         </form>
// //         <Link to='/booking'>Book Service</Link>
// //         {/* <Link to={`http://localhost:3000/customer/${data2.data.id}/showcase`}>
// //             Showcase
// //         </Link> */}
// //         <Link to="/showcase">the real showcase</Link>
// //         <div>
// //         </div>
// //     </div>

// // )}
