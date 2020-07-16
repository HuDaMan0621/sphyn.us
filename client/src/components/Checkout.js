import React, { Component } from "react";
import PayPalButton from "./Paypal/PayPalButton";
import { Link } from "react-router-dom";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";

const packageChoice = css`
    max-width: 700px;
    
    .package {
        border: 1px solid ${colors.lightColor};
        border-radius: ${utilities.borderRadius};
    }

    .heading {
        background-color: ${colors.darkColor};
        color: ${colors.lightColor}
    }

    .price {
        border-bottom: 1px solid ${colors.lightColor};
        font-size: 3em;
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

    h1 {
        margin: 1rem 0;
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
            <h3>Nick Name: {this.props.nick_name}</h3>
            <p>Price $ {this.props.price}</p>
          </div>
          <div className="price"></div>
          <div className="details">{this.props.packageDetails}</div>
          <PayPalButton price={this.props.price} />{" "}
        </div>
      </div>
    );
  }
}

export default Checkout;
