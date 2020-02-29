import React, { Component } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

export default class AddNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      custName: '',
      address: '',
      suite: '',
      city: '',
      deliveryLocation: '',
      notes: '',
      error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ error: undefined });
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
  }

  handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem('token');
    fetch('https://express-delivery-api.herokuapp.com/api/v1/notes', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify({
        custName: this.state.custName,
        address: this.state.address,
        suite: this.state.suite,
        city: this.state.city,
        deliveryLocation: this.state.deliveryLocation,
        notes: this.state.notes,
      }),
    });
    this.setState({
      custName: '',
      address: '',
      suite: '',
      city: '',
      deliveryLocation: '',
      notes: '',
      error: '',
    });
    this.props.history.push('/stops');
  }

  render() {
    return (
      <div>
        <NavBar />
        <AddTitle>Add Stop</AddTitle>
        <p>{this.state.error}</p>
        <AddForm>
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
          <input type="submit" value="Add Note" onClick={this.handleSubmit} />
        </AddForm>
      </div>
    );
  }
}

const AddTitle = styled.h1`
  font-size: 3rem;
  color: red;
  text-align: center;
`;

const AddForm = styled.form`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  input[type="text"] {
    margin: 0.5rem 0;
    padding: 1rem 0;
    width: 50%;
  }
`;
