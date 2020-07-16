import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../../styleVars";

const footer = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  background-color: ${colors.darkColor};
  color: ${colors.lightColor};

  div {
    padding: 1rem;
    margin: 1rem;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export default function Footer() {
  return (
    <div css={footer}>
      <div>
        <h3>Mailing Address</h3>
        <ul>
          <li>Sphyn</li>
          <li>9001 Peachtree St.</li>
          <li>Atlanta, Ga 30303</li>
        </ul>
      </div>
      <div>
        <h3>Call Us</h3>
        <ul>
          <li>Phone: 770-998-9832</li>
        </ul>
      </div>
      <div>
        <h3>Email Us</h3>
        <ul>
          <li>info@sphyn.us</li>
        </ul>
      </div>
    </div>
  );
}
