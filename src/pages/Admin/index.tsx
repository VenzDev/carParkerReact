import React, { FunctionComponent, useState } from "react";

import styled from "styled-components";
import CarsOnParking from "../../components/AdminView/CarsOnParking";
import Reservations from "../../components/AdminView/Reservations";
import Stats from "../../components/AdminView/Stats";

const Wrapper = styled.div`
  padding: 3rem;
`;

const SelectMode = styled.div`
  border-radius: 10px;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
  background-color: white;
  padding: 1rem;
  width: 450px;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

interface ISpan {
  active: boolean;
}

const Span = styled.span`
  padding: 0 1rem;
  color: ${({ active }: ISpan) => active && "blue"};
  border-right: 1px solid lightgray;
  &:last-child {
    margin-right: 0;
    border: 0;
  }
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: blue;
  }
`;

const Admin: FunctionComponent = () => {
  const [mode, SetMode] = useState("STATS");
  return (
    <Wrapper>
      <SelectMode>
        <Span
          active={mode === "RESERVATIONS"}
          onClick={() => SetMode("RESERVATIONS")}
        >
          Reservations
        </Span>
        <Span active={mode === "USERS"} onClick={() => SetMode("USERS")}>
          Users
        </Span>
        <Span active={mode === "STATS"} onClick={() => SetMode("STATS")}>
          Stats
        </Span>
        <Span
          active={mode === "CARS_ON_PARKING"}
          onClick={() => SetMode("CARS_ON_PARKING")}
        >
          Cars on parking
        </Span>
      </SelectMode>
      {mode === "STATS" && <Stats />}
      {mode === "RESERVATIONS" && <Reservations />}
      {mode === "USERS" && <div>users</div>}
      {mode === "CARS_ON_PARKING" && <CarsOnParking />}
    </Wrapper>
  );
};

export default Admin;
