import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";
import { Redirect } from "react-router-dom";

export default class Logout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
  }

  render() {
    return (
      <div>
        {this.state.redirect && <Redirect to="/" />}
        <button
          onClick={() => {
            fetch("/api/v1/logout");
            this.setState({ redirect: true });
          }}
        >
          Logout
        </button>
      </div>
    );
  }
}
