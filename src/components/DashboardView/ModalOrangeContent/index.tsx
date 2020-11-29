import React, { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, checkParking, getAvailableReservations, reserveSlot } from "../../../api/Api";
import { setReservations } from "../../../features/Reservations/slice";
import { selectTimes } from "../../../features/Time/slice";
import { login, selectUser } from "../../../features/User/slice";
import Spinner from "../../Reusable/Spinner";
import { RelativeGradientButton, SuccessIcon } from "../ModalContent/styles";
import { Content, CloseButton, LoadingWrapper, P, Span, Button, ReservationContent, FlexDiv } from "./styles";

interface IModalContent {
  parkingId: number | null;
  closeModal: () => void;
}

const AVAILABLE = "AVAILABLE";
const CONFIRM = "CONFIRM";
const SUCCESS = "SUCCESS";

const ModalOrangeContent: FunctionComponent<IModalContent> = ({ parkingId, closeModal }) => {
  const [isLoading, setLoading] = useState(true);
  const [isSubmitLoading, setSubmitLoading] = useState(false);
  const [status, setStatus] = useState(AVAILABLE);
  const [selectedReservation, setSelectedReservation] = useState<Array<string>>([]);
  const [availableReservations, setAvailableReservations] = useState<Array<Array<string>>>([]);
  const times = useSelector(selectTimes);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    getAvailableReservations({ to: times.endTime, from: times.startTime, parking_slot_id: parkingId!.toString() }).then(
      (data) => {
        setAvailableReservations(data);
        setLoading(false);
      }
    );
  }, []);

  const handleSelect = (timers: Array<string>) => {
    setSelectedReservation(timers);
    setStatus(CONFIRM);
  };

  const handleSubmit = async () => {
    if (parkingId && times.startTime && times.endTime && user.user_id)
      await reserveSlot({
        parking_slot_id: parkingId,
        from: selectedReservation[0],
        to: selectedReservation[1],
        user_id: user.user_id,
      });

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

    setLoading(false);
    setStatus(SUCCESS);
  };
  return (
    <Content>
      <CloseButton onClick={closeModal}>
        <i className="fas fa-times"></i>
      </CloseButton>
      {isLoading ? (
        <LoadingWrapper>
          <Spinner />
        </LoadingWrapper>
      ) : (
        <>
          {availableReservations.length > 0 && status === AVAILABLE && (
            <div>
              <P>Available reservations</P>
              {availableReservations.map((timers, id) => (
                <ReservationContent key={id}>
                  <Span>{`Od: ${timers[0]}`}</Span>
                  <Span>{`Do: ${timers[1]}`}</Span>
                  <Button onClick={() => handleSelect(timers)}>Reserve</Button>
                </ReservationContent>
              ))}
            </div>
          )}
          {status === CONFIRM && (
            <FlexDiv>
              <p>Rezerwacja od: {selectedReservation[0]}</p>
              <p>Rezerwacja do: {selectedReservation[1]}</p>
              <p>Miejsce parkingowe :{parkingId}</p>
              <RelativeGradientButton
                onClick={() => {
                  setSubmitLoading(true);
                  handleSubmit();
                }}
              >
                {isSubmitLoading ? <Spinner small white /> : "Potwierdź rezerwację"}
              </RelativeGradientButton>
            </FlexDiv>
          )}
          {status === SUCCESS && (
            <>
              <SuccessIcon>
                <i className="fas fa-calendar-check"></i>
              </SuccessIcon>
              <p>Successfully reserved parking slot!</p>
              <RelativeGradientButton onClick={closeModal}>Close</RelativeGradientButton>
            </>
          )}
        </>
      )}
    </Content>
  );
};

export default ModalOrangeContent;
