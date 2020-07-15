import React, { Component } from 'react'
import PayPalButton from './Paypal/PayPalButton';
import PayPalButton2 from './Paypal/PayPalButton';
import PayPalButton3 from './Paypal/PayPalButton';
import { Link } from 'react-router-dom';
// import BookingPage from './BookingPage';
import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors, utilities } from '../styleVars';

const { primaryColor, darkColor, secondaryColor, lightColor } = colors;
const { borderRadius, animationSpeed } = utilities;

const packages = css`
.Packages-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
    padding: 0 2rem;
    justify-content: end;
    
}

    .package {
        border: 1px solid ${lightColor};
        border-radius: ${borderRadius};
    }

    .heading {
        background-color: ${darkColor};
        color: ${lightColor}
    }

    .price {
        border-bottom: 1px solid ${lightColor};
        font-size: 3em;
    }

    .details {
        //  background-color: ${lightColor};
        text-align: left;
        // color: ${secondaryColor};
        padding: 1rem .5rem;

        li {
            padding: .5rem 0;
        }


        
    }

    h1 {
        margin: 1rem 0;
    }

    

`
//! can't pass the props from BookingPage
class Checkout extends Component {
    constructor(props) {
        console.log('this is a line 64 on Checkout')
        super(props);
        this.state = {};
        console.log(this.state.props)
        console.log('after this.state')
    }

    render() {
        return (
            <div>
                {console.log('line 75 ')}
                <h1>{this.props.nick_name}{this.props.price}</h1> 
                <h1>Confirm previous selection by paying the correct package</h1>
                <div css={packages} >
                    <h1>Packages</h1>
                    <div className='Packages-wrapper'>
                        <div className="package1">
                            <div className="heading">
                                <h3>Test Package Title</h3>
                                <p>These are some test package details</p>
                            </div>
                            <div className="price">{this.props.nick_name}{this.props.price} this is price</div>
                            <div className="details">
                                <ul>
                                    <li>Test bullet</li>
                                    <li>Test bullet</li>
                                    <li>Test bullet</li>
                                    <li>Test bullet</li>
                                </ul>
                            </div>
                            <PayPalButton />
                        </div>
                        <div className="package2">
                            <div className="heading">
                                <h3>Test Package Title</h3>
                                <p>These are some test package details</p>
                            </div>
                            <div className="price">$300</div>
                            <div className="details">
                                <ul>
                                    <li>Test bullet</li>
                                    <li>Test bullet</li>
                                    <li>Test bullet</li>
                                    <li>Test bullet</li>
                                </ul>
                            </div>
                            <PayPalButton2 />
                        </div>
                        <div className="package3">
                            <div className="heading">
                                <h3>Test Package Title</h3>
                                <p>These are some test package details</p>
                            </div>
                            <div className="price">$500</div>
                            <div className="details">
                                <ul>
                                    <li>Test bullet</li>
                                    <li>Test bullet</li>
                                    <li>Test bullet</li>
                                    <li>Test bullet</li>
                                </ul>
                            </div>
                            <PayPalButton3 />
                        </div>
                    </div>
                </div >
                {/* <div style={{ display: "none" }}><BookingPage/></div> */}
            </div>
        )
    }
}


Checkout.propTypes = {
    nick_name: PropTypes.string,
    price: PropTypes.number
}; 

export default Checkout;
