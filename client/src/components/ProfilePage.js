/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";
import QRCode from "qrcode.react";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import Service from "./Service";

const profile = css`
  header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${colors.secondaryColor};
    color: ${colors.lightColor};
  }

  .qrcode {
    padding: 1rem;

    a {
      display: block;
      background: ${colors.primaryColor};
      color: ${colors.darkColor};
      margin: 0.5rem 0;
      padding: 0.5rem;
      border-radius: ${utilities.borderRadius};
    }
  }
`;

export default function ProfilePage(props) {
  const [data2, setData2] = useState({ error: " " }); //this is the state for the customer
  const [isLoading, setIsLoading] = useState(true); //displays loading when user clicks

  useEffect(() => {
    fetch(`/api/v1/customer/profile`)
      .then((data) => data.json())
      .then((data) => {
        setData2(data);
        setIsLoading(false);
      })
      .catch((error) => console.log("Please Login"));
  }, []);

  return (
    <div css={profile}>
      {data2.error ? (
        <div>
          <h1>User Not Authorized</h1>
          <h3>
            Please <Link to="/login">log in</Link>{" "}
          </h3>
        </div>
      ) : (
        <div>
          <header>
            <h1>{data2.data.first_name}</h1>
            <Logout />
          </header>
          <div className="qrcode">
            {data2.data.id && (
              <QRCode
                value={`http://localhost:3000/customer/${data2.data.id}/showcase`}
              />
            )}
            <Link to="/booking">Book Service</Link>
            <Link to="/showcase">My Showcase</Link>
          </div>
        </div>
      )}
      <Service />
    </div>
  );
}
