import React, { FunctionComponent } from "react";
import { styled } from "../../../styles/theme";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/User/slice";

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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

  @media (max-width: 1600px) {
    padding: 0.5rem;
  }

  @media (max-width: 1400px) {
    padding: 1rem;
  }

  @media (max-width: 1100px) {
    flex: 0 0 49%;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 500px) {
    height: 100px;
  }
`;

const InfoContent = styled.div`
  flex: 0 0 60%;

  @media (max-width: 500px) {
    > h2 {
      font-size: 1rem;
    }
    > p {
      font-size: 0.8rem;
    }
  }
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

  @media (max-width: 500px) {
    flex: 0 0 50px;
    height: 50px;
    font-size: 1rem;
  }
`;

const InfoGeneral: FunctionComponent = () => {
  const user = useSelector(selectUser);
  return (
    <InfoWrapper>
      <Info>
        <InfoContent>
          <h2>{`${new Date().getHours()}:${new Date().getMinutes()}`}</h2>
          <p>Current time</p>
        </InfoContent>
        <InfoIcon>
          <i className="far fa-clock"></i>
        </InfoIcon>
      </Info>
      <Info>
        <InfoContent>
          <h2>{user.active_reservations}</h2>
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
