import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { InfoGeneral, ParkingVisualisation, DateSelectors } from "../../components/DashboardView";

const Wrapper = styled.div`
  padding: 2rem;

  @media (max-width: 950px) {
    margin-bottom: 50px;
  }

  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

const Dashboard: FunctionComponent = () => {
  return (
    <Wrapper>
      <InfoGeneral />
      <DateSelectors />
      <ParkingVisualisation />
    </Wrapper>
  );
};

export default Dashboard;
