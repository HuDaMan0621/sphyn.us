/** @jsx jsx */
import React, { Component } from "react";
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";
import axios from "axios";

const login = css`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: flex-start;
  margin-top: 5vh;

  .m-heading {
    font-size: 2rem;
    margin: auto;
    border-bottom: solid 2px ${colors.primaryColor};
    width: 30%;
    margin-bottom: 2rem;
    color: ${colors.lightColor};
  }

  form {
    background: ${colors.secondaryColor};
    padding: 1rem;
    width: 100%;
    max-width: 600px;
    margin: 1rem;
    border-radius: ${utilities.borderRadius};

    input,
    label {
      display: block;
      width: 100%;
      padding: 0.5rem;
    }

    button {
      display: block;
      margin: auto;
      margin: 0.25rem auto;
      padding: 0.5rem;
      width: 100%;
      background: ${colors.primaryColor};
      border: none;
      cursor: pointer;
      border-radius: ${utilities.borderRadius};
      transition: all ${utilities.animationSpeed} ease;

      &:hover {
        background: transparent;
        border: 1px solid ${colors.primaryColor};
        color: ${colors.lightColor};
      }

      a {
        color: ${colors.lightColor};
      }
    }
  }
`;

export default class LoginSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      login_password: "",
      data: {},
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/v1/login", {
        ...this.state,
      })
      .then((res) => {
        this.setState({ data: res.data });
        this.props.history.push(`/customer/profile`);
      });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div css={login}>
        <form onSubmit={this.handleFormSubmit}>
          <h3 className="m-heading">Sign In</h3>
          <label htmlFor="email">
            <input
              htmlFor="email"
              className="email"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.state.email}
            ></input>
          </label>
          <label htmlFor="loginPassword">
            <input
              className="loginPassword"
              name="login_password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.login_password}
            ></input>
          </label>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
