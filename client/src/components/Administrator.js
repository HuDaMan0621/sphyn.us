/** @jsx jsx */
import React, { Component } from "react";
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import axios from "axios";

const links = css`
  .links {
    a {
      color: ${colors.darkColor};
      &:hover {
        color: ${colors.primaryColor};
      }
    }
  }
`;

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
      .put(
        "/api/v1/admin/update",
        {
          ...this.state,
          id: serviceId,
        },
        this.setState({
          formShown: !this.state.formShown,
        })
      )
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
      <div css={links}>
        <h1>Sphyn Admin Panel</h1>
        <div className="links">
          <Link to="/">Back to home</Link>
          <Logout />
        </div>
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
                  <span>Scheduled: </span> {service.schedule_confirm}
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
                      Name:
                      <input
                        className="nickName"
                        name="nick_name"
                        placeholder="Enter name of home"
                        onChange={(e) => this.handleChange(e, i)}
                        value={service.nick_name}
                      ></input>
                    </label>
                    SQFT:
                    <label htmlFor="sq_ft">
                      <input
                        className="sq_ft"
                        name="sq_ft"
                        placeholder="Square Foot of the House"
                        onChange={(e) => this.handleChange(e, i)}
                        value={service.sq_ft}
                      ></input>
                    </label>
                    Address:
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
                      City:
                      <input
                        className="city"
                        name="city"
                        placeholder="City"
                        onChange={(e) => this.handleChange(e, i)}
                        value={service.city}
                      ></input>
                    </label>
                    <label htmlFor="state">
                      State:
                      <input
                        className="state"
                        name="state"
                        placeholder="State"
                        onChange={(e) => this.handleChange(e, i)}
                        value={service.state}
                      ></input>
                    </label>
                    <label htmlFor="zipcode">
                      Zipcode:
                      <input
                        className="zipcode"
                        name="zipcode"
                        placeholder="Zip Code"
                        onChange={(e) => this.handleChange(e, i)}
                        value={service.zipcode}
                      ></input>
                    </label>
                    <label htmlFor="price">
                      Price:
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
                      Img URL:
                      <input
                        className="img_url"
                        name="img_url"
                        placeholder="img_url"
                        onChange={(e) => this.handleChange(e, i)}
                        value={service.img_url}
                      ></input>
                    </label>
                    <label htmlFor="customer_id">
                      Customer Id:
                      <input
                        className="customer_id"
                        name="customer_id"
                        placeholder="customer_id"
                        onChange={(e) => this.handleChange(e, i)}
                        value={service.customer_id}
                      ></input>
                    </label>
                    <label htmlFor="payment_id">
                      Payment Id:
                      <input
                        className="payment_id"
                        name="payment_id"
                        placeholder="payment_id"
                        onChange={(e) => this.handleChange(e, i)}
                        value={service.payment_id}
                      ></input>
                    </label>
                    <label htmlFor="schedule_confirm">
                      Scheduled:
                      <select
                        name="schedule_confirm"
                        id="schedule_confirm"
                        onChange={(e) => this.handleChange(e, i)}
                        value={service.schedule_confirm}
                      >
                        <option value="true">True</option>
                        <option value="false">False</option>
                      </select>
                    </label>
                    <label htmlFor="reschedule">
                      Reschedule:
                      <select
                        name="reschedule"
                        id="reschedule"
                        onChange={(e) => this.handleChange(e, i)}
                        value={service.reschedule}
                      >
                        <option value="true">True</option>
                        <option value="false">False</option>
                      </select>
                    </label>
                    <label htmlFor="completed">
                      Completed:
                      <select
                        name="completed"
                        id="completed"
                        onChange={(e) => this.handleChange(e, i)}
                        value={service.completed}
                      >
                        <option value="true">True</option>
                        <option value="false">False</option>
                      </select>
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
