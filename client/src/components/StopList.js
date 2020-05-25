import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SingleStop from "./SingleStop";
import NavBar from "./NavBar";

export default class StopList extends React.Component {
  state = {
    stops: [],
    search: "",
    dataLoaded: false,
  };

  onchange = (e) => {
    this.setState({ search: e.target.value });
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    fetch("/api/v1/notes", {
      method: "GET",
      mode: "cors",
      headers: { Authorization: token },
    })
      .then((res) => res.json())
      .then((data) => this.setState({ stops: data.data, dataLoaded: true }))
      .catch((error) => {
        console.log(error);
        this.props.history.push("/");
      });
  }

  render() {
    const { search } = this.state;
    const filteredStops = this.state.stops.filter(
      (stop) => stop.custName.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
    if (!filteredStops.length && this.state.dataLoaded === true) {
      return (
        <div>
          <NavBar />
          <Title>Stops</Title>
          <StopListDiv>
            <Search type="text" placeholder="Search" onChange={this.onchange} />
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
          <Search type="text" placeholder="Search" onChange={this.onchange} />
          {filteredStops.map((stop) => (
            <SingleStop key={stop._id} stop={stop} />
          ))}
        </StopListDiv>
      </div>
    );
  }
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
