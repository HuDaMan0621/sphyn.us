import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";
import { Redirect } from "react-router-dom";

const logout = css`
  cursor: pointer;
  color: ${colors.primaryColor};
  transition: all ${utilities.animationSpeed} ease;

  &:hover {
    color: ${colors.darkColor};
  }
`;

export default class Logout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
  }

  render() {
    return (
      <div css={logout}>
        {this.state.redirect && <Redirect to="/" />}
        <a
          onClick={() => {
            fetch("/api/v1/logout");
            this.setState({ redirect: true });
          }}
        >
          Logout
        </a>
      </div>
    );
  }
}
