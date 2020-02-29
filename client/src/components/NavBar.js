import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.removeItem('token');
    this.props.history.push('/');
  }

  render() {
    return (
      <Main>
        <NavLink to="/add">Add</NavLink>
        <NavLink to="/stops">Stops</NavLink>
        <NavLink to="" onClick={this.logout}>
          Log Out
        </NavLink>
      </Main>
    );
  }
}

export default withRouter(NavBar);

const Main = styled.div`
  //   width: 50%;
  border: 1px solid lightgray;
  background: white;
  text-align: center;
`;

const NavLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  text-decoration: none;
  color: black;
`;
