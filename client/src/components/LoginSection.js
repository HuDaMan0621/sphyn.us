import React, { Component } from 'react';
import ProfilePage from './ProfilePage';

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
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
        })
            .then(res => res.json())
            .then(data => {
                this.setState({ data: data })

                this.props.history.push('/customer/:id/profile')
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
                {/* the data is passing to the Profile page from here, we don't need the 'key={index}' */}
                {/* <ProfilePage id={this.state.data.id} /> */}
                <form onSubmit={this.handleFormSubmit}>
                    <input htmlFor="email" className="email" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email}></input>
                    <label htmlFor="loginPassword"><input className="loginPassword" name="login_password" placeholder="Password" onChange={this.handleChange} value={this.state.login_password}></input></label>
                    <button className="submit" type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}