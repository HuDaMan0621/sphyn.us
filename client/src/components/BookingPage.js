/** @jsx jsx */
import React, { Component } from "react";
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";
import Checkout from "./Checkout";

const register = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 1rem;

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
    label,
    select {
      display: block;
      width: 100%;
      padding: 0.5rem 0;
    }

    option {
        background: red;
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

    .package {
      border: 1px solid ${colors.darkColor};
      border-radius: ${utilities.borderRadius};
      width: 100%;
      max-width: 600px;

      .heading {
        background: ${colors.secondaryColor};
        color: ${colors.lightColor};
        padding: 1rem;
      }

      .price {
        font-size: 2.5rem;
        border-bottom: 1px solid ${colors.mediumColor};
        padding: 0.5rem;
      }

      .details {
        padding: 1rem;

        ul {
          text-align: left;

          li {
            padding: 0.25rem 0;

            span {
              color: ${colors.primaryColor};
            }
          }
        }
      }
    }
  }
`;

export default class BookingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nick_name: '',
      sq_ft: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      price: '',
      submitted: false,
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    fetch('/api/v1/booking', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
    })
      .then(res => {
        if (res.ok === false) {
          this.props.history.push(`/login`)
        }
        else {
          this.setState({ submitted: true })
        }
      })
  }


  handleChange = async (e) => {
    const { name, value } = e.target;
    await this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div >{
        !this.state.submitted ? (
          <div css={register}>
            <form onSubmit={this.handleFormSubmit}>
              <label htmlFor="nick_name">
                <input
                  className="nickName"
                  name="nick_name"
                  placeholder="Enter name of home"
                  onChange={this.handleChange}
                  value={this.state.nick_name}
                ></input>
              </label>
              <label htmlFor="sq_ft">
                <input
                  className="sq_ft"
                  name="sq_ft"
                  placeholder="Square Foot of the House"
                  onChange={this.handleChange}
                  value={this.state.sq_ft}
                ></input>
              </label>
              <label htmlFor="address">
                <input
                  className="address"
                  name="address"
                  placeholder="Address of the house needs 3D service"
                  onChange={this.handleChange}
                  value={this.state.address}
                ></input>
              </label>
              <label htmlFor="city">
                <input
                  className="city"
                  name="city"
                  placeholder="City"
                  onChange={this.handleChange}
                  value={this.state.city}
                ></input>
              </label>
              <label htmlFor="state">
                <input
                  className="state"
                  name="state"
                  placeholder="State"
                  onChange={this.handleChange}
                  value={this.state.state}
                ></input>
              </label>
              <label htmlFor="zipcode">
                <input
                  className="zipcode"
                  name="zipcode"
                  placeholder="Zip Code"
                  onChange={this.handleChange}
                  value={this.state.zipcode}
                ></input>
              </label>
              <label htmlFor="price">
                <select
                  name="price"
                  onChange={this.handleChange}
                  value={this.state.price}
                  required
                >
                  <option className="packageEmpty" value="" disabled>
                    Please Select a Package
              </option>
                  <option className="package1" value="150">
                    Package 1 $150
              </option>
                  <option className="package2" value="300">
                    Package 2 $300
              </option>
                  <option className="package3" value="5000">
                    Package 3 $500
              </option>
                </select>
              </label>
              <button className="submit" type="submit">
                Submit
          </button>
            </form>
            <div className="package">
              <div className="heading">
                <h3>Package</h3>
              </div>
              <div className="price">$150</div>
              <div className="details">
                <ul>
                  <li>
                    <span>-</span> Test bullet
              </li>
                  <li>
                    <span>-</span> Test bullet
              </li>
                  <li>
                    <span>-</span> Test bullet
              </li>
                  <li>
                    <span>-</span> Test bullet
              </li>
                </ul>
              </div>
            </div>
          </div>
        ) : <Checkout nick_name={this.state.nick_name} price={this.state.price} />}</div>);
  }
}
