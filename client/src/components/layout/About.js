/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../../styleVars";
import { Link } from "react-router-dom";

const about = css`
  .about {
    padding: ${utilities.sectionPadding};
    max-width: 1100px;
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

    .about-wrap {
      @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        text-align: left;
      }

      .about-content {
        line-height: 2;

        h3 {
          text-align: left;
          margin-top: 1rem;
        }

        p {
          margin-bottom: 2rem;
        }

        ul {
          text-align: left;

          li {
            padding: 1rem 0;
          }
        }

        .services {
          background: ${colors.darkColor};
          color: ${colors.lightColor};
          padding: 1rem;
          margin-top: 2rem;
          border-radius: ${utilities.borderRadius};

          h3 {
            text-align: center;
          }
        }
      }

      .about-image img {
        height: 100%;
        max-height: 700px;
        border-radius: ${utilities.borderRadius};
      }
    }
  }
`;

export default function About() {
  return (
    <div css={about}>
      <div className="about">
        <h3 className="m-heading">About</h3>
        <div className="about-wrap">
          <div className="about-content">
            <p>
              Sphyn offers 3D home tours taken with the Matterport camera,
              prospective buyers, renters, customers or visitors can take a tour
              of your property anytime, from anywhere. How is this possible?
              Matterport is a three-dimensional camera system you can use to
              create realistic, fully immersive experiences. Our designers use
              this tool to capture imagery, collect measurements and process
              data to create, edit and share a 3D rendering of your location.
              Viewers can then explore the location from a variety of
              viewpoints, learn more about the aspects of the location they’re
              interested in and get a feel for the space without having to
              physically travel there. They can view this 3D representation on a
              desktop computer, a mobile device or with a virtual-reality
              headset for an even more immersive experience.
            </p>
            <div className="links">
              <Link to="/faqs">Faqs</Link>
              <Link to="/guidelines">Guidelines</Link>
            </div>
          </div>
          <div className="about-image">
            <img src="./images/about.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
