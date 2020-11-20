import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

function SingleStop(stop) {
  const [signerName, setSignerName] = useState("");

  const onSignerChange = (e) => setSignerName(e.target.value);

  const signers = ["J. Doe", "J. Smith", "B. Williams"];

  return (
    <Main>
      <StopTitle>{stop.stop.custName}</StopTitle>
      <StopData>
        <Left>
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
          <div>
            <AddSignerText
              placeholder="Signer Name"
              type="text"
              value={signerName}
              onChange={onSignerChange}
            />
            <AddSignerBtn
              onClick={() => {
                setSignerName("");
              }}
            >
              Add Signer
            </AddSignerBtn>
          </div>
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

const AddSignerBtn = styled.button`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  color: white;
  overflow: hidden;
  background-color: red;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border: 1px solid red;
`;

const AddSignerText = styled.input`
  padding: 0.5rem;
  margin-right: 0.5rem;
`;
