import React, { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { addTicketMessage, getUserTicket } from "../../../api/Api";
import { Ticket, User } from "../../../features/types";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/User/slice";
import { GradientButton } from "../../Button";
import Spinner from "../../Reusable/Spinner";

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
    flex: 0 0 75%;
    border-right: 1px solid lightgray;
  }

  > div:last-child {
    flex: 0 0 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > i {
      font-size: 2rem;
    }
  }
`;

const SendMessageWrapper = styled.div`
  position: relative;
  min-height: 150px;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
  width: 50%;
  margin: 1rem auto;
  padding: 1rem;
  background-color: white;
`;

const TextareaWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  > textarea {
    height: 70px;
    width: 100%;
  }
`;

const CenterGradientButton = styled(GradientButton)`
  height: 40px;
  position: relative;
  display: block;
  margin: 1rem auto;
`;

const Tickets: FunctionComponent = () => {
  const [isLoading, setLoading] = useState(false);
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [message, setMessage] = useState("");
  const user: User = useSelector(selectUser);

  useEffect(() => {
    const fetchTicket = async () => {
      const data = await getUserTicket();
      setTicket(data);
      console.log(data);
    };
    fetchTicket();
  }, []);

  const handleSubmit = () => {
    addTicketMessage(message).then((res) => {
      setMessage("");
      setTicket(res);
      setLoading(false);
    });
  };

  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  };

  const handleClick = () => {
    setLoading(true);
    handleSubmit();
  };

  return (
    <div>
      {ticket && <p>{ticket.title}</p>}
      {ticket &&
        ticket.messages.map((message, id) => (
          <Wrapper key={id}>
            <div>{message[1]}</div>
            <div>
              <i className="far fa-user"></i>
              <p>{message[0] === "USER" ? user.name : "Admin"}</p>
            </div>
          </Wrapper>
        ))}
      <SendMessageWrapper>
        <p>Send message</p>
        <TextareaWrapper>
          <textarea value={message} onChange={handleMessage} placeholder="Your message" />
        </TextareaWrapper>
        <CenterGradientButton onClick={handleClick}>
          {!isLoading ? "Send message" : <Spinner small white />}
        </CenterGradientButton>
      </SendMessageWrapper>
    </div>
  );
};

export default Tickets;
