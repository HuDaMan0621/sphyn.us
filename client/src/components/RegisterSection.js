
import React, { Component } from 'react'  //

export default class RegisterSection extends Component {
    state = {
        first_name: 'this',
        last_name: 'this',
        email: 'this@this.com',
        // login_name: 'this',
        login_password: 'this',
        phone_number: '1111111',
        // address_line_1: 'this',
        // address_line_2: 'this',
        // address_line_3: 'this',
        // city: 'this',
        // state: 'GA',
        // zipcode: '11111',
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        fetch('/customer', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
        })
            // .then(res => res.json())
            .then(data => {
                this.props.history.push('/login')
            })
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="firstName">First Name<input className="firstName" name="first_name" placeholder="First name" onChange={this.handleChange} value={this.state.first_name}></input></label>
                    <label htmlFor="lastName">Last Name<input className="lastName" name="last_name" placeholder="Last name" onChange={this.handleChange} value={this.state.last_name}></input></label>
                    <label htmlFor="email"><input className="email" name="email" placeholder="Email@Email.com" onChange={this.handleChange} value={this.state.email}></input></label>
                    {/* <label htmlFor="loginName"><input className="loginName" placeholder="User Name" onChange={this.handleChange} value={this.state.login_name}></input></label> */}
                    <label htmlFor="loginPassword"><input type="password" name="login_password" className="loginPassword" placeholder="Password" onChange={this.handleChange} value={this.state.login_password}></input></label>
                    <label htmlFor="phoneNumber"><input className="phoneNumber" name="phone_number" placeholder="Phone Number" onChange={this.handleChange} value={this.state.phone_number}></input></label>
                    {/* <label htmlFor="address_line_1"><input className="address_line_1" placeholder="Address" onChange={this.handleChange} value={this.state.address_line_1}></input></label> */}
                    {/* <label htmlFor="address_line_2"><input className="address_line_2" placeholder="Unit/Suite/Apt #" onChange={this.handleChange} value={this.state.address_line_2}></input></label> */}
                    {/* <label htmlFor="address_line_3"><input className="address_line_3" placeholder="Address Line 3" onChange={this.handleChange} value={this.state.address_line_3}></input></label> */}
                    {/* <label htmlFor="city"><input className="city" placeholder="City" onChange={this.handleChange} value={this.state.city}></input></label> */}
                    {/* <label htmlFor="state"><input className="state" placeholder="State" onChange={this.handleChange} value={this.state.state}></input></label> */}
                    {/* <label htmlFor="zipcode"></label><input className="zipcode" placeholder="Zip Code" onChange={this.handleChange} value={this.state.zipcode}></input></label> */}
                    <button className="submit" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

