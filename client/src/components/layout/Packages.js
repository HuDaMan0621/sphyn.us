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
    width: 90%;
    margin-bottom: 2rem;
    padding-bottom: 0.25rem;

    @media (min-width: 768px) {
      font-size: 4rem;
      width: 40%;
    }

    @media (min-width: 900px) {
      font-size: 4rem;
      width: 30%;
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
      transition: all ${utilities.animationSpeed} ease;
      &:hover {
        transform: translateY(2px);
        box-shadow: 1px 1px 20px 2px rgba(0, 0, 0, 0.4);
      }

      .heading {
        background: ${colors.secondaryColor};
        color: ${colors.lightColor};
        padding: 1rem;
        font-size: 2rem;
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
        font-size: 1.1rem;
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
            display: block;
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
                <span>-</span> Interior and exterior photography
              </li>
              <li>
                <span>-</span> Delivered next day by 11am
              </li>
              <li>
                <span>-</span> 2000sqft max
              </li>
              <li>
                <span>-</span> $0.20 per sqft over 2000
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
            <h3>Package 2</h3>
          </div>
          <div className="price">$300</div>
          <div className="details">
            <ul>
              <li>
                <span>-</span> 3D walk through tour
              </li>
              <li>
                <span>-</span> Delivered in 2 days or less
              </li>
              <li>
                <span>-</span> 2000sqft max
              </li>
              <li>
                <span>-</span> $0.20 per sqft over 2000
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
            <h3>Package 3</h3>
          </div>
          <div className="price">$500</div>
          <div className="details">
            <ul>
              <li>
                <span>-</span> Interior and exterior photography
              </li>
              <li>
                <span>-</span> 3D walk through tour
              </li>
              <li>
                <span>-</span> 3000sqft max
              </li>
              <li>
                <span>-</span> $0.20 per sqft over 3000
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
