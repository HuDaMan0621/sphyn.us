import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";
import Logout from "./Logout";
import { Link } from "react-router-dom";

const header = css`
  header {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem;
    color: ${colors.darkColor};
    align-items: center;
    @media (min-width: 500px) {
      flex-direction: row;
    }

    .user-links {
      a {
        color: ${colors.darkColor};
        padding: 0.25rem 0.5rem;
        transition: all ${utilities.animationSpeed} ease-in-out;

        &:hover {
          color: ${colors.secondaryColor};
          border-bottom: 1px solid ${colors.darkColor};
        }
      }
    }
  }
`;

export default function Header() {
  return (
    <div css={header} className="header">
      <header>
        <h1>Sphyn</h1>
        <div className="user-links">
          <Link to="/login">Sign In</Link>
          <Link to="/register">Sign Up</Link>
        </div>
      </header>
    </div>
  );
}
