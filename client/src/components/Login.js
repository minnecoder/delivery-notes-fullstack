import React, { Component } from "react";
import styled from "styled-components";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      error: ""
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
    fetch("https://express-delivery-api.herokuapp.com/user/login", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: this.state.userName,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.hasOwnProperty("error")) {
          this.setState({ error: data.error });
          this.props.history.push("/");
        }
        if (data.hasOwnProperty("token")) {
          localStorage.setItem("token", data.token);
          this.props.history.push("/stops");
        }
      });
  }

  render() {
    return (
      <div>
        <LoginTitle>Delivery Notes</LoginTitle>
        <Error>{this.state.error}</Error>
        <LoginForm onSubmit={this.handleSubmit}>
          <input
            name="userName"
            type="text"
            placeholder="User Name"
            value={this.state.userName}
            onChange={this.handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <input type="submit" value="Submit" />
        </LoginForm>
      </div>
    );
  }
}

const LoginTitle = styled.h1`
  text-align: center;
  color: red;
  margin-top: 4rem;
`;

const Error = styled.p`
  text-align: center;
`;

const LoginForm = styled.form`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  input {
    margin: 0.5rem 0;
    padding: 1rem 0;
  }
`;