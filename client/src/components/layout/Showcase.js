/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../../styleVars";

const showcase = css`
  height: 500px;
  width: 100vw;

  iframe {
    width: 100%;
    height: 100%;
  }
`;
export default function Showcase() {
  return (
    <div css={showcase}>
      <iframe
        src="https://my.matterport.com/show/?m=rvKhT7rSPML&play=1"
        frameborder="0"
      ></iframe>
    </div>
  );
}
