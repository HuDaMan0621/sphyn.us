import React, { Component } from 'react'

export default class BookingPage extends Component {

    state = {
        nick_name: 'big house',
        sq_ft: '2000',
        address: '123',
        city: 'atlanta',
        state: 'ga',
        zipcode: '11111',
        price: '',
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
                console.log('this is RESSSSS', res)
                if (res.ok === false) {
                    this.props.history.push(`/login`)  
                } else {
                    this.props.history.push(`/customer/profile`)
                }
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
                    <label htmlFor="nick_name">Nick Name<input className="nickName" name="nick_name" placeholder="My First House" onChange={this.handleChange} value={this.state.nick_name}></input></label>
                    <label htmlFor="sq_ft">Size of the Property in Square Foot<input className="sq_ft" name="sq_ft" placeholder="Square Foot of the House" onChange={this.handleChange} value={this.state.sq_ft}></input></label>
                    <label htmlFor="address"><input className="address" placeholder="Address of the house needs 3D service" onChange={this.handleChange} value={this.state.address}></input></label>
                    <label htmlFor="city"><input className="city" placeholder="City" onChange={this.handleChange} value={this.state.city}></input></label>
                    <label htmlFor="state"><input className="state" placeholder="State" onChange={this.handleChange} value={this.state.state}></input></label>
                    <label htmlFor="zipcode"><input className="zipcode" placeholder="Zip Code" onChange={this.handleChange} value={this.state.zipcode}></input></label>
                    <label htmlFor="price">
                        <select name="price" onChange={this.handleChange} value={this.state.price} required>
                            <option className="packageEmpty" value="" disabled>Please Select a Package</option>
                            <option className="package1" value="150">Package 1 $150</option>
                            <option className="package2" value="300">Package 2 $300</option>
                            <option className="package3" value="5000">Package 3 $5000</option>
                        </select>
                    </label>
                    <button className="submit" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
