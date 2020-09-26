import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components";
import { InfoGeneral, ParkingVisualisation, DateSelectors } from "../../components/DashboardView";
import { Snackbar } from "@material-ui/core";
import { isToast, DASHBOARD, Toast, IToast } from "../../utils/toast";

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
  const [isLoggedToast, setLoggedToast] = useState<IToast>({ message: null, isToast: false });

  useEffect(() => {
    setLoggedToast(isToast(DASHBOARD));
  }, []);

  return (
    <Wrapper>
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setLoggedToast({ message: null, isToast: false })}
        open={isLoggedToast.isToast}
      >
        <Toast>Successfully logged in!</Toast>
      </Snackbar>
      <InfoGeneral />
      <DateSelectors />
      <ParkingVisualisation />
    </Wrapper>
  );
};

export default Dashboard;
