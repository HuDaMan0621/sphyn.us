import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {colors, utilities} from '../styleVars';

const {primaryColor, darkColor, secondaryColor, lightColor} = colors;
const {borderRadius, animationSpeed} = utilities;

const wrapper = css`
  header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    color: ${darkColor};
    align-items: center;

    .user-links {
      a {
        color: ${darkColor};
        padding: 0 0.5rem;
        transition: all ${animationSpeed} ease-in-out;

        &:hover {
          color: ${primaryColor};
        }
      }
    }
  }

  .showcase {
    background: url("../../public/images/img/showcase.jpg") no-repeat center center/cover;
  }

  .about {
    padding: 2rem 0;
    max-width: 1100px;
    margin: auto;

    .m-heading {
        font-size: 2rem;
        margin-bottom: 1rem;
        @media(min-width: 768px) {
        font-size: 4rem;
      }
      }

    .about-wrap {
      @media(min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        align-items: left;
        text-align: left
      }
    
      .about-content {
        margin-bottom: 2rem;
        padding: 0 1rem;
        line-height: 2;

        h3 {
          text-align: left;
          margin-top: 1rem;
        }

        ul {
          text-align: left;

          li {
            padding: 1rem 0;
          }
        }
      }

      .about-image {
        height: 100%;
      }

      .about-image img {
        height: 100%;
        border-radius: ${borderRadius};
      }
    }
  }
`

export default function LandingPage() {
  return (
    <div css={wrapper}>
      {/* Header  */}
      <header>
        <h1>Sphyn</h1>
        <div className="user-links">
          <a href="#">Sign In</a>
          <a href="#">Sign Up</a>
        </div>
      </header>

      {/* Showcase */}
      <div className="showcase">
        <img src="./images/showcase.jpg" alt="beautiful home"/>
      </div>

      {/* About */}
      <div className="about">
        <h3 className='m-heading'>About</h3>
        <div className="about-wrap">
          <div className="about-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque lobortis libero, a viverra arcu condimentum rhoncus. Fusce non nibh sapien. In id scelerisque ante. Pellentesque finibus eros vitae eros porttitor, id semper nisl molestie. Maecenas at est egestas, lobortis nibh dictum, venenatis ante. Proin venenatis venenatis iaculis. Proin vitae erat ante. Fusce porttitor, urna ut finibus euismod, metus mauris posuere libero, ut aliquet ex dui at risus. Phasellus nisi orci, consectetur non dui a, ultrices aliquet velit. Integer sed sapien feugiat, venenatis neque nec, mattis diam. Nunc vel mauris nec nibh feugiat gravida a vitae ex. Duis bibendum sapien sit amet ipsum lacinia euismod a vel ipsum. Nulla aliquam aliquam elementum.</p>
          <h3>Services</h3>
          <ul>
            <li>list item service 1</li>
            <li>list item service 2</li>
            <li>list item service 3</li>
            <li>list item service 4</li>
          </ul>
          </div>
          <div className="about-image">
            <img src="./images/about-image.jpg" alt=""/>
          </div>
        </div>   
      </div>


    </div>
  )
}

