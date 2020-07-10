import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors, utilities } from '../styleVars';

const { primaryColor, darkColor, secondaryColor, lightColor } = colors;
const { borderRadius, animationSpeed } = utilities;

const demo = css`

.Demo {
    @media(min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
    }


.demo-image > img {
    border-radius: ${borderRadius};
}

    

`

export default function Demo() {
    return (
        <div css={demo} >
            <div className='Demo'>
                <div className="demo-image">
                    <img src="./images/kitchen.jpg" alt="kitchen" />
                </div>
                <div className="demo-image">
                    <img src="./images/living-room.jpg" alt="living-room" />
                </div>
            </div>
        </div>
    )
}
