import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/User/slice";
import { Info, InfoContent, InfoIcon, InfoWrapper } from "./styles";
import { carsOnParking } from "../../../api/Api";

const InfoGeneral: FunctionComponent = () => {
  const [carsCount, setCarsCount] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const user = useSelector(selectUser);

  useEffect(() => {
    const getCarsOnParking = async () => {
      const data = await carsOnParking();
      setCarsCount(data);
      setLoading(false);
    };
    getCarsOnParking();
  }, []);
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
          <h2>Low</h2>
          <p>Today's parking overload</p>
        </InfoContent>
        <InfoIcon>
          <i className="fas fa-balance-scale"></i>
        </InfoIcon>
      </Info>
      <Info>
        <InfoContent>
          <h2>{user.cars_on_parking}</h2>
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
