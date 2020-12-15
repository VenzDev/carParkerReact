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
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
  width: 80%;
  margin: 1rem auto;
  padding: 1rem;
  background-color: white;
  display: flex;

  @media (max-width: 750px) {
      width:100%;
  }

  > div:first-child {
    flex: 0 0 75%;
    border-right: 1px solid lightgray;

    @media (max-width: 750px) {
      flex: 0 0 60%;
    }
  }

  > div:last-child {
    flex: 0 0 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 750px) {
      flex: 0 0 40%;
    }

    > i {
      font-size: 2rem;
    }
  }
  
`;

const SpinnerWrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 300px);
`;

const SendMessageWrapper = styled.div`
  position: relative;
  min-height: 150px;
  border-radius: 10px;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
  width: 50%;
  margin: 1rem auto;
  padding: 1rem;
  background-color: white;

  @media (max-width: 1000px) {
    width:80%;
  }

  @media (max-width: 750px) {
    width:100%;
    margin:0 auto;
  }
`;

const TextareaWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  > textarea {
    height: 70px;
    width: 100%;
  }
  @media (max-width: 500px) {
      width:90%;
  }
`;

const CenterGradientButton = styled(GradientButton)`
  height: 40px;
  position: relative;
  display: block;
  margin: 1rem auto;
`;

const Title = styled.p`
  width:80%;
  margin:1rem auto; 
  font-size:1.2rem;
`

const Tickets: FunctionComponent = () => {
  const [isTicketLoading, setTicketLoading] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [message, setMessage] = useState("");
  const user: User = useSelector(selectUser);

  useEffect(() => {
    const fetchTicket = async () => {
      const data = await getUserTicket();
      setTicket(data);
      setTicketLoading(false);
    };
    fetchTicket();
  }, []);

  const handleSubmit = () => {
    if (ticket)
      addTicketMessage({ content: message, ticket_id: ticket.id }).then((res) => {
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
      {isTicketLoading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
          <>
            {ticket && <Title>{ticket.title}</Title>}
            {ticket &&
              ticket.messages.map((message, id) => (
                <Wrapper key={id}>
                  <div>{message.content}</div>
                  <div>
                    <i className="far fa-user" />
                    <p>{message.user.role === "USER" ? user.name : "Admin"}</p>
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
          </>
        )}
    </div>
  );
};

export default Tickets;
