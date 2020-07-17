/** @jsx jsx */
import React, { Component } from "react";
import PayPalButton from "./Paypal/PayPalButton";
import { Link } from "react-router-dom";
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";

const packageChoice = css`
    max-width: 700px;
    margin: auto; 
    padding: 1rem;

    a {
        color: ${colors.darkColor};
    }

    h1 {
        margin-bottom: 1rem;
    }

    .heading {
        background-color: ${colors.darkColor};
        color: ${colors.lightColor};
        border-radius: ${utilities.borderRadius};
        font-size: 1.5rem;
    }

    .price {
        font-size: 1.5rem;
    }

    .details {
        //  background-color: ${colors.lightColor};
        text-align: left;
        // color: ${colors.secondaryColor};
        padding: 1rem .5rem;

        li {
            padding: .5rem 0;
        }     
    }
`;

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div css={packageChoice}>
        <h1>Please Review before Paying!</h1>
        <div>
          <div className="heading">
            <h3>Name: {this.props.nick_name}</h3>
            <p className="price">Price $ {this.props.price}</p>
          </div>
          <div className="details">{this.props.packageDetails}</div>
          <PayPalButton price={this.props.price} />{" "}
        </div>
        <Link to="/">Back to home</Link>
        <Link to="/customer/profile">Back to profile</Link>
      </div>
    );
  }
}

export default Checkout;
