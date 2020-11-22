import React, { Component } from "react";
import styled from "styled-components";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      error: "",
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
    fetch("/api/v1/user/add", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: this.state.userName,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (Object.prototype.hasOwnProperty.call(data, "error")) {
          this.setState({ error: data.error });
          this.props.history.push("/");
        }
        if (Object.prototype.hasOwnProperty.call(data, "success")) {
          localStorage.setItem("token", data.token);
          this.props.history.push("/stops");
        }
      });
  }

  render() {
    return (
      <div>
        <RegisterTitle>Delivery Notes</RegisterTitle>
        <Error>{this.state.error}</Error>
        <RegisterForm onSubmit={this.handleSubmit}>
          <input
            required
            name="userName"
            type="text"
            placeholder="User Name"
            value={this.state.userName}
            onChange={this.handleChange}
          />

          <input
            required
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <input type="submit" value="Submit" />
        </RegisterForm>
      </div>
    );
  }
}

const RegisterTitle = styled.h1`
  text-align: center;
  color: red;
  margin-top: 4rem;
`;

const Error = styled.p`
  text-align: center;
`;

const RegisterForm = styled.form`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  input {
    width: 20rem;
    margin: 0.5rem 0;
    padding: 1rem 0;
    text-align: center;
  }

  input[type="submit"] {
    width: 5rem;
  }
`;
