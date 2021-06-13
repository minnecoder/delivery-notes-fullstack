import React from "react";
import { useHistory } from "react-router"
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

function NavBar() {
  const history = useHistory()

  function logout() {
    localStorage.removeItem("token");
    history.push("/");
  }

  return (
    <Main>
      <NavLink to="/add">Add</NavLink>
      <NavLink to="/stops">Stops</NavLink>
      <NavLink to="" onClick={logout}>
        Log Out
        </NavLink>
    </Main>
  )
}

export default withRouter(NavBar);

const Main = styled.div`
  background: #D0D1D4;
  text-align: center;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2)
`;

const NavLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  text-decoration: none;
  color: black;
`;
