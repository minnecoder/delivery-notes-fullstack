import React, { useState, useEffect } from "react";
import { useHistory } from "react-router"
import styled from "styled-components";
import NavBar from "./NavBar";

export default function UpdateNote(stop) {
  const history = useHistory()
  const [dataLoaded, setDataLoaded] = useState(false)
  const [stopData, setStopData] = useState({
    id: "",
    custName: "",
    address: "",
    suite: "",
    city: "",
    deliveryLocation: "",
    notes: "",
    signers: "",
  })

  useEffect(() => {
    if (stop.location.state !== undefined) {
      const data = stop.location.state.stop.stop;
      localStorage.setItem("data", JSON.stringify(data));
      console.log(data);
      setStopData({
        id: data._id,
        custName: data.custName,
        address: data.address,
        suite: data.suite,
        city: data.city,
        deliveryLocation: data.deliveryLocation,
        notes: data.notes,
        signers: data.signers,
      });
      setDataLoaded(true)
    }
    if (stop.location.state === undefined) {
      const data = localStorage.getItem("data");
      const dataObject = JSON.parse(data);
      console.log(dataObject);
      setStopData({
        id: dataObject._id,
        custName: dataObject.custName,
        address: dataObject.address,
        suite: dataObject.suite,
        city: dataObject.city,
        deliveryLocation: dataObject.deliveryLocation,
        notes: dataObject.notes,
        signers: dataObject.signers,
      });
      setDataLoaded(true)
    }

  }, [dataLoaded])

  const handleChange = event => {
    event.persist();
    setStopData(stopData => ({ ...stopData, [event.target.name]: event.target.value }));
    event.preventDefault();
  }

  const handleSubmit = event => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    fetch(`/api/v1/notes/${stopData.id}`, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify({
        custName: stopData.custName,
        address: stopData.address,
        suite: stopData.suite,
        city: stopData.city,
        deliveryLocation: stopData.deliveryLocation,
        notes: stopData.notes,
        signers: stopData.signers,
      }),
    });
    localStorage.removeItem("data");
    history.push("/stops");
  }

  return (
    <Main>
      <NavBar />
      <UpdateTitle>Update Stop</UpdateTitle>
      <p>{stopData.error}</p>
      <UpdateForm>
        <input
          name="custName"
          type="text"
          placeholder="Customer Name"
          value={stopData.custName || ""}
          onChange={handleChange}
        />
        <input
          name="address"
          type="text"
          placeholder="Address"
          value={stopData.address || ''}
          onChange={handleChange}
        />
        <input
          name="suite"
          type="text"
          placeholder="Suite"
          value={stopData.suite}
          onChange={handleChange}
        />
        <input
          name="city"
          type="text"
          placeholder="City"
          value={stopData.city}
          onChange={handleChange}
        />
        <input
          name="deliveryLocation"
          type="text"
          placeholder="Delivery Location"
          value={stopData.deliveryLocation}
          onChange={handleChange}
        />
        <input
          name="notes"
          type="text"
          placeholder="Notes"
          value={stopData.notes}
          onChange={handleChange}
        />
        <input
          name="signers"
          type="text"
          placeholder="Signers"
          value={stopData.signers}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Update Note"
          onClick={handleSubmit}
        />
      </UpdateForm>
    </Main>
  )
}

const Main = styled.div`
background: #C0C6C8;
`

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
    border-radius: 8px;
  border: solid 1px #C0C6C8;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }

  input[type="submit"] {
    background: #767676;
    width: 6rem;
    padding: 1rem;
    margin-top: .5rem;
    border: solid 1px #767676;
    border-radius: 8px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
