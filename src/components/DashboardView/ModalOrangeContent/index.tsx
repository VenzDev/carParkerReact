import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAvailableReservations } from "../../../api/Api";
import { selectTimes } from "../../../features/Time/slice";
import Spinner from "../../Reusable/Spinner";
import { Content, CloseButton, LoadingWrapper, P, Span, Button, ReservationContent } from "./styles";

interface IModalContent {
  parkingId: string | null;
  closeModal: () => void;
}

const ModalOrangeContent: FunctionComponent<IModalContent> = ({ parkingId, closeModal }) => {
  const [isLoading, setLoading] = useState(true);
  const [availableReservations, setAvailableReservations] = useState<Array<Array<string>>>([]);
  const times = useSelector(selectTimes);
  useEffect(() => {
    getAvailableReservations({ to: times.endTime, from: times.startTime, parking_slot_id: parkingId }).then((data) => {
      setAvailableReservations(data);
      setLoading(false);
    });
  }, []);
  return (
    <Content>
      <CloseButton onClick={closeModal}>
        <i className="fas fa-times"></i>
      </CloseButton>
      {isLoading ? (
        <LoadingWrapper>
          <Spinner />
        </LoadingWrapper>
      ) : availableReservations.length > 0 ? (
        <div>
          <P>Available reservations</P>
          {availableReservations.map((timers, id) => (
            <ReservationContent key={id}>
              <Span>{`Od: ${timers[0]}`}</Span>
              <Span>{`Do: ${timers[1]}`}</Span>
              <Button>Reserve</Button>
            </ReservationContent>
          ))}
        </div>
      ) : (
        <p>Brak wolnych rezerwacji w tym przedziale</p>
      )}
    </Content>
  );
};

export default ModalOrangeContent;
