/** @jsx jsx */
import React, { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import GoogleMaps from "./GoogleMaps";
import ShowcaseFilter from "./ShowcaseFilter";
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";
import { Link } from "react-router-dom";

const showcase = css`
  max-width: ${utilities.maxWidth};
  margin: auto;

  h3 {
    font-size: 2rem;
    margin: 1rem 0;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  .qrcode {
    margin-bottom: 1rem;
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
      <h3 className="m-heading">Our Showcase</h3>
      <QRCode
        className="qrcode"
        value={`https://sphyn.herokuapp.com/showcase`}
      />
      <ShowcaseFilter />
    </div>
  );
}
