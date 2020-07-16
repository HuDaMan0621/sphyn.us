import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../../styleVars";
import { Link } from "react-router-dom";

const packages = css`
  padding: ${utilities.sectionPadding};
  max-width: ${utilities.maxWidth};
  margin: auto;

  .m-heading {
    font-size: 2rem;
    margin: auto;
    border-bottom: solid 2px ${colors.primaryColor};
    width: 30%;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
      font-size: 4rem;
    }
  }

  .packages-wrap {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: center;
    grid-gap: 1rem;

    .package {
      border: 1px solid ${colors.darkColor};
      border-radius: ${utilities.borderRadius};

      .heading {
        background: ${colors.secondaryColor};
        color: ${colors.lightColor};
        padding: 1rem;
      }

      .price {
        font-size: 2.5rem;
        border-bottom: 1px solid ${colors.mediumColor};
        padding: 0.5rem;
      }

      .details {
        padding: 1rem;

        ul {
          text-align: left;

          li {
            padding: 0.25rem 0;

            span {
              color: ${colors.primaryColor};
            }
          }
        }

        .links {
          margin: 1rem 0;
        }
      }

      button {
        display: block;
        margin: auto;
        margin: 0.25rem auto;
        padding: 0.5rem;
        width: 100%;
        background: ${colors.primaryColor};
        border: none;
        cursor: pointer;
        border-radius: ${utilities.borderRadius};
        transition: all ${utilities.animationSpeed} ease;

        &:hover {
          background: transparent;
          border: 1px solid ${colors.primaryColor};
          color: ${colors.darkColor};

          a {
            color: ${colors.darkColor};
          }
        }

        a {
          color: ${colors.lightColor};
        }
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
              <li>
                <span>-</span> Test bullet
              </li>
              <li>
                <span>-</span> Test bullet
              </li>
              <li>
                <span>-</span> Test bullet
              </li>
              <li>
                <span>-</span> Test bullet
              </li>
            </ul>
            <div className="links">
              <button>
                <Link to="/login">Returning User Book Now</Link>
              </button>
              <button>
                <Link to="/register">New User Book Now</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="package">
          <div className="heading">
            <h3>Package 1</h3>
          </div>
          <div className="price">$150</div>
          <div className="details">
            <ul>
              <li>
                <span>-</span> Test bullet
              </li>
              <li>
                <span>-</span> Test bullet
              </li>
              <li>
                <span>-</span> Test bullet
              </li>
              <li>
                <span>-</span> Test bullet
              </li>
            </ul>
            <div className="links">
              <button>
                <Link to="/login">Returning User Book Now</Link>
              </button>
              <button>
                <Link to="/register">New User Book Now</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="package">
          <div className="heading">
            <h3>Package 1</h3>
          </div>
          <div className="price">$150</div>
          <div className="details">
            <ul>
              <li>
                <span>-</span> Test bullet
              </li>
              <li>
                <span>-</span> Test bullet
              </li>
              <li>
                <span>-</span> Test bullet
              </li>
              <li>
                <span>-</span> Test bullet
              </li>
            </ul>
            <div className="links">
              <button>
                <Link to="/login">Returning User Book Now</Link>
              </button>
              <button>
                <Link to="/register">New User Book Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
