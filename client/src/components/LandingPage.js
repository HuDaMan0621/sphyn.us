import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import {colors} from '../styleVars'
const {primaryColor, darkColor, lightColor} = colors;
const main = css`
  color: ${primaryColor};


  h1 {
    font-size: 4rem;
  }


`

export default function LandingPage() {
  return (
    <div css={main}>
      <h1>hello world</h1>
    </div>
  )
}

