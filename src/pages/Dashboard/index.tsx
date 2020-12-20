import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components";
import {
  InfoGeneral,
  ParkingVisualisation,
  DateSelectors,
} from "../../components/DashboardView";
import { Snackbar } from "@material-ui/core";
import { isToast, DASHBOARD, Toast, IToast } from "../../utils/toast";
import { checkParking } from "../../api/Api";
import { useDispatch } from "react-redux";
import { setReservations, prepare } from "../../features/Reservations/slice";
import { setTimes } from "../../features/Time/slice";
import Warning from "../../components/DashboardView/Warning";

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
  const dispatch = useDispatch();
  const [isLoggedToast, setLoggedToast] = useState<IToast>({
    message: null,
    isToast: false,
  });

  const getDate = async (date: Date, startHour: Date, endHour: Date) => {
    let from = "";
    let to = "";
    let year = date.getFullYear();
    let month = "";
    let day = "";

    if (date.getMonth() + 1 < 10) {
      month = "0" + (date.getMonth() + 1).toString();
    } else month = (date.getMonth() + 1).toString();

    if (date.getUTCDate() < 10) {
      day = "0" + date.getUTCDate().toString();
    } else day = date.getUTCDate().toString();

    if (startHour.getHours() < 10) {
      from = `${year}-${month}-${day} 0${startHour.getHours()}`;
    } else from = `${year}-${month}-${day} ${startHour.getHours()}`;

    if (startHour.getMinutes() < 10) {
      from = `${from}:0${startHour.getMinutes()}:00`;
    } else from = `${from}:${startHour.getMinutes()}:00`;

    if (endHour.getHours() < 10) {
      to = `${year}-${month}-${day} 0${endHour.getHours()}`;
    } else to = `${year}-${month}-${day} ${endHour.getHours()}`;

    if (endHour.getMinutes() < 10) {
      to = `${to}:0${endHour.getMinutes()}:00`;
    } else to = `${to}:${endHour.getMinutes()}:00`;

    const obj = {
      from,
      to,
    };
    dispatch(setTimes({ startTime: from, endTime: to }));
    dispatch(prepare({}));
    const response = await checkParking(obj);
    dispatch(setReservations(response.data));
  };

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
      <Warning />
      <DateSelectors getDate={getDate} />
      <ParkingVisualisation />
    </Wrapper>
  );
};

export default Dashboard;
