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
  }

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

export default class RegisterSection extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "@email.com",
    login_password: "",
    phone_number: "",
    error: false,
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/v1/customer", { ...this.state })
      .then((data) => {
        console.log("this is data from register section");
        console.log(data.data);
        this.props.history.push("/login");
      })
      .catch((error) => {
        console.log(error)
        this.setState({ error: true })
      })
    // console.log(res)
    // if (response.status !== 200) {
    //   console.log('this is line 88')
    //   console.log(response.error)
    //   this.setState({ error: response.error });
    // } else {
    // }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      error: false
    });
    
  };

  render() {
    const { error } = this.state;
    return (
      <div css={login}>
        <form onSubmit={this.handleFormSubmit}>
          {error && <h1>Email already in use</h1>}
          <h3 className="m-heading">Register</h3>
          <label htmlFor="firstName">
            <input
              className="firstName"
              name="first_name"
              placeholder="First name"
              onChange={this.handleChange}
              value={this.state.first_name}
            ></input>
          </label>
          <label htmlFor="lastName">
            <input
              className="lastName"
              name="last_name"
              placeholder="Last name"
              onChange={this.handleChange}
              value={this.state.last_name}
            ></input>
          </label>
          <label htmlFor="email">
            <input
              className="email"
              name="email"
              placeholder="Email@Email.com"
              onChange={this.handleChange}
              value={this.state.email}
            ></input>
          </label>
          <label htmlFor="loginPassword">
            <input
              type="password"
              name="login_password"
              className="loginPassword"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.login_password}
            ></input>
          </label>
          <label htmlFor="phoneNumber">
            <input
              className="phoneNumber"
              name="phone_number"
              placeholder="Phone Number"
              onChange={this.handleChange}
              value={this.state.phone_number}
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
