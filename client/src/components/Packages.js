import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";
import { Link } from "react-router-dom";

const packages = css`
  padding: ${utilities.sectionPadding};
  .packages-wrap {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
    padding: 0 2rem;
    justify-content: end;

    .package {
      border: 1px solid ${colors.darkColor};

      a {
        display: block;
      }
    }
  }
`;

export default function Packages() {
  return (
    <div css={packages}>
      <h3 className="m-heading">Packages</h3>
      <div className="packages-wrap">
        <div className="package">
          <div className="heading">
            <h3>Package 1</h3>
          </div>
          <div className="price">$150</div>
          <div className="details">
            <ul>
              <li>Test bullet</li>
              <li>Test bullet</li>
              <li>Test bullet</li>
              <li>Test bullet</li>
            </ul>
          </div>
          <div className="links">
            <Link to="/login">Returning User Book Now</Link>
            <Link to="/register">New User Book Now</Link>
          </div>
        </div>
        <div className="package">
          <div className="heading">
            <h3>Package 2</h3>
          </div>
          <div className="price">$150</div>
          <div className="details">
            <ul>
              <li>Test bullet</li>
              <li>Test bullet</li>
              <li>Test bullet</li>
              <li>Test bullet</li>
            </ul>
          </div>
          <div className="links">
            <Link to="/login">Returning User Book Now</Link>
            <Link to="/register">New User Book Now</Link>
          </div>
        </div>
        <div className="package">
          <div className="heading">
            <h3>Package 3</h3>
          </div>
          <div className="price">$150</div>
          <div className="details">
            <ul>
              <li>Test bullet</li>
              <li>Test bullet</li>
              <li>Test bullet</li>
              <li>Test bullet</li>
            </ul>
          </div>
          <div className="links">
            <Link to="/login">Returning User Book Now</Link>
            <Link to="/register">New User Book Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
