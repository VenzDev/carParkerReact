import React, { FunctionComponent, useEffect, useState } from "react";
import { getTickets } from "../../../api/Api";
import { Ticket } from "../../../features/types";
import styled from "styled-components";
import SelectedTicket from "./SelectedTicket";

const Wrapper = styled.div`
  position: relative;
  min-height: 100px;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
  width: 80%;
  margin: 1rem auto;
  padding: 1rem;
  background-color: white;
  display: flex;

  > div:first-child {
    cursor: pointer;
    flex: 0 0 75%;
    border-right: 1px solid lightgray;
  }

  > div:last-child {
    flex: 0 0 25%;
    display: flex;
    align-items: center;
    justify-content: center;

    > i {
      font-size: 2rem;
      margin-right: 1rem;
    }
  }
`;

const TICKETS = "TICKETS";
const SELECTED = "SELECTED";

const AdminTickets: FunctionComponent = () => {
  const [tickets, setTickets] = useState<Array<Ticket>>([]);
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [status, setStatus] = useState(TICKETS);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTickets();
      setTickets(data);
    };
    fetchData();
  }, []);

  const handleClick = (ticket: Ticket) => {
    setTicket(ticket);
    setStatus(SELECTED);
  };

  return (
    <div>
      {tickets.length > 0 &&
        status === TICKETS &&
        tickets.map((ticket) => (
          <Wrapper key={ticket.id}>
            <div onClick={() => handleClick(ticket)}>{ticket.title}</div>
            <div>
              <i className="fas fa-check"></i>
              <i className="fas fa-trash"></i>
            </div>
          </Wrapper>
        ))}
      {status === SELECTED && ticket && <SelectedTicket ticket={ticket} />}
    </div>
  );
};

export default AdminTickets;
