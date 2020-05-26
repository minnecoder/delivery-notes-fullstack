import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

function SingleStop(stop) {
  return (
    <Main>
      <h3>{stop.stop.custName}</h3>
      <p>
        Address: <span>{stop.stop.address}</span>
      </p>
      {stop.stop.suite !== "" && (
        <p>
          Suite: <span>{stop.stop.suite}</span>
        </p>
      )}
      <p>
        City:<span> {stop.stop.city}</span>
      </p>
      <p>
        Delivery Location: <span>{stop.stop.deliveryLocation}</span>
      </p>
    </Main>
  );
}

export default withRouter(SingleStop);

const Main = styled.div`
  width: 50%;
  padding-left: 2rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  border: solid 1px black;
  background-color: white;

  p {
    font-weight: bold;
  }
  span {
    font-weight: normal;
  }
`;
