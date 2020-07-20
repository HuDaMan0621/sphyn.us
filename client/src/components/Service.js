/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";

const service = css`
  padding: ${utilities.sectionPadding};

  .m-heading {
    font-size: 2rem;
    margin: auto;
    border-bottom: solid 2px ${colors.primaryColor};
    width: 90%;
    margin-bottom: 2rem;
    padding-bottom: 0.25rem;

    @media (min-width: 768px) {
      font-size: 3rem;
      width: 40%;
    }

    @media (min-width: 900px) {
      width: 30%;
    }
  }

  .service-wrap {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .property {
    margin: 0.5rem;
    background: ${colors.darkColor};
    color: ${colors.lightColor};
    border-radius: ${utilities.borderRadius};
    padding: 1rem;

    .info {
      text-align: left;
      padding-bottom: 1rem;

      span {
        color: ${colors.primaryColor};
      }
    }

    .matterport {
      height: 300px;
    }
  }
`;

export default function Service() {
  const [serviceInfo, setServiceInfo] = useState([]);
    const [data2, setData2] = useState({ error: " " }); //this is the state for the customer

    useEffect(() => {
        fetch(`/api/v1/customer/services`)
            .then(data => data.json())
            .then(data => {
                setServiceInfo(data)
                setData2(data);
            })
            .catch(error => console.log('Please Login')
            )
    }, [])
  
  return (
    <div css={service}>
    {data2.error ? <div></div> : (      
      <div className="service-wrap">
      <h3 className="m-heading">Services</h3>
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
              <div className="matterport">
                <iframe
                  width="100%"
                  height="100%"
                  src={service.img_url}
                  frameBorder="0"
                  allowFullScreen
                  allow="xr-spatial-tracking"
                ></iframe>
              </div>
            </div>
          );
        })}
      </div>
        
)}
    </div>
  );
}
