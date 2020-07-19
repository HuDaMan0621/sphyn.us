/** @jsx jsx */
import React, { Component } from "react";
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";
import { Link } from "react-router-dom";
import axios from "axios";

const administrator = css`
  text-align: left;
  background: ${colors.medColor};
  margin: 1rem;
  border-radius: ${utilities.borderRadius};
  padding: 1rem;
  color: ${colors.lightColor};

  .user-btn {
    width: 30%;
    margin: 1rem 0;
  }

  .home-name {
    text-align: center;
    font-size: 1.5rem;
  }

  p {
    padding: 0.5rem 0;
  }

  a {
    color: ${colors.primaryColor};
  }

  span {
    color: ${colors.primaryColor};
  }

  form {
    background: ${colors.secondaryColor};
    padding: 1rem;
    width: 100%;
    max-width: 900px;
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
`;

export default class BookingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      formShown: false,
      errorMessage: "",
    };
  }
  componentDidMount = () => {
    let customerRole = "";
    fetch("/api/v1/admin/update")
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          services: data,
          errorMessage: data.error,
        });
      })
      .catch((error) => console.log("Please log in."));
  };

  handleFormSubmit = (e, serviceId) => {
    e.preventDefault();
    axios
      .put("/api/v1/admin/update", {
        ...this.state,
        id: serviceId,
      })
      .then((res) => {
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
    });
  };

  handleChange = async (e, i) => {
    const { name, value } = e.target;
    let updatedServices = [...this.state.services];
    updatedServices[i][name] = value;
    await this.setState({
      ...this.state,
      services: updatedServices,
    });
  };

  render() {
    return (
      <div>
        <h1>Sphyn Admin Panel</h1>
        <Link to="/">Back to home</Link>
        {this.state.errorMessage ? (
          <div>
            Unauthorized user. Please return to your{" "}
            <Link to="/customer/profile">
              <p>profile</p>.
            </Link>
          </div>
        ) : (
          this.state.services.map((service, i) => {
            return (
              <div css={administrator} key={service.id}>
                <p>
                  <span>Name: </span> {service.nick_name}
                  {service.sq_ft}
                </p>
                <p>
                  <span>Address: </span> {service.address}
                </p>
                <p>
                  <span>City: </span> {service.city}
                </p>
                <p>
                  <span>State: </span> {service.state}
                </p>
                <p>
                  <span>Zipcode: </span> {service.zipcode}
                </p>
                <p>
                  <span>Price: </span> {service.price}
                </p>
                <p>
                  <span>Customer Id: </span> {service.customer_id}
                </p>
                <p>
                  <span>Completed: </span> {service.completed}
                </p>
                <p>
                  <span>Rescheduled: </span> {service.reschedule}
                </p>
                <p>
                  <span>Confirmed: </span> {service.schedule_confirm}
                </p>
                <p>
                  <span>Payment: </span> {service.payment_id}
                </p>
                <p>
                  <span>Img URL: </span> {service.img_url}
                </p>
                <button className="user-btn" onClick={this.toggleService}>
                  Edit
                </button>
                {this.state.formShown ? (
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
                    <label htmlFor="price">
                      <input
                        className="price"
                        type="number"
                        min="150"
                        max="500"
                        name="price"
                        placeholder="price"
                        onChange={(e) => this.handleChange(e, i)}
                        value={service.price}
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
                ) : (
                  <div className="home-name">🏠: {service.nick_name}</div>
                )}
              </div>
            );
          })
        )}
      </div>
    );
  }
}
