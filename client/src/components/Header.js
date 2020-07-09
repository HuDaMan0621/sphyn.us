import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {colors, utilities} from '../styleVars';

const {primaryColor, darkColor, secondaryColor, lightColor} = colors;
const {borderRadius, animationSpeed} = utilities;

const header = css`
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
`


export default function Header() {
  return (
    <div css={header} className='header'>
       <header>
        <h1>Sphyn</h1>
        <div className="user-links">
          <a href="#">Sign In</a>
          <a href="#">Sign Up</a>
        </div>
      </header>
    </div>
  )
}
