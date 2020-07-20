/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";

const service = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  .property {
    margin: 0.5rem;
    background: ${colors.darkColor};
    color: ${colors.lightColor};
    border-radius: ${utilities.borderRadius};
    padding: 1rem;
  }

  .info {
    text-align: left;
    padding-bottom: 1rem;

    span {
      color: ${colors.primaryColor};
    }
  }
`;

export default function Service() {
  const [serviceInfo, setServiceInfo] = useState([]);

  useEffect(() => {
    fetch(`/api/v1/customer/services`)
      .then((data) => data.json())
      .then((data) => {
        setServiceInfo(data);
      })
      .catch((error) => console.log("Please Login"));
  }, []);

  return (
    <div css={service}>
      {serviceInfo.map((service, i) => {
        return (
          <div className="property" key={i}>
            <div className="info">
              <h4>
                <span>Name:</span> {service.nick_name}
              </h4>
              <p>
                <span>SQFT: </span> {service.sq_ft}
              </p>
              <p>
                <span>Address: </span> {service.address}
              </p>
            </div>
            <iframe
              width="100%"
              height="100%"
              src={service.img_url}
              frameBorder="0"
              allowFullScreen
              allow="xr-spatial-tracking"
            ></iframe>
          </div>
        );
      })}
    </div>
  );
}
