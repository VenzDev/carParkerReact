import React, { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { addTicketMessage, getTicketById } from "../../../api/Api";
import { Ticket } from "../../../features/types";
import { styled } from "../../../styles/theme";
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

const SpinnerWrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 300px);
`;

const Title = styled.p`
  width: 80%;
  margin: 1rem auto;
  font-size: 1.2rem;
`;

const BackButton = styled.button`
  color: white;
  background-color: ${({ theme }) => theme.color.blueDark};
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

interface Props {
  ticketId: number;
  handleBackToList: () => void;
}

const SelectedTicket: FunctionComponent<Props> = ({ ticketId, handleBackToList }) => {
  const [fetchTicket, setFetchTicket] = useState<Ticket | null>(null);
  const [message, setMessage] = useState("");
  const [isTicketLoading, setTicketLoading] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTicketById(ticketId);
      setTicketLoading(false);
      setFetchTicket(data);
    };
    fetchData();
  }, []); // eslint-disable-line

  const handleSubmit = () => {
    if (fetchTicket)
      addTicketMessage({ content: message, ticket_id: fetchTicket.id }).then((res) => {
        setMessage("");
        setFetchTicket(res);
        setLoading(false);
      });
  };

  const handleClick = () => {
    setLoading(true);
    handleSubmit();
  };

  return isTicketLoading ? (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  ) : (
    <div>
      <BackButton onClick={handleBackToList}>Back to all tickets</BackButton>
      {fetchTicket && <Title>{fetchTicket.title}</Title>}
      {fetchTicket &&
        fetchTicket.messages.map((message, id) => (
          <Wrapper key={id}>
            <div>{message.content}</div>
            <div>
              <i className="far fa-user" />
              <p>{message.user.role === "USER" ? message.user.name : "Admin"}</p>
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

export default SelectedTicket;
