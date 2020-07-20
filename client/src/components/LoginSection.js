/** @jsx jsx */
import React, { Component } from "react";
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";
import { Link } from "react-router-dom";
import axios from "axios";

const login = css`
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  margin-top: 5vh;

  a {
    color: ${colors.darkColor};
    &:hover {
      color: ${colors.primaryColor};
    }
  }

  .m-heading {
    font-size: 1.3rem;
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
      padding: 0.5rem 0;
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
    let customerRole = "";
    e.preventDefault();
    axios
      .post("/api/v1/login", {
        ...this.state,
      })
      .then((res) => {
        this.setState({ data: res.data })
        if (this.state.email === 'authorized@gmail.com') {
          customerRole = 'admin';
          this.props.history.push('/admin/update');
        } else {
          this.props.history.push(`/customer/profile`);
        }
      });
  };

  handleChange = (e) => {
    let customerRole = "";
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  analyzePassword = (e) => {
    const realRegex = new RegExp(
      "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
    );
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    if (realRegex.test(e.target.value)) {
      e.target.setCustomValidity("");
    } else {
      e.target.setCustomValidity(
        "Password must contain a minimum of eight characters, with at least one letter, one number, and one special character"
      );
    }
  };

  render() {
    return (
      <div css={login}>
        <form onSubmit={this.handleFormSubmit}>
          <h3 className="m-heading">Sign In</h3>
          <label htmlFor="email">
            <input
              required
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
              required
              className="loginPassword"
              name="login_password"
              placeholder="Password"
              onChange={this.analyzePassword}
              value={this.state.login_password}
              type="password"
            ></input>
          </label>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
        <Link to="/">Back to home</Link>
      </div>
    );
  }
}
