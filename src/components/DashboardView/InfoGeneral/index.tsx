import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/User/slice";
import { Info, InfoContent, InfoIcon, InfoWrapper } from "./styles";

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
