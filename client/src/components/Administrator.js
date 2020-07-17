/** @jsx jsx */
import React, { Component } from "react";
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";
import { Link } from "react-router-dom";
import axios from 'axios'

const register = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 1rem;

  a {
    color: ${colors.darkColor};
    margin-top: 2rem;
  }

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
`;

export default class BookingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      formShown: false,
    }
  }
  componentDidMount = () => {
    let customerRole = ''
    fetch("/api/v1/customer/services")
      .then(data => data.json())
      .then(data => {
        console.log(data)
        this.setState({
          services: data
        })
        // if (this.state.email !== 'authorized@gmail.com') {
        //   this.props.history.push(`/customer/profile`);
        // }
      })
      .catch(error => console.log('Please Login'))
  }

  handleFormSubmit = (e, serviceId) => {
    e.preventDefault();
    axios.put("/api/v1/admin/update", {
      ...this.state, id: serviceId
    }).then((res) => {
      if (res.ok === false) {
        this.props.history.push(`/login`);
      } else {
        this.setState({ submitted: true });
      }
    });
  };

  toggleService = (e) => {
    e.preventDefault();
    this.setState({
      formShown: !this.state.formShown,
    })

  }

  handleChange = async (e, i) => {
    const { name, value } = e.target;
    let updatedServices = [...this.state.services]
    updatedServices[i][name] = value
    await this.setState({
      ...this.state,
      services: updatedServices
    });
  };

  render() {
    return (

      <div>
        <h1>Services: All Customers</h1>
        {this.state.services.map((service, i) => {
          return (
            (service.email != 'authorized@gmail.com' ? <div>Unauthorized user. Please return to your <Link to="/customer/profile">profile.</Link></div> :
              <div css={register} key={service.id}>
                <span>{service.nick_name}</span><span>{service.sq_ft}</span><span>{service.address}</span><span>{service.city}</span>
                <span>{service.state}</span><span>{service.zipcode}</span><span>{service.price}</span><span>{service.customer_id}</span>
                <span>{service.completed}</span><span>{service.reschedule}</span><span>{service.schedule_confirm}</span><span>{service.payment_id}</span>
                <span>{service.img_url}</span>
                <button onClick={this.toggleService}>Edit</button>
                {this.state.formShown ?
                  <div>
                    <div css={register}>
                      <form onSubmit={(e) => this.handleFormSubmit(e, service.id)}>
                        <label htmlFor="nick_name">
                          <input
                            className="nickName"
                            name="nick_name"
                            placeholder="Enter name of home"
                            onChange={(e) => this.handleChange(e, i)}
                            value={service.nick_name}
                          ></input>
                        </label>
                        <label htmlFor="sq_ft">
                          <input
                            className="sq_ft"
                            name="sq_ft"
                            placeholder="Square Foot of the House"
                            onChange={(e) => this.handleChange(e, i)}
                            value={service.sq_ft}
                          ></input>
                        </label>
                        <label htmlFor="address">
                          <input
                            className="address"
                            name="address"
                            placeholder="Address of the house needs 3D service"
                            onChange={(e) => this.handleChange(e, i)}
                            value={service.address}
                          ></input>
                        </label>
                        <label htmlFor="city">
                          <input
                            className="city"
                            name="city"
                            placeholder="City"
                            onChange={(e) => this.handleChange(e, i)}
                            value={service.city}
                          ></input>
                        </label>
                        <label htmlFor="state">
                          <input
                            className="state"
                            name="state"
                            placeholder="State"
                            onChange={(e) => this.handleChange(e, i)}
                            value={service.state}
                          ></input>
                        </label>
                        <label htmlFor="zipcode">
                          <input
                            className="zipcode"
                            name="zipcode"
                            placeholder="Zip Code"
                            onChange={(e) => this.handleChange(e, i)}
                            value={service.zipcode}
                          ></input>
                        </label>
                        <label htmlFor="payment_id">
                          <input
                            className="payment_id"
                            type="number"
                            min="150"
                            max="500"
                            name="payment_id"
                            placeholder="payment_id"
                            onChange={(e) => this.handleChange(e, i)}
                            value={service.payment_id}
                          ></input>
                        </label>
                        <label htmlFor="img_url">
                          <input
                            className="img_url"
                            name="img_url"
                            placeholder="img_url"
                            onChange={(e) => this.handleChange(e, i)}
                            value={service.img_url}
                          ></input>
                        </label>
                        <label htmlFor="customer_id">
                          <input
                            className="customer_id"
                            name="customer_id"
                            placeholder="customer_id"
                            onChange={(e) => this.handleChange(e, i)}
                            value={service.customer_id}
                          ></input>
                        </label>
                        <label htmlFor="payment_id">
                          <input
                            className="payment_id"
                            name="payment_id"
                            placeholder="payment_id"
                            onChange={(e) => this.handleChange(e, i)}
                            value={service.payment_id}
                          ></input>
                        </label>
                        <label htmlFor="schedule_confirm">
                          <input
                            className="schedule_confirm"
                            name="schedule_confirm"
                            placeholder="schedule_confirm"
                            onChange={(e) => this.handleChange(e, i)}
                            value={service.schedule_confirm}
                          ></input>
                        </label>
                        <label htmlFor="reschedule">
                          <input
                            className="reschedule"
                            name="reschedule"
                            placeholder="reschedule"
                            onChange={(e) => this.handleChange(e, i)}
                            value={service.reschedule}
                          ></input>
                        </label>
                        <label htmlFor="completed">
                          <input
                            className="completed"
                            name="completed"
                            placeholder="completed"
                            onChange={(e) => this.handleChange(e, i)}
                            value={service.completed}
                          ></input>
                        </label>
                        <button className="submit" type="submit">
                          Submit Changes
                    </button>
                      </form>
                      <Link to="/">Back to home</Link>
                    </div>
                  </div>
                  : <div></div>}
              </div>)
          )
        })}
      </div>
    );
  }
}


