import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../../styleVars";

const demo = css`
  height: 500px;
  margin: auto;
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  iframe {
    width: 100%;
    height: 250px;
    @media (min-width: 600px) {
      height: 100%;
    }
  }
`;

export default function Demo() {
  return (
    <div css={demo}>
      <div>
        <iframe
          frameborder="0"
          allowfullscreen="100%"
          allow="xr-spatial-tracking"
          src="https://my.matterport.com/show/?m=xz4qyaULAhy"
        ></iframe>
      </div>
      <div>
        <iframe
          frameborder="0"
          allowfullscreen=""
          allow="xr-spatial-tracking"
          src="https://my.matterport.com/show/?m=xbYh4Vuis2s"
        ></iframe>
      </div>
    </div>
  );
}
