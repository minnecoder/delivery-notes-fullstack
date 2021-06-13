import React, { useState } from "react";
import { useHistory } from "react-router"
import styled from "styled-components";
import NavBar from "./NavBar";

export default function AddNote() {
  const history = useHistory()
  const [stop, setStop] = useState({
    custName: "",
    address: "",
    suite: "",
    city: "",
    deliveryLocation: "",
    notes: "",
    error: undefined,
  })

  const handleChange = event => {
    event.persist();
    setStop(prevStop => ({ ...prevStop, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.persist();
    const token = localStorage.getItem("token");
    fetch("/api/v1/notes", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify({
        custName: stop.custName,
        address: stop.address,
        suite: stop.suite,
        city: stop.city,
        deliveryLocation: stop.deliveryLocation,
        notes: stop.notes,
        signers: stop.signers,
      }),
    });
    setStop({
      custName: "",
      address: "",
      suite: "",
      city: "",
      deliveryLocation: "",
      notes: "",
      signers: "",
      error: "",
    });
    history.push("/stops");
  }

  return (
    <Main>
      <NavBar />
      <AddTitle>Add Stop</AddTitle>
      <p>{stop.error}</p>
      <AddForm>
        <input
          name="custName"
          type="text"
          placeholder="Customer Name"
          value={stop.custName}
          onChange={handleChange}
        />
        <input
          name="address"
          type="text"
          placeholder="Address"
          value={stop.address}
          onChange={handleChange}
        />
        <input
          name="suite"
          type="text"
          placeholder="Suite"
          value={stop.suite}
          onChange={handleChange}
        />
        <input
          name="city"
          type="text"
          placeholder="City"
          value={stop.city}
          onChange={handleChange}
        />
        <input
          name="deliveryLocation"
          type="text"
          placeholder="Delivery Location"
          value={stop.deliveryLocation}
          onChange={handleChange}
        />
        <input
          name="notes"
          type="text"
          placeholder="Notes"
          value={stop.notes}
          onChange={handleChange}
        />
        <input
          name="signers"
          type="text"
          placeholder="Signers"
          value={stop.signers}
          onChange={handleChange}
        />
        <input type="submit" value="Add Note" onClick={handleSubmit} />
      </AddForm>
    </Main>
  )
}

const Main = styled.div`
background: #C0C6C8;
`

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
    border-radius: 8px;
    border: solid 1px #C0C6C8;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }

  input[type="submit"] {
    background: #767676;
    width: 5rem;
    padding: 1rem 0;
    margin-top: .5rem;
    border: solid 1px #767676;
    border-radius: 8px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
