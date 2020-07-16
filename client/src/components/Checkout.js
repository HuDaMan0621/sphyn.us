import React, { Component } from "react";
import PayPalButton from "./Paypal/PayPalButton";
// import PayPalButton2 from "./Paypal/PayPalButton";
// import PayPalButton3 from "./Paypal/PayPalButton";
// import Package1 from "./packageDetails/Package1";
// import Package2 from "./packageDetails/Package2";
// import Package3 from "./packageDetails/Package3";
import { Link } from "react-router-dom";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";

const packages = css`
.Packages-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
    padding: 0 2rem;
    justify-content: end;
    
}

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
//! can't pass the props from BookingPage
class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {console.log("line 75 ")}
        {/* <h1>{this.props.nick_name}{this.props.price}</h1> */}
        <h1>Please Review before Paying!</h1>
        <div css={packages}>
          {/* <h1>Packages</h1> */}
          <div className="Packages-wrapper">
            <div className="package1">
              <div className="heading">
                <h3>Nick Name: {this.props.nick_name}</h3>
                <p>Price $ {this.props.price}</p>
              </div>
              <div className="price"></div>
              <div className="details">{this.props.packageDetails}</div>
              <PayPalButton price={this.props.price} />{" "}
              {/* turnary operation to show payment buttons 1 2 or 3 depends on the price */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Checkout.propTypes = {
//     nick_name: PropTypes.string,
//     price: PropTypes.number
// };

export default Checkout;
