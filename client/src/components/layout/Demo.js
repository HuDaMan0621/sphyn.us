import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../../styleVars";

const demo = css`
  background: ${colors.darkColor};
  height: 500px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  iframe {
    width: 100%;
    height: 100%;
  }
`;

export default function Demo() {
  return (
    <div css={demo}>
      <div>
        <iframe
          frameborder="0"
          allowfullscreen=""
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
      <div>
        <iframe
          frameborder="0"
          allowfullscreen=""
          allow="xr-spatial-tracking"
          src="https://my.matterport.com/show/?m=K2svdmMGHBG"
        ></iframe>
      </div>
      <div>
        <iframe
          frameborder="0"
          allowfullscreen=""
          allow="xr-spatial-tracking"
          src="https://my.matterport.com/show/?m=sqMTt9HSrFa"
        ></iframe>
      </div>
    </div>
  );
}
