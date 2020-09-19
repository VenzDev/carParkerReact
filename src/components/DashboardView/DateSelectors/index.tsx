import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardTimePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import "date-fns";

const TimerDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 2rem;
  margin-bottom: 1rem;
  background-color: white;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  border-radius: 12px;
`;

const H2 = styled.h2`
  font-weight: 200;
  margin-left: 2rem;
`;

const DateSelectors: FunctionComponent = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date("2020-09-19T14:00:00"));

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <>
      <H2>Reserve parking space</H2>
      <TimerDiv>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disablePast={true}
            margin="normal"
            id="date-picker-dialog"
            label="Select date"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Start time"
            value={selectedDate}
            onChange={handleDateChange}
            ampm={false}
            views={["hours"]}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="End time"
            value={selectedDate}
            onChange={handleDateChange}
            ampm={false}
            views={["hours"]}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </MuiPickersUtilsProvider>
      </TimerDiv>
    </>
  );
};

export default DateSelectors;
