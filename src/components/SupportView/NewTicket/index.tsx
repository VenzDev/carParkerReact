import React, { ChangeEvent, FunctionComponent, useState } from "react";
import styled from "styled-components";
import { createTicket } from "../../../api/Api";
import { GradientButton } from "../../Button";

const SendTicket = styled.div`
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
  background-color: white;
  width: 60%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    width: 90%;
    margin: 0 auto;

    > textarea {
      width: 100%;
      min-height: 300px;
    }
  }
`;

const Select = styled.select`
  margin: 1rem;
`;

const NewTicket: FunctionComponent = () => {
  const [title, setTitle] = useState("Problem with car");
  const [message, setMessage] = useState("");

  const handleTitle = (e: ChangeEvent<HTMLSelectElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = () => {
    createTicket({ title, message }).then(() => {
      console.log("success");
    });
  };

  return (
    <SendTicket>
      <Select onChange={handleTitle} name="ticket" id="ticket">
        <option value="Problem with car">Problem with car</option>
        <option value="Problem with RIFD scanner">Problem with RIFD scanner</option>
        <option value="Problem with RFID card">Problem with RFID card</option>
        <option value="Other">Other</option>
      </Select>
      <div>
        <textarea onChange={handleMessage} value={message} placeholder="your message" />
      </div>
      <GradientButton onClick={handleSubmit}>Send ticket</GradientButton>
    </SendTicket>
  );
};

export default NewTicket;
