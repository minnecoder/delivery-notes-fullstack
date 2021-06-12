import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

export default function AddNote() {
  const [stop, setStop] = useState({
    custName: "",
    address: "",
    suite: "",
    city: "",
    deliveryLocation: "",
    notes: "",
    error: "",
  })

  function handleChange(e) {
    setStop.error(undefined);
    setStop([e.target.name], e.target.value);
    e.preventDefault();
  }

  function handleSubmit(e) {
    e.preventDefault();
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
    this.props.history.push("/stops");
  }

  return (
    <div>
      <NavBar />
      <AddTitle>Add Stop</AddTitle>
      <p>{stop.error}</p>
      <AddForm>
        <input
          name="custName"
          type="text"
          placeholder="Customer Name"
          value={stop.custName}
          onChange={handleChange()}
        />
        <input
          name="address"
          type="text"
          placeholder="Address"
          value={stop.address}
          onChange={handleChange()}
        />
        <input
          name="suite"
          type="text"
          placeholder="Suite"
          value={stop.suite}
          onChange={handleChange()}
        />
        <input
          name="city"
          type="text"
          placeholder="City"
          value={stop.city}
          onChange={handleChange()}
        />
        <input
          name="deliveryLocation"
          type="text"
          placeholder="Delivery Location"
          value={stop.deliveryLocation}
          onChange={handleChange()}
        />
        <input
          name="notes"
          type="text"
          placeholder="Notes"
          value={stop.notes}
          onChange={handleChange()}
        />
        <input
          name="signers"
          type="text"
          placeholder="Signers"
          value={stop.signers}
          onChange={handleChange()}
        />
        <input type="submit" value="Add Note" onClick={handleSubmit()} />
      </AddForm>
    </div>
  )
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
