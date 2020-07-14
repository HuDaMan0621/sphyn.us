import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";

const { primaryColor, darkColor, secondaryColor, lightColor } = colors;
const { borderRadius, animationSpeed } = utilities;

const demo = css`
  .demo {
    padding: ${utilities.sectionPadding};
    background: ${darkColor};
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
    }
  }
`;

export default function Demo() {
  return (
    <div css={demo}>
      <div className="demo">
        <div>
          <iframe
            src="https://my.matterport.com/show/?m=RJhF4E8pb7q"
            frameborder="0"
            allowfullscreen
            allow="xr-spatial-tracking"
          ></iframe>
        </div>
        <div>
          <iframe
            src="https://my.matterport.com/show/?m=zimbbJHhX7y"
            frameborder="0"
            allowfullscreen
            allow="xr-spatial-tracking"
          ></iframe>
        </div>
        <div>
          <iframe
            src="https://my.matterport.com/show/?m=CoPaqg84uwx"
            frameborder="0"
            allowfullscreen
            allow="xr-spatial-tracking"
          ></iframe>
        </div>
        <div>
          <iframe
            src="http://panoramic-leather.surge.sh/"
            frameborder="0"
            allowfullscreen
            allow="xr-spatial-tracking"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
