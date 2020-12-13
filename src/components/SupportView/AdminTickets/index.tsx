import React, { FunctionComponent, useEffect, useState } from "react";
import { deleteTicket, getTickets } from "../../../api/Api";
import { Ticket } from "../../../features/types";
import styled from "styled-components";
import SelectedTicket from "./SelectedTicket";
import Spinner from "../../Reusable/Spinner";

const Wrapper = styled.div`
  position: relative;
  min-height: 100px;
  border-radius: 10px;
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

    &:hover {
      color: blue;
    }
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

const SpinnerWrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 300px);
`;

const TICKETS = "TICKETS";
const SELECTED = "SELECTED";

const AdminTickets: FunctionComponent = () => {
  const [tickets, setTickets] = useState<Array<Ticket>>([]);
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [status, setStatus] = useState(TICKETS);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTickets();
      setTickets(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleClick = (ticket: Ticket) => {
    setTicket(ticket);
    setStatus(SELECTED);
  };

  const handleBackToList = () => {
    setTicket(null);
    setStatus(TICKETS);
  };

  const handleDelete = async (id: number) => {
    await deleteTicket(id);
  };

  return (
    <div>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        tickets.length > 0 &&
        status === TICKETS &&
        tickets.map((ticket) => (
          <Wrapper key={ticket.id}>
            <div onClick={() => handleClick(ticket)}>{ticket.title}</div>
            <div>
              <i className="fas fa-check" />
              <i className="fas fa-trash" onClick={() => handleDelete(ticket.id)} />
            </div>
          </Wrapper>
        ))
      )}
      {status === SELECTED && ticket && <SelectedTicket handleBackToList={handleBackToList} ticketId={ticket.id} />}
    </div>
  );
};

export default AdminTickets;
