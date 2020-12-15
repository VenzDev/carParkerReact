import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { styled } from "../../../styles/theme";

const Time = styled.div`
  background-color: ${({ theme }) => theme.color.blueDark};
  color: white;
  font-size: 1.8rem;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    margin-bottom:1rem;
  }
`;

interface IProps {
  time: number;
}

const Timer: FunctionComponent<IProps> = ({ time }) => {
  const [clock, setClock] = useState(time);
  const id = useRef(1);

  const clear = () => {
    window.clearInterval(id.current);
  };

  const prepareTime = (clock: number) => {
    let dateObj = new Date(clock * 1000);
    let days = Math.floor(clock / 86400);

    let hours = dateObj.getUTCHours();
    let minutes = dateObj.getUTCMinutes();
    let seconds = dateObj.getSeconds();

    let dayString = "";

    if (days > 0) dayString = `${days.toString()} `;
    else dayString = "";
    let timeString =
      dayString +
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");
    return timeString;
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setClock((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (clock === 0) {
      clear();
    }
  }, [clock]);

  return <Time>{prepareTime(clock)}</Time>;
};

export default Timer;
