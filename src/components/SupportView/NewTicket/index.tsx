import React, { ChangeEvent, FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createTicket } from "../../../api/Api";
import { GradientButton } from "../../Button";
import Spinner from "../../Reusable/Spinner";
import { setTicket } from "../../../features/User/slice";

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
    margin: 1rem auto;

    > textarea {
      padding: 1rem;
      text-indent: 1rem;
      width: 100%;
      min-height: 300px;
    }
  }
`;

const Select = styled.select`
  margin: 1rem;
`;

const GradientButtonRelative = styled(GradientButton)`
  position: relative;
  height: 50px;
`;

interface IProps {
  refreshPage: () => void;
}

const NewTicket: FunctionComponent<IProps> = ({ refreshPage }) => {
  const [title, setTitle] = useState("Problem with car");
  const [content, setContent] = useState("");
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleTitle = (e: ChangeEvent<HTMLSelectElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value);
  };

  const handleSubmit = () => {
    createTicket({ title, content }).then(() => {
      dispatch(setTicket({ has_ticket: true }));
      refreshPage();
    });
  };

  return (
    <SendTicket>
      <Select onChange={handleTitle} name="ticket" id="ticket">
        <option value="Problem with car">Problem with car</option>
        <option value="Problem with RIFD scanner">
          Problem with RIFD scanner
        </option>
        <option value="Problem with RFID card">Problem with RFID card</option>
        <option value="Other">Other</option>
      </Select>
      <div>
        <textarea
          onChange={handleMessage}
          value={content}
          placeholder="your message"
        />
      </div>
      <GradientButtonRelative
        style={{ position: "relative" }}
        onClick={() => {
          setLoading(true);
          handleSubmit();
        }}
      >
        {!isLoading ? "Send message" : <Spinner small white />}
      </GradientButtonRelative>
    </SendTicket>
  );
};

export default NewTicket;
