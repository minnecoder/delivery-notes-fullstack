import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

export default class UpdateNote extends Component {
  constructor(props) {
    super(props);
    const data = this.props.location.state.stop.stop;
    console.log(data);
    this.state = {
      id: data._id,
      custName: data.custName,
      address: data.address,
      suite: data.suite,
      city: data.city,
      deliveryLocation: data.deliveryLocation,
      notes: data.notes,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
  }

  handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    fetch(`/api/v1/notes/${this.state.id}`, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify({
        custName: this.state.custName,
        address: this.state.address,
        suite: this.state.suite,
        city: this.state.city,
        deliveryLocation: this.state.deliveryLocation,
        notes: this.state.notes,
      }),
    });

    this.props.history.push("/stops");
  }

  render() {
    return (
      <div>
        <NavBar />
        <UpdateTitle>Update Stop</UpdateTitle>
        <p>{this.state.error}</p>
        <UpdateForm>
          <input
            name="custName"
            type="text"
            placeholder="Customer Name"
            value={this.state.custName}
            onChange={this.handleChange}
          />
          <input
            name="address"
            type="text"
            placeholder="Address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <input
            name="suite"
            type="text"
            placeholder="Suite"
            value={this.state.suite}
            onChange={this.handleChange}
          />
          <input
            name="city"
            type="text"
            placeholder="City"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <input
            name="deliveryLocation"
            type="text"
            placeholder="Delivery Location"
            value={this.state.deliveryLocation}
            onChange={this.handleChange}
          />
          <input
            name="notes"
            type="text"
            placeholder="Notes"
            value={this.state.notes}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Update Note"
            onClick={this.handleSubmit}
          />
        </UpdateForm>
      </div>
    );
  }
}

const UpdateTitle = styled.h1`
  font-size: 3rem;
  color: red;
  text-align: center;
`;

const UpdateForm = styled.form`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  input[type="text"] {
    margin: 0.5rem 0;
    padding: 1rem 0;
    width: 50%;
  }

  input[type="submit"] {
    margin: 0.5rem 0;
    padding: 1rem 0;
    width: 20%;
  }
`;
