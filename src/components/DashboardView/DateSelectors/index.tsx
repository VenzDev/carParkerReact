import React, { FunctionComponent, useState, useEffect } from "react";
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
  flex-wrap: wrap;
`;

const H2 = styled.h2`
  font-weight: 200;
  margin-left: 2rem;
`;

const Order = styled.div`
  @media (max-width: 1200px) {
    order: 1;
  }
`;

const dateWithoutMinutes = (): Date => {
  const date = new Date();
  date.setMinutes(0);
  date.setHours(date.getHours() + 1);
  return date;
};

const dateWithCustomMinutes = (): Date => {
  const date = dateWithoutMinutes();
  date.setMinutes(45);
  return date;
};

const DateSelectors: FunctionComponent = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [startHour, setStartHour] = useState<Date | null>(dateWithoutMinutes());
  const [endHour, setEndHour] = useState<Date | null>(dateWithCustomMinutes());
  const [isError, setError] = useState(false);

  useEffect(() => {
    const validateHours = () => {
      if (startHour && startHour.getHours() <= new Date().getHours()) {
        setError(true);
      } else if (startHour && endHour && startHour?.getHours() > endHour?.getHours()) {
        setError(true);
      } else setError(false);
    };

    validateHours();
  }, [startHour, endHour]);

  const handleDateChange = (date: Date | null) => {
    setDate(date);
  };

  const handleStartHour = (date: Date | null) => {
    date?.setMinutes(0);
    setStartHour(date);
  };

  const handleEndHour = (date: Date | null) => {
    date?.setMinutes(45);
    setEndHour(date);
  };

  return (
    <>
      <H2>Reserve parking space</H2>
      <TimerDiv>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Order>
            <KeyboardDatePicker
              disablePast={true}
              margin="normal"
              id="date-picker-dialog"
              label="Select date"
              format="MM/dd/yyyy"
              value={date}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Order>
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Start time"
            value={startHour}
            onChange={handleStartHour}
            ampm={false}
            views={["hours"]}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
            error={isError}
            helperText={isError && "Invalid hours"}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="End time"
            value={endHour}
            onChange={handleEndHour}
            ampm={false}
            error={isError}
            helperText={isError && "Invalid hours"}
            views={["hours"]}
            cancelLabel="Anuluj"
            okLabel="Potwierdź"
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
