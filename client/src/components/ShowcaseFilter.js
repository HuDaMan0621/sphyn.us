/** @jsx jsx */
import React, { useEffect, useState } from "react";
import GoogleMaps from "./GoogleMaps";
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";
import { Link } from "react-router-dom";

const serviceFilter = css`
  max-width: ${utilities.maxWidth};
  margin: auto;

  .links {
    a {
      color: ${colors.darkColor};
      &:hover {
        color: ${colors.primaryColor};
      }
    }
  }

  form {
    padding: 1rem;
    max-width: 600px;
    margin: auto;

    input {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
    }

    button {
      display: block;
      margin: auto;
      margin: 0.25rem auto;
      padding: 0.5rem;
      width: 100%;
      font-size: 1.1rem;
      background: ${colors.primaryColor};
      border: none;
      cursor: pointer;
      border-radius: ${utilities.borderRadius};
      transition: all ${utilities.animationSpeed} ease;

      &:hover {
        background: ${colors.secondaryColor};
        border: 2px solid ${colors.primaryColor};
        color: ${colors.lightColor};
      }

      a {
        color: ${colors.darkColor};
      }
    }
  }

  .homes {
    background: ${colors.darkColor};
    margin: 1rem;
    padding: 1rem;
    border-radius: ${utilities.borderRadius};

    p {
      color: ${colors.lightColor};
      padding: 1rem 0;

      .name {
        color: ${colors.primaryColor};
      }
    }

    iframe {
      width: 100%;
      height: 300px;
    }

    .map {
      width: 100%;
      height: 300px;
    }

    .im-width {
      @media (min-width: 768px) {
        display: flex;
        position: relative;

        iframe {
          width: 50%;
        }

        .map {
          width: 50%;
          position: absolute;
          top: 0;
          left: 50;
          bottom: 0;
          right: 0;
        }
      }
    }
  }
`;

export default function ShowcaseFilter() {
  const [data2, setData2] = useState({ error: "" }); //this is the state for the customer
  const [filteredServices, setFilteredServices] = useState(null);
  const [email, setEmail] = useState(" ");
  const [noServices, setNoServices] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail({
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    fetch(`/api/v1/selectserviceslist/${email}`) //!todo
      .then((data) => data.json())
      .then((data) => {
        setData2(data);
        setFilteredServices(data.Services);
        if (data.Services && data.Services.length == 0) {
          setNoServices(true);
        }
      });
  };

  return (
    <div css={serviceFilter}>
      {data2.error || noServices ? (
        <div>
          <p>No services for this user</p>
          <a href="/showcase">Click here to reload page and re-enter email</a>
        </div>
      ) : (
        <div>
          <div className="links">
            <Link to="/">Home Page</Link>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              htmlFor="email"
              className="emailInput"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              placeholder="Email address"
            ></input>
            <button type="submit">Submit</button>
          </form>
          <div>
            {filteredServices &&
              filteredServices.map((service, i) => {
                return (
                  <div className="homes" key={i}>
                    <p>
                      <span className="name">{service.nick_name}</span>
                      <br />
                      <span>{service.address}</span>
                    </p>
                    <div className="im-width">
                      {!service.img_url ? (
                        <iframe
                          src="https://my.matterport.com/show/?m=rvKhT7rSPML"
                          frameborder="0"
                          allowfullscreen
                          allow="xr-spatial-tracking"
                        ></iframe>
                      ) : (
                        <iframe
                          src={service.img_url}
                          frameBorder="0"
                          allowFullScreen
                          allow="xr-spatial-tracking"
                        ></iframe>
                      )}
                      <div className="map">
                        <GoogleMaps
                          address={service.address}
                          city={service.city}
                          state={service.state}
                          zipcode={service.zipcode}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}
