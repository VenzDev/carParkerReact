import React, { FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AdminTickets from "../../components/SupportView/AdminTickets";
import NewTicket from "../../components/SupportView/NewTicket";
import Tickets from "../../components/SupportView/Tickets";
import { selectUser } from "../../features/User/slice";

const Wrapper = styled.div`
  padding: 3rem;

  @media (max-width: 500px) {
      padding:1rem;
  }
`;

const SelectMode = styled.div`
  border-radius: 10px;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
  background-color: white;
  padding: 1rem;
  width: 200px;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;



  > span:first-child {
    margin-right: 1rem;
  }
  > span {
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: blue;
    }
  }
`;

const Support: FunctionComponent = () => {
  const user = useSelector(selectUser);
  const defaultMode = () => {
    if (user.role === "USER" && user.has_ticket) return "TICKETS";
    if (user.role === "USER" && !user.has_ticket) return "NEW";
    if (user.role === "ADMIN") return "ADMIN";
  };
  const [mode, SetMode] = useState(defaultMode());
  return (
    <Wrapper>
      {user.role === "USER" && (
        <SelectMode>
          {!user.has_ticket && <span onClick={() => SetMode("NEW")}>New</span>}
          {user.has_ticket && <span onClick={() => SetMode("TICKETS")}>Your Ticket</span>}
        </SelectMode>
      )}
      {mode === "NEW" && <NewTicket refreshPage={() => SetMode("TICKETS")} />}
      {mode === "TICKETS" && <Tickets />}
      {mode === "ADMIN" && <AdminTickets />}
    </Wrapper>
  );
};

export default Support;
