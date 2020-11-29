import React, { FunctionComponent, useState } from "react";

import styled from "styled-components";
import Stats from "../../components/AdminView/Stats";

const Wrapper = styled.div`
  padding: 3rem;
`;

const SelectMode = styled.div`
  border-radius: 10px;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
  background-color: white;
  padding: 1rem;
  width: 200px;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  > span:first-child {
    margin-right: 1rem;
  }
  > span {
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: blue;
    }
  }
`;

const Admin: FunctionComponent = () => {
  const [mode, SetMode] = useState("STATS");
  return (
    <Wrapper>
      <SelectMode>
        <span onClick={() => SetMode("RESERVATIONS")}>Reservations</span>
        <span onClick={() => SetMode("STATS")}>Stats</span>
      </SelectMode>
      {mode === "STATS" && <Stats />}
      {mode === "RESERVATIONS" && <div>reservations</div>}
    </Wrapper>
  );
};

export default Admin;
