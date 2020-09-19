import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { InfoGeneral, ParkingVisualisation, DateSelectors } from "../../components/DashboardView";

const Wrapper = styled.div`
  margin: 2rem;
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
