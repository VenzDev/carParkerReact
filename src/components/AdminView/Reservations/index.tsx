import React, { FunctionComponent, useEffect, useState } from "react";
import { getAllReservations } from "../../../api/Api";
import { AdminReservations } from "../../../features/types";
import { Reservation } from "./styles";

const Reservations: FunctionComponent = () => {
  const [data, setData] = useState<AdminReservations | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllReservations();
      setData(data);
    };
    getData();
  }, []);

  return (
    <div>
      {data &&
        data.data.length > 0 &&
        data.data.map((reservation) => (
          <Reservation key={reservation.id}>
            <div>
              <p>Reservation id: {reservation.id}</p>
              <p>Reservation from: {reservation.reservation_from}</p>
              <p>Reservation to: {reservation.reservation_to}</p>
              <p>Status: {reservation.status}</p>
            </div>
            <div>
              <i className="fas fa-user"></i>
              <p>User id: {reservation.user.id}</p>
              <p>User name: {reservation.user.name}</p>
            </div>
            <div>
              <i className="fas fa-edit"></i>
              <i className="fas fa-trash"></i>
            </div>
          </Reservation>
        ))}
    </div>
  );
};

export default Reservations;
