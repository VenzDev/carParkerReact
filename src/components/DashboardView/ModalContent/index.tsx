import React, { FunctionComponent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTimes } from "../../../features/Time/slice";
import { selectUser } from "../../../features/User/slice";
import Spinner from "../../Reusable/Spinner";
import { reserveSlot, auth, checkParking } from "../../../api/Api";
import { setReservations } from "../../../features/Reservations/slice";
import { login } from "../../../features/User/slice";
import { Content, RelativeGradientButton, SuccessIcon, CloseButton, WarningIcon } from "./styles";

interface IModalContent {
  parkingId: number | null;
  closeModal: () => void;
}

const CONFIRM_STATUS = "CONFIRM_STATUS";
const SUCCESS_STATUS = "SUCCESS_STATUS";
const FAILED_STATUS = "FAILED_STATUS";

const ModalContent: FunctionComponent<IModalContent> = ({ parkingId, closeModal }) => {
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalState, setModalState] = useState(CONFIRM_STATUS);
  const times = useSelector(selectTimes);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (parkingId && times.startTime && times.endTime && user.user_id)
      try {
        await reserveSlot({
          parking_slot_id: parkingId,
          from: times.startTime,
          to: times.endTime,
          user_id: user.user_id,
        });
        setLoading(false);
        setModalState(SUCCESS_STATUS);
      } catch (err) {
        setErrorMessage(err.response.data.message);
        setLoading(false);
        setModalState(FAILED_STATUS);
      }

    //refresh user data in application
    const fetchedUser = await auth();
    dispatch(
      login({
        name: fetchedUser.data.name,
        user_id: fetchedUser.data.id,
        active_reservations: fetchedUser.data.reservations.length,
        cars_on_parking: fetchedUser.data.cars_on_parking,
        role: fetchedUser.data.role,
      })
    );

    //refresh parking visualization
    if (times.endTime && times.startTime) {
      const response = await checkParking({ to: times.endTime, from: times.startTime });
      dispatch(setReservations(response.data));
    }
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
          <WarningIcon>
            <i className="far fa-frown-open"></i>
          </WarningIcon>
          <p>{errorMessage}</p>
          <RelativeGradientButton onClick={closeModal}>Close</RelativeGradientButton>
        </>
      )}
    </Content>
  );
};

export default ModalContent;
