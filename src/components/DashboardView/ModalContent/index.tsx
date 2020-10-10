import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectTimes } from "../../../features/Time/slice";
import { selectUser } from "../../../features/User/slice";
import { GradientButton } from "../../Button";
import Spinner from "../../Reusable/Spinner";
import { reserveSlot, auth, checkParking } from "../../../api/Api";
import { setReservations } from "../../../features/Reservations/slice";
import { login } from "../../../features/User/slice";

const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 2rem;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 30%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SuccessIcon = styled.div`
  font-size: 3rem;
  color: green;
`;

const RealtiveGradientButton = styled(GradientButton)`
  position: relative;
  height: 50px;
`;

interface IModalContent {
  parkingId: string | null;
  closeModal: () => void;
}

const CONFIRM_STATUS = "CONFIRM_STATUS";
const SUCCESS_STATUS = "SUCCESS_STATUS";
const FAILED_STATUS = "FAILED_STATUS";

const ModalContent: FunctionComponent<IModalContent> = ({ parkingId, closeModal }) => {
  const [isLoading, setLoading] = useState(false);
  const [modalState, setModalState] = useState(CONFIRM_STATUS);
  const times = useSelector(selectTimes);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (parkingId && times.startTime && times.endTime && user.user_id)
      await reserveSlot({
        parking_slot_id: parkingId,
        from: times.startTime,
        to: times.endTime,
        user_id: user.user_id,
      });
    const fetchedUser = await auth();
    dispatch(
      login({
        name: fetchedUser.data.name,
        user_id: fetchedUser.data.id,
        active_reservations: fetchedUser.data.reservations.length,
      })
    );
    if (times.endTime && times.startTime) {
      const response = await checkParking({ to: times.endTime, from: times.startTime });
      dispatch(setReservations(response.data));
    }
    setLoading(false);
    setModalState(SUCCESS_STATUS);
  };
  return (
    <Content>
      {modalState === CONFIRM_STATUS && (
        <>
          <p>Rezerwacja od: {times.startTime}</p>
          <p>Rezerwacja do: {times.endTime}</p>
          <p>Miejsce parkingowe :{parkingId}</p>
          <RealtiveGradientButton
            onClick={() => {
              setLoading(true);
              handleSubmit();
            }}
          >
            {isLoading ? <Spinner small white /> : "Potwierdź rezerwację"}
          </RealtiveGradientButton>
        </>
      )}
      {modalState === SUCCESS_STATUS && (
        <>
          <SuccessIcon>
            <i className="fas fa-calendar-check"></i>
          </SuccessIcon>
          <p>Successfully reserved parking slot!</p>
          <GradientButton onClick={closeModal}>Close</GradientButton>
        </>
      )}
      {modalState === FAILED_STATUS && (
        <>
          <h2>Something went wrong!</h2>
          <GradientButton onClick={closeModal}>Close</GradientButton>
        </>
      )}
    </Content>
  );
};

export default ModalContent;
