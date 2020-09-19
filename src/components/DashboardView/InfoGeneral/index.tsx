import React, { FunctionComponent } from "react";
import { styled } from "../../../styles/theme";

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 0 0 23%;
  height: 150px;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
  background-color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const InfoContent = styled.div`
  flex: 0 0 60%;
`;

const InfoIcon = styled.div`
  flex: 0 0 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: blue;
  font-size: 1.5rem;
  height: 75px;
  background-color: rgba(0, 128, 255, 0.3);
  border-radius: 50%;
`;

const InfoGeneral: FunctionComponent = () => {
  return (
    <InfoWrapper>
      <Info>
        <InfoContent>
          <h2>14:23</h2>
          <p>Current time</p>
        </InfoContent>
        <InfoIcon>
          <i className="far fa-clock"></i>
        </InfoIcon>
      </Info>
      <Info>
        <InfoContent>
          <h2>1</h2>
          <p>Your active reservations</p>
        </InfoContent>
        <InfoIcon>
          <i className="fas fa-shopping-cart"></i>
        </InfoIcon>
      </Info>
      <Info>
        <InfoContent>
          <h2>10</h2>
          <p>Free spaces</p>
        </InfoContent>
        <InfoIcon>
          <i className="fas fa-parking"></i>
        </InfoIcon>
      </Info>
      <Info>
        <InfoContent>
          <h2>3</h2>
          <p>Cars on parking</p>
        </InfoContent>
        <InfoIcon>
          <i className="fas fa-car"></i>
        </InfoIcon>
      </Info>
    </InfoWrapper>
  );
};

export default InfoGeneral;
