import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../../styleVars";

const demo = css`
  .demo {
    padding: ${utilities.sectionPadding};
    background: ${colors.darkColor};
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default function Demo() {
  return (
    <div css={demo}>
      <div className="demo">
        <div>
          <img src="./images/demo1.jpg" alt="inside of penthouse apartment" />
        </div>
        <div>
          <img src="./images/demo2.jpg" alt="inside of penthouse apartment" />
        </div>
        <div>
          <img src="./images/demo3.jpg" alt="inside of penthouse apartment" />
        </div>
        <div>
          <img src="./images/demo4.jpg" alt="inside of penthouse apartment" />
        </div>
      </div>
    </div>
  );
}
