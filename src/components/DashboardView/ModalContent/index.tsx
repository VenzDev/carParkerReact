import React, { FunctionComponent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTimes } from "../../../features/Time/slice";
import { selectUser } from "../../../features/User/slice";
import Spinner from "../../Reusable/Spinner";
import { reserveSlot, auth, checkParking } from "../../../api/Api";
import { setReservations } from "../../../features/Reservations/slice";
import { login } from "../../../features/User/slice";
import { Content, RelativeGradientButton, SuccessIcon, CloseButton } from "./styles";

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

    //refresh user data in application
    const fetchedUser = await auth();
    dispatch(
      login({
        name: fetchedUser.data.name,
        user_id: fetchedUser.data.id,
        active_reservations: fetchedUser.data.reservations.length,
      })
    );

    //refresh parking visualization
    if (times.endTime && times.startTime) {
      const response = await checkParking({ to: times.endTime, from: times.startTime });
      dispatch(setReservations(response.data));
    }

    setLoading(false);
    setModalState(SUCCESS_STATUS);
  };
  return (
    <Content>
      <CloseButton onClick={closeModal}>
        <i className="fas fa-times"></i>
      </CloseButton>
      {modalState === CONFIRM_STATUS && (
        <>
          <p>Rezerwacja od: {times.startTime}</p>
          <p>Rezerwacja do: {times.endTime}</p>
          <p>Miejsce parkingowe :{parkingId}</p>
          <RelativeGradientButton
            onClick={() => {
              setLoading(true);
              handleSubmit();
            }}
          >
            {isLoading ? <Spinner small white /> : "Potwierdź rezerwację"}
          </RelativeGradientButton>
        </>
      )}
      {modalState === SUCCESS_STATUS && (
        <>
          <SuccessIcon>
            <i className="fas fa-calendar-check"></i>
          </SuccessIcon>
          <p>Successfully reserved parking slot!</p>
          <RelativeGradientButton onClick={closeModal}>Close</RelativeGradientButton>
        </>
      )}
      {modalState === FAILED_STATUS && (
        <>
          <h2>Something went wrong!</h2>
          <RelativeGradientButton onClick={closeModal}>Close</RelativeGradientButton>
        </>
      )}
    </Content>
  );
};

export default ModalContent;
