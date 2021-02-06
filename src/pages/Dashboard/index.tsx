import React, { FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import { InfoGeneral, ParkingVisualisation, DateSelectors } from "../../components/DashboardView";
import { checkParking } from "../../api/Api";
import { useDispatch } from "react-redux";
import { setReservations, prepare } from "../../features/Reservations/slice";
import { setTimes } from "../../features/Time/slice";
import Warning from "../../components/DashboardView/Warning";
import { toast } from "react-toastify";

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
    toast("Successfully logged in", { position: "top-center", type: "info" });
  }, []);

  return (
    <Wrapper>
      <InfoGeneral />
      <Warning />
      <DateSelectors getDate={getDate} />
      <ParkingVisualisation />
    </Wrapper>
  );
};

export default Dashboard;
