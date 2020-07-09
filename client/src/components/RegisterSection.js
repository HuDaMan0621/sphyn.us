
import React, { Component } from 'react'  //

export default class RegisterSection extends Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        login_name: '',
        login_password: '',
        phone_number: '',
        address_line_1: '',
        address_line_2: '',
        address_line_3: '',
        city: '',
        state: '',
        zipcode: '',
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3010/customer/`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
        })
            .then(res => res.json())
            .then(data => {
                this.props.history.push(`http://localhost:3010/customer/${data.id}`);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="firstName">First Name<input className="firstName" placeholder="First name"></input></label>
                    <label htmlFor="lastName">Last Name<input className="lastName" placeholder="Last name"></input></label>
                    <label htmlFor="email"><input className="email" placeholder="Email@Email.com"></input></label>
                    <label htmlFor="loginName"><input className="loginName" placeholder="User Name"></input></label>
                    <label htmlFor="loginPassword"><input type="password" className="loginPassword" placeholder="Password"></input></label>
                    <label htmlFor="phoneNumber"><label htmlFor="phoneNumber"><input className="phoneNumber" placeholder="Phone Number"></input></label>
                    <label htmlFor="address_line_1"><input className="address_line_1" placeholder="Address"></input></label>
                    <label htmlFor="address_line_2"><input className="address_line_2" placeholder="Unit/Suite/Apt #"></input></label>
                    <label htmlFor="address_line_3"><input className="address_line_3" placeholder="Address Line 3"></input></label>
                    <label htmlFor="city"><input className="city" placeholder="City"></input></label>
                    <label htmlFor="state"><input className="state" placeholder="State"></input></label>
                    <label htmlFor="zipcode"></label><input className="zipcode" placeholder="Zip Code"></input></label>
                    <button className="submit" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

