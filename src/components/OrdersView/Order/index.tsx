import React, { FunctionComponent } from "react";
import { Reservation } from "../../../features/types";
import { styled } from "../../../styles/theme";

const Wrapper = styled.div`
  height: 200px;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
  width: 80%;
  margin: 1rem auto;
  background-color: white;
  display: flex;
  align-items: center;
`;

const OrderInfo = styled.div`
  flex: 0 0 50%;
  padding: 1rem;
`;

const OrderTime = styled.div`
  flex: 0 0 30%;
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.blueDark};
`;

const OrderStatusWrapper = styled.div`
  flex: 0 0 20%;
`;

const ParkingId = styled.p`
  color: ${({ theme }) => theme.color.blueDark};
  font-size: 1.4rem;
`;

const Time = styled.div`
  background-color: ${({ theme }) => theme.color.blueDark};
  color: white;
  font-size: 1.8rem;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Status = styled.p`
  color: ${({ theme }) => theme.color.blueDark};
`;

interface IOrder {
  reservation: Reservation;
}

const Order: FunctionComponent<IOrder> = ({ reservation }) => {
  const handleStatusMessage = () => {
    if (to_close && !to_open && status === "RESERVED") return `${status} (waiting for RFID card)`;
    if (!to_close && !to_open && status === "RESERVED") return "WAITING FOR ARCHIVE";
    return status;
  };

  const { parking_slot_id, reservation_from, reservation_to, status, to_open, to_close, to_system_close } = reservation;
  return (
    <Wrapper>
      <OrderInfo>
        <ParkingId>Parking slot {parking_slot_id}</ParkingId>
        <p>Reservation from {reservation_from}</p>
        <p>Reservation to {reservation_to}</p>
        <Status>Status: {handleStatusMessage()}</Status>
      </OrderInfo>
      <OrderStatusWrapper>
        <p>{to_open ? "You can put your RFID card on scanner in" : "Your reservation is still active for"}</p>
      </OrderStatusWrapper>
      <OrderTime>
        <Time>{(to_open && to_open) || (to_close && to_close) || (to_system_close && to_system_close)}</Time>
      </OrderTime>
    </Wrapper>
  );
};

export default Order;
