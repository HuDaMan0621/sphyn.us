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
      width: 30%;
      margin-bottom: 2rem;

      @media (min-width: 768px) {
        font-size: 4rem;
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pellentesque lobortis libero, a viverra arcu condimentum rhoncus.
              Fusce non nibh sapien. In id scelerisque ante. Pellentesque
              finibus eros vitae eros porttitor, id semper nisl molestie.
              Maecenas at est egestas, lobortis nibh dictum, venenatis ante.
              Proin venenatis venenatis iaculis. Proin vitae erat ante. Fusce
              porttitor, urna ut finibus euismod, metus mauris posuere libero,
              ut aliquet ex dui at risus. Phasellus nisi orci, consectetur non
              dui a, ultrices aliquet velit. Integer sed sapien feugiat,
              venenatis neque nec, mattis diam. Nunc vel mauris nec nibh feugiat
              gravida a vitae ex. Duis bibendum sapien sit amet ipsum lacinia
              euismod a vel ipsum. Nulla aliquam aliquam elementum.
            </p>
          </div>
          <div className="about-image">
            <img src="./images/about.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
