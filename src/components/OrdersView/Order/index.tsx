import { Backdrop, Fade, Modal } from "@material-ui/core";
import React, { FunctionComponent, useState } from "react";
import { Reservation } from "../../../features/types";
import { styled } from "../../../styles/theme";
import ModalCancel from "../ModalCancel";
import Timer from "../Timer";

const Wrapper = styled.div`
  position: relative;
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

const CancelButton = styled.button`
  position: absolute;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.error};
  border-radius: 6px;
  padding: 0.3rem 0.5rem;
  right: 10px;
  top: 10px;
  transition: 0.2s;
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkError};
  }
`;

const Status = styled.p`
  color: ${({ theme }) => theme.color.blueDark};
`;

interface IOrder {
  reservation: Reservation;
  reload: () => void;
}

const Order: FunctionComponent<IOrder> = ({ reservation, reload }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleStatusMessage = () => {
    if (to_close > 0 && to_open === 0 && status === "RESERVED") return `${status} (waiting for RFID card)`;
    if (to_close === 0 && to_open === 0 && status === "RESERVED") return "WAITING FOR ARCHIVE";
    return status;
  };

  const {
    id,
    parking_slot_id,
    reservation_from,
    reservation_to,
    status,
    to_open,
    to_close,
    to_system_close,
    can_cancel,
  } = reservation;

  return (
    <Wrapper>
      <Modal
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        closeAfterTransition
        onClose={() => setModalOpen(false)}
        open={isModalOpen}
      >
        <Fade in={isModalOpen}>
          <ModalCancel reload={reload} reservation_id={id} closeModal={() => setModalOpen(false)} />
        </Fade>
      </Modal>
      {can_cancel && (
        <CancelButton onClick={() => setModalOpen(true)}>
          Cancel <i className="fas fa-trash"></i>
        </CancelButton>
      )}
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
        <Timer time={to_open || to_close || to_system_close} />
      </OrderTime>
    </Wrapper>
  );
};

export default Order;
