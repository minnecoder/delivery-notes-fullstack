import React, { useState } from "react";
import { useHistory } from "react-router"
import styled from "styled-components";

export default function Register() {
  const history = useHistory()
  const [user, setUser] = useState({
    userName: "",
    password: "",
    error: "",
  })

  function handleChange(event) {
    setUser({ error: undefined });
    setUser({ [event.target.name]: event.target.value });
    event.preventDefault();
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/api/v1/user/add", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: user.userName,
        password: user.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (Object.prototype.hasOwnProperty.call(data, "error")) {
          setUser({ error: data.error });
          history.push("/");
        }
        if (Object.prototype.hasOwnProperty.call(data, "success")) {
          localStorage.setItem("token", data.token);
          history.push("/stops");
        }
      });
  }

  return (
    <div>
      <RegisterTitle>Delivery Notes</RegisterTitle>
      <Error>{user.error}</Error>
      <RegisterForm onSubmit={handleSubmit()}>
        <input
          required
          name="userName"
          type="text"
          placeholder="User Name"
          value={user.userName}
          onChange={handleChange()}
        />

        <input
          required
          name="password"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange()}
        />

        <input type="submit" value="Submit" />
      </RegisterForm>
    </div>
  )
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
