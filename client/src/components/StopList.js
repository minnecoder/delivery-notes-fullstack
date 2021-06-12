import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router"
import styled from "styled-components";
import SingleStop from "./SingleStop";
import NavBar from "./NavBar";

export default function StopList() {
  const history = useHistory()
  const [stops, setStops] = useState([])
  const [search, setSearch] = useState("")
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("/api/v1/notes", {
      method: "GET",
      mode: "cors",
      headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then((data) => {
        setStops(data.data)
        setDataLoaded(true)
      })
      .catch((error) => {
        console.log(error);
        history.push("/");
      });
  }, [stops])

  const filteredStops = stops.filter(
    (stop) => stop.custName.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );
  if (!filteredStops.length && dataLoaded === true) {
    return (
      <div>
        <NavBar />
        <Title>Stops</Title>
        <StopListDiv>
          <Search type="text" placeholder="Search" onChange={e => setSearch(e.target.value)} />
          <p>
            There were no matches for that search. Would you like to add one?
            </p>
          <AddLink to="/add">Add</AddLink>
        </StopListDiv>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <Title>Stops</Title>
      <StopListDiv>
        <Search type="text" placeholder="Search" onChange={e => setSearch(e.target.value)} />
        {filteredStops.map((stop) => (
          <SingleStop key={stop._id} stop={stop} />
        ))}
      </StopListDiv>
    </div>
  )
}

const StopListDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Search = styled.input`
  margin-bottom: 1rem;
  padding: 1rem 0;
  width: 50%;
  text-align: center;
`;
const Title = styled.h1`
  color: red;
  font-size: 3rem;
  text-align: center;
`;

const AddLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  color: white;
  background-color: red;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid red;
`;
