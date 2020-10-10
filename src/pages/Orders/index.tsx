import React, { FunctionComponent, useEffect, useState } from "react";
import { getActiveReservations } from "../../api/Api";
import Spinner from "../../components/Reusable/Spinner";
import { Reservation } from "../../features/types";
import styled from "styled-components";
import Order from "../../components/OrdersView/Order";

const OrdersContainer = styled.div`
  min-height: calc(100vh - 70px);
  position: relative;
`;

const Wrapper = styled.div`
  padding: 3rem;
`;

const H2 = styled.h2`
  font-weight: normal;
`;

const Orders: FunctionComponent = () => {
  const [reservations, setReservations] = useState<Array<Reservation>>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getReservations() {
      const data = await getActiveReservations();
      setReservations(data);
      setLoading(false);
    }
    getReservations();
  }, []);
  return (
    <OrdersContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <Wrapper>
          <H2>Your active reservations</H2>
          {reservations.map((reservation) => (
            <Order key={reservation.id} reservation={reservation} />
          ))}
        </Wrapper>
      )}
    </OrdersContainer>
  );
};

export default Orders;
