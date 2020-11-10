import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/User/slice";
import { Info, InfoContent, InfoIcon, InfoWrapper } from "./styles";

const InfoGeneral: FunctionComponent = () => {
  const [clock, setClock] = useState({ h: "12", m: "00", s: "00" });
  const user = useSelector(selectUser);
  useEffect(() => {
    function checkTime(i: number) {
      if (i < 10) return "0" + i.toString();
      return i.toString();
    }

    function updateTime() {
      const today = new Date();
      let h = today.getHours().toString();
      let m = checkTime(today.getMinutes());
      let s = checkTime(today.getSeconds());
      setClock({ h, m, s });
    }
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  });
  return (
    <InfoWrapper>
      <Info>
        <InfoContent>
          <h2>{`${clock.h}:${clock.m}:${clock.s}`}</h2>
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
