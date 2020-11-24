import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

function SingleStop(stop) {
  const signers = ["J. Doe", "J. Smith", "B. Williams"];

  return (
    <Main>
      <StopTitle>{stop.stop.custName}</StopTitle>
      <StopData>
        <Left>
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
        </Left>
        <Right>
          {signers !== "" && (
            <SignerList>
              <p>Past Signers</p>
              <ul>
                {signers.map((signer) => {
                  return <li key={signer}>{signer}</li>;
                })}
              </ul>
            </SignerList>
          )}
        </Right>
      </StopData>
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

const StopTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
`;

const StopData = styled.div`
  display: flex;
  margin-right: 2rem;
`;
const Left = styled.div`
  padding: 0 1rem;
  width: 50%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1rem;
  width: 50 %;
`;

const SignerList = styled.div`
  ul {
    list-style-type: none;
  }
`;
