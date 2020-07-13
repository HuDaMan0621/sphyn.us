import React, { Component } from 'react';
// import ProfilePage from './ProfilePage';
// import QRCode from 'qrcode.react';
import axios from 'axios';

export default class LoginSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // first_name: 'this',
            // last_name: 'this',
            email: '',
            // login_name: 'this',
            login_password: '',
            // phone_number: '1111111',
            // address_line_1: 'this',
            // address_line_2: 'this',
            // address_line_3: 'this',
            // city: 'this',
            // state: 'GA',
            // zipcode: '11111',
            data: {},
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        // fetch('/login', {
        //     method: 'POST',
        //     body: JSON.stringify(this.state),
        //     headers: {
        //         'Content-Type': 'application/json;charset=UTF-8'
        //     },
        // })
            // .then(res => res.json())
            axios.post('/api/v1/login', {
                ...this.state,
            }).then(res => {
                this.setState({data:res.data})
                this.props.history.push(`/customer/profile`)

            })
            // .then(data => {
            //     fetch('/customer')
                // console.log(this.state)
                // .then(data.id => {
                //     // this.setState({ data: data })
                //     console.log(data.json())
                //     console.log('*****')
                // })
            // })
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
                {/* <ProfilePage data={this.state.data}/> */}
                {/* the data is passing to the Profile page from here, we don't need the 'key={index}' */}
                <form onSubmit={this.handleFormSubmit}>
                    <input htmlFor="email" className="email" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email}></input>
                    <label htmlFor="loginPassword"><input className="loginPassword" name="login_password" placeholder="Password" onChange={this.handleChange} value={this.state.login_password}></input></label>
                    <button className="submit" type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}