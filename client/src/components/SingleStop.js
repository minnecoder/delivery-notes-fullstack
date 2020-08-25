import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

function SingleStop(stop) {
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

          {stop.stop.notes !== "" && (
            <p>
              Notes: <span>{stop.stop.notes}</span>
            </p>
          )}
        </Left>
        <Right>
          {console.log(stop.stop.signers)}
          {stop.stop.signers !== "" && (
            <SignerList>
              <p>Past Signers</p>
              <ul>
                {stop.stop.signers.map((signer) => {
                  return <li key={signer}>{signer}</li>;
                })}
              </ul>
            </SignerList>
          )}
        </Right>
      </StopData>
      <LinkArea>
        <UpdateLink to={{ pathname: "/update", state: { stop } }}>
          Update Note
        </UpdateLink>
      </LinkArea>
    </Main>
  );
}

export default withRouter(SingleStop);

const Main = styled.div`
  width: 70%;
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

const Left = styled.div`
  // background: green;
  padding: 0 1rem;
  width: 50%;
`;

const Right = styled.div`
  // background: red;
  padding: 0 1rem;
  width: 50%;
`;

const SignerList = styled.div`
  ul {
    list-style-type: none;
  }
`;

const StopData = styled.div`
  display: flex;
  margin-right: 2rem;
`;

const LinkArea = styled.div`
  text-align: center;
`;

const UpdateLink = styled(Link)`
  display: inline-block;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  text-decoration: none;
  font-weight: bold;
  color: white;
  overflow: hidden;
  background-color: red;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border: 1px solid red;
`;
