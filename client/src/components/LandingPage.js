import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {colors, utilities} from '../styleVars';
import Header from './Header';
import Showcase from './Showcase';
import About from './About';

const {primaryColor, darkColor, secondaryColor, lightColor} = colors;
const {borderRadius, animationSpeed} = utilities;

export default function LandingPage() {
  return (
    <div>
     <Header/>
     <Showcase/>
     <About/>
    </div>
  )
}

