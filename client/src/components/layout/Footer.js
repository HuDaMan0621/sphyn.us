import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../../styleVars";

const footer = css`
  background-color: ${colors.darkColor};
  color: ${colors.lightColor};
  padding: 1rem;

  .wrap {
    max-width: ${utilities.maxWidth};
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: auto;
    }

    div {
      h3 {
        font-size: 1.5rem;
        margin-bottom: 0.25rem;
        color: ${colors.primaryColor};
      }

      li {
        font-size: 1.3rem;
      }

      .info {
        margin-bottom: 3rem;

        a {
          color: ${colors.lightColor};
        }

        i {
          padding: 0 1rem;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <div css={footer}>
      <div className="wrap">
        <div>
          <h3>Mailing Address</h3>
          <div className="info">
            <ul>
              <li>Sphyn</li>
              <li>9001 Peachtree St.</li>
              <li>Atlanta, Ga 30303</li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Contact Us</h3>
          <div className="info">
            <a href="tel:770-998-0934">
              <i class="fas fa-phone fa-2x"></i>
            </a>
            <a href="mailto:info@sphyn.com">
              <i class="far fa-envelope fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
